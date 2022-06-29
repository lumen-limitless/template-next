import React, { FC } from 'react'
import cn from 'clsx'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactChild
  footer?: React.ReactChild
  backgroundImage?: string
  title?: string
  description?: string
}

const Card: FC<CardProps> = ({
  header = undefined,
  footer = undefined,
  backgroundImage = '',
  title = '',
  description = '',
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        'relative flex-1 flex-grow border-2 border-dark-700/30  bg-dark-1000/60 shadow-pink-glow backdrop-blur-md transition-all hover:shadow-pink-glow-hovered'
      )}
      style={{
        borderRadius: '10px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center bottom',
      }}
    >
      {header && <>{header}</>}

      <div className="h-full px-2 py-4 sm:p-8">
        {title && <div className="pb-3 text-lg font-medium leading-6 text-primary">{title}</div>}
        {description && <div className="text-base text-secondary">{description}</div>}
        {children}
      </div>

      {footer && <>{footer}</>}
    </div>
  )
}

export default Card
