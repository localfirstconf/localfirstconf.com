import {ClockIcon, XMarkIcon} from '@heroicons/react/20/solid'
import {Profile, Session} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import {SessionFeedback} from './session-feedback'

export const DesktopDrawer: FC<{back: string; session: Omit<Session, 'speaker'> & {speaker: Profile}}> = ({back, session}) => {
  const Content = useMDXComponent(session.body.code)

  return (
    <div className="hidden h-full w-full px-4 py-24 text-sm text-black md:block md:px-16">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Link href={`/profile/${session.speaker.slug}`} className="group/speaker flex items-center gap-2">
            <div className="relative size-12">
              <Image src={session.speaker.avatar} alt={session.speaker.name} fill className="object-contain object-left" />
              {session.speaker.avatar.startsWith('https://') && (
                <svg viewBox="0 0 689 689" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 fill-current text-white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M233 0H0V689H558.5H689V0H233ZM233 0L643.5 92V591L558.5 689L35 571V302L233 0Z" />
                </svg>
              )}
            </div>
            <div className="leading-tight">
              <span className="group-hover/speaker:underline">{session.speaker.name}</span>
              <br />
              <span className="text-neutral-500">{session.speaker.role}</span>
            </div>
          </Link>
          <Link href={back} scroll={false}>
            <XMarkIcon className="size-6 text-neutral-500" />
          </Link>
        </div>
        <h1 className="mt-8 font-display text-4xl leading-none">{session.title}</h1>
        <p className="mt-8 flex items-center gap-3 text-blue">
          <ClockIcon className="size-5" />
          <span>{`${format(new Date(session.start), 'MMM dd HH:mm')} - ${format(addMinutes(new Date(session.start), session.duration), 'HH:mm')}`}</span>
        </p>
        <div className="prose prose-sm prose-neutral mt-16 text-neutral-500">
          <Content />
        </div>
        <SessionFeedback sessionTitle={session.title} />
      </div>
    </div>
  )
}
