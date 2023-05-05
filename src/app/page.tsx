import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}
export default async function HomePage() {
  const data = await getData()
  console.log(data)

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
