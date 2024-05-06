import {AvatarIcon} from './avatar'
import {TwitterIcon} from './twitter'

const icons = {
  avatar: AvatarIcon,
  twitter: TwitterIcon
}

export type IconName = keyof typeof icons

export const Icon: React.FC<{name: IconName; className: string}> = ({name, className}) => {
  const Component = icons[name]
  return <Component className={className} />
}
