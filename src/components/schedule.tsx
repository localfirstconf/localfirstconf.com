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
          <div key={index} className={cn('text-orange border-orange h-28', index === hours.length - 1 ? 'border-t' : 'mb-28 border-y')}>
            {format(date, 'HH:mm')}
          </div>
        ))}
      </div>
      <ul className="">
        {sessions.map(({title, excerpt, speaker, start, duration, location, path}, index) => {
          return (
            <li
              key={index}
              className="absolute left-20 right-4 p-1"
              style={{height: `calc(14rem * ${duration / 60})`, top: `calc(14rem * ${differenceInMinutes(new Date(start), firstStart) / 60})`}}
            >
              <Link href={path} className="block h-full bg-white p-4 pt-3 text-sm text-neutral-500">
                <h3 className="line-clamp-1 font-display text-2xl uppercase text-black">{title}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative h-9 w-9">
                      <Image src={speaker.avatar} alt={speaker.name} fill className="object-contain object-left" />
                    </div>
                    <div className="w-8 leading-tight">{speaker.name}</div>
                  </div>
                  <div className="flex shrink-0 gap-1 text-right leading-tight">
                    {`${format(new Date(start), 'HH:mm')}`}
                    <br />
                    {`${format(addMinutes(new Date(start), duration), 'HH:mm')}`}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
