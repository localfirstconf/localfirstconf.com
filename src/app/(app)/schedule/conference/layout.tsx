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
      <SchedulePage sessions={sessions}>
        <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Local-First Conf</div>
        <h1 className="font-display text-4xl uppercase leading-none md:text-7xl">Conference Day Schedule</h1>
        <p className="mb-16 mt-8">
          The conference day is on May 30, 2024. The venue is Schankhalle Pfefferberg located at{' '}
          <a href="https://maps.app.goo.gl/sFm1EMsFPkQAHt1b7">Schönhauser Allee 176, 10119 Berlin</a>.
        </p>
      </SchedulePage>
      {children}
    </div>
  )
}
