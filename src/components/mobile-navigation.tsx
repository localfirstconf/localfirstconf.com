'use client'

import {CalendarIcon, UserGroupIcon, UserIcon} from '@heroicons/react/20/solid'
import Link from 'next/link'
import {FC, useEffect, useState} from 'react'

export const MobileNavigation: FC<{}> = ({}) => {
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    const slug = localStorage.getItem('attendee-slug')
    if (slug) setSlug(slug)
  }, [])

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white text-black md:hidden">
      <ul className="relative grid grid-cols-4 py-2 text-center text-xs leading-none">
        <div className="absolute top-0 h-px w-full bg-neutral-400" />
        <li className="relative">
          <Link href="/schedule/conference">
            <CalendarIcon className="mx-auto mb-2 size-6" />
            <span>
              Conference
              <br />
              Schedule
            </span>
          </Link>
        </li>
        <li className="relative">
          <Link href="/schedule/expo">
            <CalendarIcon className="mx-auto mb-2 size-6" />
            <span>
              Expo Day
              <br />
              Schedule
            </span>
          </Link>
        </li>
        <li className="relative">
          <Link href="/speakers">
            <UserGroupIcon className="mx-auto mb-2 size-6" />
            <span>Speakers</span>
          </Link>
        </li>
        <li className="relative">
          <Link href={`/attendees/${slug ? slug : 'link'}`}>
            <UserIcon className="mx-auto mb-2 size-6" />
            <span>
              Attendee
              <br />
              Profile
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
