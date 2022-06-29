import { VFC } from 'react'

const Divider: VFC = () => {
  return (
    <div className="inset-0 flex w-full items-center" aria-hidden="true">
      <div className="m-auto w-full rounded-full border-b-2 border-dark-700/30" />
    </div>
  )
}

export default Divider
