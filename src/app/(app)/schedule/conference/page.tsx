import {Schedule} from '@/components/schedule'
import {allSessions, allSpeakers} from 'contentlayer/generated'

const sessions = allSessions
  .filter((session) => session.category === 'conference')
  .map((session) => {
    const speaker = allSpeakers.find((speaker) => speaker.slug === session.speaker)!
    return {...session, speaker}
  })
  .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

export default function ConferencePage() {
  return (
    <div className="grid w-full max-w-screen-lg grid-cols-2 gap-16 pb-16 pt-32">
      <div className="sticky top-48 h-96">
        <h1 className="font-display text-[5rem] uppercase leading-none">Conference</h1>
        <p className="mb-16 mt-8 max-w-md">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua.
        </p>
      </div>
      <div className="w-full py-4">
        <Schedule sessions={sessions} />
      </div>
    </div>
  )
}
