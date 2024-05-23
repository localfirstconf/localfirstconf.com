'use client'

import {cn} from '@/utils/cn'
import {Session, Profile} from 'contentlayer/generated'
import {differenceInMinutes} from 'date-fns'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {FC} from 'react'

export const ScheduleSession: FC<{session: Omit<Session, 'speaker'> & {speaker: Profile}; firstStart: Date}> = ({session, firstStart}) => {
  const {title, speaker, placeholder, start, duration, path} = session
  const pathname = usePathname()

  return (
    <li
      className="group absolute left-16 right-4 pb-0.5 md:left-20"
      style={{height: `calc(10rem * ${duration / 60})`, top: `calc(10rem * ${differenceInMinutes(new Date(start), firstStart) / 60})`}}
    >
      {placeholder ? (
        <div className="relative flex h-full items-start border border-white bg-neutral-800 pl-2 pt-1">
          <h3 className={cn('font-display text-base leading-none text-neutral-300', duration < 15 && 'line-clamp-1 group-hover:line-clamp-none')}>
            {title}
          </h3>
        </div>
      ) : (
        <Link
          href={path}
          scroll={false}
          className={cn('relative flex h-full items-start px-2 pt-1 transition-transform duration-150 hover:scale-[1.03]')}
          style={{backgroundColor: pathname === path ? '#ffffff' : session.colors.bg, color: pathname === path ? '#000000' : session.colors.text}}
        >
          <h3 className={cn('leading-none', duration < 15 && 'line-clamp-1')}>
            <span className="font-display text-base leading-none">{title}</span>
            <span className="text-xs opacity-75">{` ${speaker.name}`}</span>
          </h3>
        </Link>
      )}
    </li>
  )
}
