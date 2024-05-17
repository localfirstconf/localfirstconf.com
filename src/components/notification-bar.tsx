'use client'

import {useEffect, useState} from 'react'
import {format} from 'date-fns'
import {getCurrentSessions} from '@/utils/get-current-sessions'
import Link from 'next/link'
import {getNextSession} from '@/utils/get-next-session'

export const NotificationBar = () => {
  const [time, setTime] = useState<Date>(new Date())
  const currentSessions = getCurrentSessions(time)
  const nextSession = getNextSession(time)

  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date()
      if (format(newTime, 'mm') != format(time, 'mm')) setTime(newTime)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <div className="fixed top-0 z-20 flex h-8 w-full items-center justify-between bg-magenta px-4 text-xs text-black md:px-8">
      <div>
        {format(time, 'MMM dd, HH')}
        <span className="animate-blink">:</span>
        {format(time, 'mm')}
      </div>
      {currentSessions?.length > 0 && (
        <div>
          <span>Now: </span>
          <Link href={currentSessions[0].path} className="hover:underline">
            {`${currentSessions[0].speaker ? `${currentSessions[0].speaker.name} - "` : ''}${currentSessions[0].title}${currentSessions[0].speaker ? '"' : ''}`}
          </Link>
          {currentSessions.length > 1 && <span>{` + ${currentSessions.length - 1} other`}</span>}
        </div>
      )}
      {nextSession && (
        <div>
          <span>Next: </span>
          <Link href={nextSession.path} className="hover:underline">
            {`${nextSession.speaker?.name ?? nextSession.title}`}
          </Link>
        </div>
      )}
    </div>
  )
}
