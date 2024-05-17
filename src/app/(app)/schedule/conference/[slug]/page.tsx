import {ClockIcon, MapPinIcon, XMarkIcon} from '@heroicons/react/20/solid'
import {allSessions, allSpeakers} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {Transition} from '@headlessui/react'

const sessions = allSessions.map((session) => {
  const speaker = allSpeakers.find((speaker) => speaker.slug === session.speaker)!
  return {...session, speaker}
})

export default function SessionPage({params: {slug}}: {params: {slug: string}}) {
  const session = sessions.find((session) => session.path === `/schedule/conference/${slug}`)
  if (!session || session.placeholder) notFound()

  const Content = useMDXComponent(session.body.code)

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all duration-300 ease-in-out"
      enterFrom="translate-y-full md:translate-y-0 md:translate-x-full opacity-0"
      enterTo="translate-y-0 translate-x-0 opacity-100"
    >
      <div className="width-schedule fixed inset-y-0 right-0 overflow-y-auto bg-white px-4 py-24 text-sm text-black md:px-16">
        <Transition show={true} enter="transition-transform duration-300 ease-in-out" enterFrom="scale-80" enterTo="scale-100">
          <div className="flex flex-col">
            <div className="flex justify-between">
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
              <Link href="/schedule/conference" scroll={false}>
                <XMarkIcon className="size-6 text-neutral-500" />
              </Link>
            </div>
            <h1 className="mt-8 font-display text-4xl uppercase leading-none">{session.title}</h1>
            <p className="mt-8 flex items-center gap-3 text-blue">
              <ClockIcon className="size-5" />
              <span>{`${format(new Date(session.start), 'MMM dd HH:mm')} - ${format(addMinutes(new Date(session.start), session.duration), 'HH:mm')}`}</span>
            </p>
            <div className="prose prose-sm prose-neutral mt-16 text-neutral-500">
              <Content />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  )
}
