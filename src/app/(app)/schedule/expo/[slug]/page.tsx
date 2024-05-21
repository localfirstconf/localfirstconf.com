import {ClockIcon, XMarkIcon} from '@heroicons/react/20/solid'
import {allSessions, allProfiles} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {Transition} from '@headlessui/react'
import {Metadata} from 'next'

const sessions = allSessions.map((session) => {
  const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
  return {...session, speaker}
})

export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {
  const session = sessions.find((session) => session.path === `/schedule/expo/${slug}`)
  if (!session || session.placeholder) notFound()

  return {
    title: `${session.title} – Expo Day – Local-First Conf 2024`
  }
}

export async function generateStaticParams() {
  return sessions
    .filter((session) => session.path.startsWith('/schedule/expo'))
    .map((session) => {
      const segments = session.path.split('/')
      return {
        slug: segments[segments.length - 1]
      }
    })
}

export default function SessionPage({params: {slug}}: {params: {slug: string}}) {
  const session = sessions.find((session) => session.path === `/schedule/expo/${slug}`)
  if (!session || session.placeholder) notFound()

  const Content = useMDXComponent(session.body.code)

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all duration-300 ease-in-out"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
    >
      <div className="fixed inset-y-0 right-0 overflow-y-auto bg-white px-16 py-24 text-sm text-black" style={{width: 'calc(50vw - 8rem)'}}>
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
                  <span className="text-neutral-500">{session.speaker.role}</span>
                </div>
              </Link>
              <Link href="/schedule/expo" scroll={false}>
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
