import {allSpeakers} from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

export default function SpeakersPage() {
  return (
    <div className="w-full max-w-3xl py-24">
      <div className="mb-1 text-lg uppercase tracking-widest text-orange">Speakers</div>
      <h1 className="font-display text-6xl uppercase leading-none">Hear from the World&apos;s best Local-First Builders</h1>
      <ul className="mt-16 grid grid-cols-3 gap-y-16">
        {allSpeakers
          .sort((a, b) => a.order - b.order)
          .map(({name, attributes, avatar, slug}, index) => (
            <li key={index}>
              <Link href={`/speakers/${slug}`} className="group flex flex-col items-center">
                <div className="relative aspect-square w-full">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    className="object-contain object-center transition-transform duration-150 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-8 font-display text-2xl uppercase leading-none">{name}</h2>
                <ul className="mt-2 text-center">
                  {attributes.map((attribute, index) => (
                    <li key={index}>{attribute}</li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
