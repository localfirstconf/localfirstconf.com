'use client'

import {Drawer} from 'vaul'
import {Transition} from '@headlessui/react'
import {ClockIcon, XMarkIcon} from '@heroicons/react/20/solid'
import {Speaker, Session} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {FC, useState} from 'react'
import {useWindowWidth} from '@/hooks/use-window-width'
import {useRouter} from 'next/navigation'

export const MobileDrawer: FC<{session: Omit<Session, 'speaker'> & {speaker: Speaker}}> = ({session}) => {
  const [snappoint, setSnapPoint] = useState<number>(1)
  const Content = useMDXComponent(session.body.code)
  const router = useRouter()
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth < 768

  const onOpenChange = (open: boolean) => {
    if (!open) router.back()
  }

  if (!isMobile) return null

  return (
    <Drawer.Root dismissible open onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" onClick={() => close()} />
        <Drawer.Content className="border-b-none fixed bottom-0 left-0 right-0 flex h-[94%] flex-col rounded-t-[10px] border-gray-200 bg-white focus-visible:outline-none">
          <Drawer.Handle className="mt-2 h-1 w-8 rounded-full bg-neutral-300" />
          <div className="flex flex-col overflow-y-auto p-8 pb-24 pt-12 text-black">
            <Link href={`/speakers/${session.speaker.slug}`} className="group/speaker flex items-center gap-2">
              <div className="relative size-12">
                <Image src={session.speaker.avatar} alt={session.speaker.name} fill className="object-contain object-left" />
              </div>
              <div className="leading-tight">
                <span className="group-hover/speaker:underline">{session.speaker.name}</span>
                <br />
                <span className="text-neutral-500">{session.speaker.attributes[0]}</span>
              </div>
            </Link>
            <h1 className="mt-8 font-display text-4xl leading-none">{session.title}</h1>
            <p className="mt-8 flex items-center gap-3 text-blue">
              <ClockIcon className="size-5" />
              <span>{`${format(new Date(session.start), 'MMM dd HH:mm')} - ${format(addMinutes(new Date(session.start), session.duration), 'HH:mm')}`}</span>
            </p>
            <div className="prose prose-sm prose-neutral mt-12 text-neutral-500">
              <Content />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
