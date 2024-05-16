import {SchedulePage} from '@/components/schedule-page'
import {allSessions, allSpeakers} from 'contentlayer/generated'

const sessions = allSessions
  .filter((session) => session.category === 'conference')
  .map((session) => {
    const speaker = allSpeakers.find((speaker) => speaker.slug === session.speaker)!
    return {...session, speaker}
  })
  .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full gap-16">
      <SchedulePage sessions={sessions} />
      {children}
    </div>
  )
}
