import { motion } from 'framer-motion'

export default function FadeUpWhenVisible({
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', delay: delay, duration: duration }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: '33%' },
      }}
    >
      {children}
    </motion.div>
  )
}
