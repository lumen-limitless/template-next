import { Button } from 'src/components/ui/button'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-center gap-12">
      <object
        data="/next.svg"
        width={200}
        height={48}
        className="animate-pulse"
      />
      <Button variant={'default'}>Click Me!</Button>
      <Button variant={'secondary'}>No, Click Me!</Button>
      <Button variant={'outline'}>No, Click Me!</Button>
      <Button variant={'destructive'}>Don&apos;t Click Me.</Button>
    </div>
  )
}
