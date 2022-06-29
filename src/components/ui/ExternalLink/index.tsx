import { FC, HTMLProps } from 'react'
import cn from 'clsx'
interface Props extends Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> {
  href: string
}

const ExternalLink: FC<Props> = ({
  children,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  ...rest
}) => {
  return (
    <a href={href} target={target} rel={rel} className={className} {...rest}>
      {children}
    </a>
  )
}

export default ExternalLink
