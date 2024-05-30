import {allProfiles, allSessions} from 'contentlayer/generated'
import {addMinutes, interval, isWithinInterval} from 'date-fns'
import {toZonedTime} from 'date-fns-tz'

export const getCurrentSessions = (currentDateTime: Date) => {
  return allSessions
    .filter((session) => {
      const sessionInterval = interval(new Date(session.start), addMinutes(new Date(session.start), session.duration))
      return isWithinInterval(toZonedTime(currentDateTime, 'Europe/Berlin'), sessionInterval)
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .map((session) => {
      const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
      return {...session, speaker}
    })
}
