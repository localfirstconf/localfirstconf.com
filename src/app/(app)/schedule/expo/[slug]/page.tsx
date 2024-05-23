import {allSessions, allProfiles} from 'contentlayer/generated'
import {notFound} from 'next/navigation'
import {Metadata} from 'next'
import {DesktopDrawer} from '@/components/desktop-drawer'
import {MobileDrawer} from '@/components/mobile-drawer'

const sessions = allSessions.map((session) => {
  const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
  return {...session, speaker}
})

export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {
  const session = sessions.find((session) => session.path === `/schedule/expo/${slug}`)
  if (!session || session.placeholder) notFound()

  return {
    title: `${session.title} – Expo Day – Local-First Conf 2024`
  }
}

export async function generateStaticParams() {
  return sessions
    .filter((session) => session.path.startsWith('/schedule/expo'))
    .map((session) => {
      const segments = session.path.split('/')
      return {
        slug: segments[segments.length - 1]
      }
    })
}

export default function SessionPage({params: {slug}}: {params: {slug: string}}) {
  const session = sessions.find((session) => session.path === `/schedule/expo/${slug}`)
  if (!session || session.placeholder) notFound()

  return (
    <>
      <DesktopDrawer back="/schedule/expo" session={session} />
      <MobileDrawer session={session} />
    </>
  )
}
