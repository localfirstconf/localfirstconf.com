import {AvatarIcon} from './avatar'
import {InstagramIcon} from './instagram'
import {LinkedinIcon} from './linkedin'
import {MastodonIcon} from './mastodon'
import {TwitterIcon} from './twitter'
import {WhatsappIcon} from './whatsapp'

const icons = {
  avatar: AvatarIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mastodon: MastodonIcon
}

export type IconName = keyof typeof icons

export const Icon: React.FC<{name: IconName; className: string}> = ({name, className}) => {
  const Component = icons[name]
  return <Component className={className} />
}
