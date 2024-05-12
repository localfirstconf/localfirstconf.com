'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {FormEventHandler, useState} from 'react'

export default function LinkAttendeePage() {
  const router = useRouter()
  const [slug, setSlug] = useState<string>('')

  const linkProfile: FormEventHandler = (e) => {
    e.preventDefault()
    if (slug) localStorage.setItem('attendee-slug', slug)
    router.push(`/attendees/${slug}`)
  }

  return (
    <div className="w-full max-w-3xl gap-8 py-24">
      <h1 className="font-display text-4xl uppercase leading-none">Link your profile</h1>
      {/* TODO: Link to Readme */}
      <div className="max-w-lg">
        <p className="my-8">
          To link your attendee profile here, enter your slug. If you don&apos;t have one, create it{' '}
          <Link href="/" className="underline">
            here
          </Link>
          .
        </p>
        <form className="flex h-12 gap-2 rounded-full border border-white p-1 focus-within:ring focus-within:ring-white/40" onSubmit={linkProfile}>
          <input
            type="text"
            required
            name="slug"
            placeholder="Your slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="h-full grow rounded-full bg-transparent px-4 text-white placeholder-neutral-500 focus:outline-none"
          />
          <button type="submit" className="h-full shrink-0 rounded-full bg-magenta px-4 text-black hover:bg-white focus:bg-white focus:outline-none">
            Link profile
          </button>
        </form>
      </div>
    </div>
  )
}
