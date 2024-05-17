'use client'

import {cn} from '@/utils/cn'
import {Session, Speaker} from 'contentlayer/generated'
import {addMinutes, differenceInMinutes, format} from 'date-fns'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {FC} from 'react'

export const ScheduleSession: FC<{session: Omit<Session, 'speaker'> & {speaker: Speaker}; firstStart: Date}> = ({session, firstStart}) => {
  const {title, placeholder, start, duration, path} = session
  const pathname = usePathname()

  return (
    <li
      className="group absolute left-16 right-4 pb-0.5 md:left-20"
      style={{height: `calc(10rem * ${duration / 60})`, top: `calc(10rem * ${differenceInMinutes(new Date(start), firstStart) / 60})`}}
    >
      {placeholder ? (
        <div className="relative flex h-full items-start border border-neutral-400 bg-neutral-800 pl-2 pt-1">
          <h3
            className={cn('font-display text-base uppercase leading-none text-neutral-400', duration < 15 && 'line-clamp-1 group-hover:line-clamp-none')}
          >
            {title}
          </h3>
        </div>
      ) : (
        <Link
          href={path}
          scroll={false}
          className={cn('relative flex h-full items-start pl-2 pt-1', pathname === path ? 'bg-white' : 'bg-neutral-400 group-hover:bg-white')}
        >
          <h3 className={cn('font-display text-base uppercase leading-none text-black', duration < 15 && 'line-clamp-1')}>{title}</h3>
        </Link>
      )}
    </li>
  )
}
