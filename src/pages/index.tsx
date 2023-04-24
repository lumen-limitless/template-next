import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-center gap-12">
      <Image
        src="/next.svg"
        alt="NEXTJS Logo"
        width={200}
        height={48}
        priority
        className="animate-pulse"
      />
    </div>
  )
}

export default Home
