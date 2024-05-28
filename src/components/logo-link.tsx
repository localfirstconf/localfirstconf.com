import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.webp'
import {FC} from 'react'

export const LogoLink: FC<{className?: string}> = ({className = ''}) => {
  return (
    <Link href="https://localfirstconf.com" className={className}>
      <Image src={Logo} alt="Local-First Conf Logo" className="h-14 w-auto" />
    </Link>
  )
}
