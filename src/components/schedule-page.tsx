'use client'

import {FC, ReactNode} from 'react'
import {Schedule} from './schedule'
import {Session, Profile} from 'contentlayer/generated'
import {usePathname} from 'next/navigation'
import {cn} from '@/utils/cn'

export const SchedulePage: FC<{sessions: (Omit<Session, 'speaker'> & {speaker: Profile})[]; children?: ReactNode}> = ({sessions, children}) => {
  const pathname = usePathname()
  const centered = pathname.split('/').length === 3

  return (
    <div
      className={cn(
        'width-schedule px-4 pt-24 duration-300 ease-in-out md:pl-16 md:pr-0 md:transition-transform',
        centered ? 'md:translate-x-1/2' : 'md:translate-x-0'
      )}
    >
      {children}
      <Schedule sessions={sessions} />
    </div>
  )
}
