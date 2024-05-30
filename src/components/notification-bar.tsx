'use client'

import {useEffect, useState} from 'react'
import {getCurrentSessions} from '@/utils/get-current-sessions'
import Link from 'next/link'
import {getNextSession} from '@/utils/get-next-session'
import {toZonedTime, format} from 'date-fns-tz'

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
    <div className="fixed top-0 z-20 flex h-auto min-h-8 w-full flex-wrap items-center justify-between bg-magenta px-4 py-1 text-xs text-black sm:h-8 md:px-8">
      <div className="line-clamp-1 whitespace-nowrap">
        {format(toZonedTime(time, 'Europe/Berlin'), 'MMM dd, HH', {timeZone: 'Europe/Berlin'})}
        <span className="animate-blink">:</span>
        {format(toZonedTime(time, 'Europe/Berlin'), 'mm', {timeZone: 'Europe/Berlin'})}
      </div>
      {currentSessions?.length > 0 && (
        <div className="line-clamp-1 whitespace-nowrap">
          <span>Now: </span>
          {currentSessions[0].placeholder ? (
            <span>{`${currentSessions[0].speaker ? `${currentSessions[0].speaker.name} - "` : ''}${currentSessions[0].title}${currentSessions[0].speaker ? '"' : ''}`}</span>
          ) : (
            <Link href={currentSessions[0].path} className="hover:underline">
              {`${currentSessions[0].speaker ? `${currentSessions[0].speaker.name} - "` : ''}${currentSessions[0].title}${currentSessions[0].speaker ? '"' : ''}`}
            </Link>
          )}
          {currentSessions.length > 1 && <span>{` + ${currentSessions.length - 1} other`}</span>}
        </div>
      )}
      {nextSession && (
        <div className="line-clamp-1 whitespace-nowrap">
          <span>Next: </span>
          {nextSession.placeholder ? (
            <span>{`${nextSession.speaker?.name ?? nextSession.title}`}</span>
          ) : (
            <Link href={nextSession.path} className="hover:underline">
              {`${nextSession.speaker?.name ?? nextSession.title}`}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
