import {cn} from '@/utils/cn'
import {Session, Speaker} from 'contentlayer/generated'
import {addHours, addMinutes, differenceInMinutes, eachHourOfInterval, format, formatDate, interval} from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export const Schedule: React.FC<{sessions: (Omit<Session, 'speaker'> & {speaker: Speaker})[]}> = ({sessions}) => {
  const firstStart = new Date(sessions[0].start)
  const lastEnd = addMinutes(new Date(sessions[sessions.length - 1].start), sessions[sessions.length - 1].duration)
  const hours = eachHourOfInterval(interval(firstStart, addHours(lastEnd, 1)))

  return (
    <div className="relative">
      <div className="">
        {hours.map((date, index) => (
          <div key={index} className={cn('h-40 border-orange text-orange', index === hours.length - 1 ? 'border-t' : 'mb-40 border-y')}>
            {format(date, 'HH:mm')}
          </div>
        ))}
      </div>
      <ul className="">
        {sessions.map(({title, excerpt, speaker, start, duration, path}, index) => {
          return (
            <li
              key={index}
              className="group absolute left-20 right-4 p-1"
              style={{height: `calc(20rem * ${duration / 60})`, top: `calc(20rem * ${differenceInMinutes(new Date(start), firstStart) / 60})`}}
            >
              <div className="relative block h-full bg-neutral-400 text-sm text-neutral-500 group-hover:z-10 group-hover:bg-white group-hover:shadow-lg">
                <div className="flex items-start justify-between gap-4 bg-neutral-400 px-4 pt-3.5 group-hover:bg-white">
                  <h3
                    className={cn('font-display text-xl uppercase leading-none text-black', duration < 15 && 'line-clamp-1 group-hover:line-clamp-none')}
                  >
                    <Link href={path}>{title}</Link>
                  </h3>
                  <div className="shrink-0 text-right leading-tight opacity-0 group-hover:opacity-100">
                    <div>{`${format(new Date(start), 'HH:mm')}`}</div>
                    <div className="relative h-0 group-hover:z-20">{format(addMinutes(new Date(start), duration), 'HH:mm')}</div>
                  </div>
                </div>
                <div className="relative z-10 origin-top scale-y-0 bg-white p-4 transition-transform duration-0 group-hover:scale-y-100 group-hover:duration-100">
                  <Link
                    href={`/speakers/${speaker.slug}`}
                    className="group/speaker flex items-center gap-2 opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-hover:duration-200"
                  >
                    <div className="relative h-9 w-9">
                      <Image src={speaker.avatar} alt={speaker.name} fill className="object-contain object-left" />
                    </div>
                    <div className="leading-tight">
                      <span className="text-black group-hover/speaker:underline">{speaker.name}</span>
                      <br />
                      <span>{speaker.attributes[0]}</span>
                    </div>
                  </Link>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <p className="pb-1 text-xs">{excerpt}</p>
                    <Link
                      href={path}
                      className="inline-flex h-10 shrink-0 items-center rounded-full bg-magenta px-4 text-black transition-colors duration-200 hover:bg-black hover:text-white"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
