import {ClockIcon, MapPinIcon} from '@heroicons/react/20/solid'
import {allSessions, allSpeakers} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

const sessions = allSessions.map((session) => {
  const speaker = allSpeakers.find((speaker) => speaker.slug === session.speaker)!
  return {...session, speaker}
})

export default function SessionPage({params: {slug}}: {params: {slug: string | string[]}}) {
  // @ts-ignore
  const path = '/schedule/' + (slug.length ? slug.join('/') : slug)
  const session = sessions.find((session) => session.path === path)
  if (!session) notFound()

  const Content = useMDXComponent(session.body.code)

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-8 py-24">
      <Link href={`/speakers/${session.speaker.slug}`} className="group/speaker flex items-center gap-2">
        <div className="relative size-14">
          <Image src={session.speaker.avatar} alt={session.speaker.name} fill className="object-contain object-left" />
        </div>
        <div className="leading-tight">
          <span className="group-hover/speaker:underline">{session.speaker.name}</span>
          <br />
          <span className="text-neutral-400">{session.speaker.attributes[0]}</span>
        </div>
      </Link>
      <h1 className="text-center font-display text-6xl uppercase leading-none">{session.title}</h1>
      <p>{session.excerpt}</p>
      <div className="my-8 flex w-full max-w-[65ch] flex-wrap justify-between gap-x-4 gap-y-0">
        <p className="flex items-center gap-3 text-blue">
          <ClockIcon className="size-5" />
          <span>{`${format(new Date(session.start), 'MMM dd HH:mm')} - ${format(addMinutes(new Date(session.start), session.duration), 'HH:mm')}`}</span>
        </p>
        <p className="flex items-center gap-3 text-neutral-400">
          <MapPinIcon className="size-5" />
          <span>{session.location}</span>
        </p>
      </div>
      <div className="prose prose-neutral prose-invert text-neutral-400">
        <Content />
      </div>
    </div>
  )
}
