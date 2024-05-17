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
    <div className="w-full max-w-3xl gap-8 px-4 py-24 md:px-0">
      <div className="flex flex-col-reverse gap-x-16 gap-y-8 md:flex-row">
        <div>
          <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Speakers</div>
          <h1 className="font-display text-4xl uppercase leading-none md:text-[5rem]">{speaker.name}</h1>
          <ul className="mt-3 md:mt-6">
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
        <div className="relative size-48 shrink-0 md:size-64">
          <Image
            src={speaker.avatar}
            alt={speaker.name}
            fill
            className="object-contain object-center transition-transform duration-150 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="prose prose-neutral prose-invert mt-8 text-neutral-400 md:mt-16">
        <Content />
      </div>

      {sessions.length > 0 && (
        <>
          <h2 className="mt-16 font-display text-4xl uppercase leading-none md:mt-24">Sessions</h2>
          <ul className="mt-4 space-y-4">
            {sessions.map(({title, start, duration, path}, index) => (
              <li key={index}>
                <Link href={path} className="block bg-neutral-300 p-5 pb-6 text-sm text-neutral-500 transition-colors duration-150 hover:bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={cn(
                          'font-display text-xl uppercase leading-none text-black md:text-2xl',
                          duration < 15 && 'line-clamp-1 group-hover:line-clamp-none'
                        )}
                      >
                        <Link href={path}>{title}</Link>
                      </h3>
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
