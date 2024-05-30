import {allSessions, allProfiles} from 'contentlayer/generated'
import {isAfter} from 'date-fns'

export const getNextSession = (currentDateTime: Date) => {
  const session = allSessions
    .filter((session) => isAfter(new Date(session.start), currentDateTime))
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())[0]
  if (!session) return null
  const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
  return {...session, speaker}
}
