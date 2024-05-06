import {TwitterIcon} from '@/components/icons/twitter'
import {cn} from '@/utils/cn'
import {LinkIcon} from '@heroicons/react/20/solid'
import {allSessions, allSpeakers} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export default function SpeakerPage({params: {slug}}: {params: {slug: string}}) {
  const speaker = allSpeakers.find((speaker) => speaker.slug === slug)
  if (!speaker) notFound()
  const sessions = allSessions.filter((session) => session.speaker === slug)

  const Content = useMDXComponent(speaker.body.code)

  return (
    <div className="w-full max-w-3xl gap-8 py-24">
      <div className="flex gap-16">
        <div>
          <div className="mb-1 text-lg uppercase tracking-widest text-orange">Speakers</div>
          <h1 className="font-display text-[5rem] uppercase leading-none">{speaker.name}</h1>
          <ul className="mt-6">
            {speaker.attributes.map((attribute, index) => (
              <li key={index}>{attribute}</li>
            ))}
          </ul>
          {(speaker.twitter || speaker.website) && (
            <div className="mt-4 flex gap-2 text-blue">
              {speaker.twitter && (
                <Link href={speaker.twitter} className="transition-colors duration-200 ease-in-out hover:text-white" target="_blank" rel="noreferrer">
                  <TwitterIcon className="h-5" />
                </Link>
              )}
              {speaker.website && (
                <Link href={speaker.website} className="transition-colors duration-200 ease-in-out hover:text-white" target="_blank" rel="noreferrer">
                  <LinkIcon className="h-5" />
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="relative size-64 shrink-0">
          <Image
            src={speaker.avatar}
            alt={speaker.name}
            fill
            className="object-contain object-center transition-transform duration-150 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="prose prose-neutral prose-invert mt-16 text-neutral-400">
        <Content />
      </div>

      {sessions.length > 0 && (
        <>
          <h2 className="mt-24 font-display text-4xl uppercase leading-none">Sessions</h2>
          <ul className="mt-4">
            {sessions.map(({title, excerpt, start, duration, path}, index) => (
              <li key={index}>
                <Link href={path} className="block bg-neutral-300 p-5 pb-6 text-sm text-neutral-500 transition-colors duration-150 hover:bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={cn(
                          'font-display text-2xl uppercase leading-none text-black',
                          duration < 15 && 'line-clamp-1 group-hover:line-clamp-none'
                        )}
                      >
                        <Link href={path}>{title}</Link>
                      </h3>
                      <p className="mt-2">{excerpt}</p>
                    </div>
                    <div className="shrink-0 text-right leading-tight">
                      <div>{`${format(new Date(start), 'HH:mm')}`}</div>
                      <div>{format(addMinutes(new Date(start), duration), 'HH:mm')}</div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
