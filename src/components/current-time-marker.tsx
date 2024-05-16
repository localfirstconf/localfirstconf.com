'use client'

import {cn} from '@/utils/cn'
import {addHours, differenceInMinutes, format, setDate} from 'date-fns'
import {FC, useEffect, useState} from 'react'

export const CurrentTimeMarker: FC<{firstStart: Date}> = ({firstStart}) => {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const updateTime = () => {
      const newTime = addHours(new Date(), -4)
      const newerTime = setDate(newTime, 30)
      console.log(newerTime)
      if (format(newTime, 'mm') != format(time, 'mm')) setTime(newerTime)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <div
      className={cn('absolute left-20 right-4 border border-magenta text-magenta')}
      style={{top: `calc(10rem * ${differenceInMinutes(time, firstStart) / 60})`}}
    >
      {format(time, 'dd.MM. HH:mm')}
    </div>
  )
}
