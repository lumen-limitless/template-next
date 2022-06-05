import { useEffect } from 'react'
import { classNames } from '../../functions'
import { useBoolean } from 'react-use'
import { useViewportScroll } from 'framer-motion'
import Button from '../Button'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Header() {
  const [isFixed, setFixed] = useBoolean(false)
  const { scrollYProgress } = useViewportScroll()
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      latest > 0.03 ? setFixed(true) : setFixed(false)
    })
  })
  return (
    <header
      className={classNames(
        isFixed ? 'fixed bg-white/30 py-3 backdrop-blur-lg' : 'absolute py-9',
        'z-50 flex w-full items-center justify-between px-3 transition-all md:px-24 lg:px-36 xl:px-48'
      )}
    ></header>
  )
}
