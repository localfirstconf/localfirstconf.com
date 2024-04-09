import Link from 'next/link'

export const ProfileLink = () => {
  return (
    <Link href="/profile" className="group flex items-center gap-4">
      <div className="relative">
        <svg
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-magenta absolute h-10 scale-75 fill-current opacity-0 transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
        >
          <path d="M9.24138 0L0 14.119V26.566L24.046 32L28 27.4949V4.36575L9.24138 0Z" />
        </svg>
        <svg
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-10 fill-current transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:opacity-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.7154V24.9676L23.3271 29.7871L26 26.7417V5.95373L10.1493 2.26476L2 14.7154ZM9.24138 0L0 14.119V26.566L24.046 32L28 27.4949V4.36575L9.24138 0Z"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          #107
        </div>
      </div>
      <span className="leading-none">
        Attendee
        <br />
        Profile
      </span>
    </Link>
  )
}
