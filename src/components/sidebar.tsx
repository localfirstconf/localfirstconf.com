import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.webp'
import {ProfileLink} from './profile-link'
import {Navigation} from './navigation'

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 flex h-screen w-48 shrink-0 flex-col justify-between p-8 pt-24">
      <Link href="/">
        <Image src={Logo} alt="Local-First Conf Logo" className="h-14 w-auto" />
      </Link>
      <Navigation />
      <ProfileLink />
    </aside>
  )
}
