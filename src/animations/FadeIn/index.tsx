import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.66,
}: {
  children?: any
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', delay: delay, duration: duration }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
