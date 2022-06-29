import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'clsx'

export interface GridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const GAP = {
  none: '',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-6',
}
const Grid: FC<GridProps> = ({ gap = 'none', children, className, ...props }) => {
  return (
    <div className={cn('grid grid-cols-12', GAP[gap], className)} {...props}>
      {children}
    </div>
  )
}

export default Grid
