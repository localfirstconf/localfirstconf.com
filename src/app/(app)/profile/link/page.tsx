'use client'

import {Combobox, ComboboxInput, ComboboxOption, ComboboxOptions} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/20/solid'
import {allProfiles} from 'contentlayer/generated'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

const profiles = allProfiles.map((profile) => ({slug: profile.slug, name: profile.name}))

export default function LinkAttendeePage() {
  const [selectedPerson, setSelectedPerson] = useState()
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? profiles
      : profiles.filter((profile) => {
          return profile.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="w-full max-w-3xl gap-8 px-4 py-24 md:px-0">
      <h1 className="font-display text-4xl uppercase leading-none">Link your profile</h1>
      <p className="my-8 max-w-lg">
        To link your attendee profile here, enter your slug. If you don&apos;t have one, create it{' '}
        <Link
          href="https://github.com/localfirstconf/localfirstconf.com/tree/main/content/profiles#readme"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          here
        </Link>
        . Your name will appear here after we merge your PR.
      </p>
      <div className="flex gap-2">
        {/* @ts-ignore */}
        <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
          <ComboboxInput
            aria-label="Profile"
            displayValue={(person: any) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
            className="h-12 w-64 rounded-full border border-white bg-black px-6 text-white"
          />
          <ComboboxOptions anchor="bottom" className="mt-2 w-64 rounded-3xl border border-white bg-black p-1 empty:hidden">
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.slug}
                value={person}
                className="group flex h-10 items-center gap-2 rounded-full px-4 data-[focus]:bg-neutral-700"
              >
                <span>{person.name}</span>
                <CheckIcon className="invisible size-5 group-data-[selected]:visible" />
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
        <button className="h-12 rounded-full bg-magenta px-6 text-black">Link profile</button>
      </div>
    </div>
  )
}
