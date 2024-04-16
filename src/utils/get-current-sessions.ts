import {allSessions, allSpeakers} from 'contentlayer/generated'
import {addMinutes, interval, isWithinInterval} from 'date-fns'

export const getCurrentSessions = (currentDateTime: Date) => {
  return allSessions
    .filter((session) => {
      const sessionInterval = interval(new Date(session.start), addMinutes(new Date(session.start), session.duration))
      return isWithinInterval(currentDateTime, sessionInterval)
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .map((session) => {
      const speaker = allSpeakers.find((speaker) => speaker.slug === session.speaker)
      return {...session, speaker}
    })
}
