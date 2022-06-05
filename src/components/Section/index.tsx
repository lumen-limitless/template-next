import { DetailedHTMLProps, HTMLProps } from 'react'
import { classNames } from '../../functions'

interface SectionProps extends DetailedHTMLProps<HTMLProps<HTMLElement>, HTMLElement> {
  fullscreen?: boolean
}

export default function Section({ children, className, fullscreen, ...rest }: SectionProps) {
  return (
    <section
      className={classNames(
        'relative flex h-full w-full flex-col items-center justify-center',
        fullscreen && 'min-h-screen',
        className
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
