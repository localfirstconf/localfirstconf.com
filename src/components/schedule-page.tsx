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
      className={cn('pl-16 pt-24 transition-transform duration-300 ease-in-out', centered ? 'translate-x-1/2' : 'translate-x-0')}
      style={{width: 'calc(50vw - 8rem)'}}
    >
      <div className="mb-1 text-lg uppercase tracking-widest text-orange">Local-First Conf</div>
      <h1 className="font-display text-7xl uppercase leading-none">Conference Day Schedule</h1>
      <p className="mb-16 mt-8">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <Schedule sessions={sessions} />
    </div>
  )
}
