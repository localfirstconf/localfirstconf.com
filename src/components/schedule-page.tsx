'use client'

import {FC} from 'react'
import {Schedule} from './schedule'
import {Session, Speaker} from 'contentlayer/generated'
import {usePathname} from 'next/navigation'
import {cn} from '@/utils/cn'

export const SchedulePage: FC<{sessions: (Omit<Session, 'speaker'> & {speaker: Speaker})[]}> = ({sessions}) => {
  const pathname = usePathname()
  const centered = pathname.split('/').length === 3

  return (
    <div
      className={cn(
        'width-schedule px-4 pt-24 duration-300 ease-in-out md:pl-16 md:pr-0 md:transition-transform',
        centered ? 'md:translate-x-1/2' : 'md:translate-x-0'
      )}
    >
      <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Local-First Conf</div>
      <h1 className="font-display text-4xl uppercase leading-none md:text-7xl">Conference Day Schedule</h1>
      <p className="mb-16 mt-8">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <Schedule sessions={sessions} />
    </div>
  )
}
