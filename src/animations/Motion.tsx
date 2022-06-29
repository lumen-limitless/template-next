import { HTMLMotionProps, motion, Variants } from 'framer-motion'
import { FC } from 'react'

interface MotionProps extends HTMLMotionProps<'div'> {
  delay?: number
  duration?: number
  variant: 'fadeIn' | 'fadeUp'
}

const MOTION_VARIANTS: { [key: string]: Variants } = {
  fadeIn: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
  fadeUp: {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: '33%' },
  },
}
const Motion: FC<MotionProps> = ({ children, delay = 0, duration = 0.66, variant, ...rest }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', delay: delay, duration: duration }}
      variants={MOTION_VARIANTS[variant]}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default Motion
