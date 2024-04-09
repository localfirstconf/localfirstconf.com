import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.webp'
import {ProfileLink} from './profile-link'

const content = {
  items: [
    {href: '/schedule', caption: 'Schedule'},
    {href: '/speakers', caption: 'Speakers'}
  ]
}

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 flex h-screen w-64 shrink-0 flex-col justify-between p-8 pt-16">
      <Link href="/">
        <Image src={Logo} alt="Local-First Conf Logo" className="h-14 w-auto" />
      </Link>
      <ul className="mt-8 flex flex-col gap-2">
        {content.items.map(({href, caption}, index) => (
          <li key={index}>
            <Link href={href} className="transition-colors duration-300 hover:text-neutral-300">
              {caption}
            </Link>
          </li>
        ))}
      </ul>
      <ProfileLink />
    </aside>
  )
}
