type PageProps = {
  params: Promise<{}>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export const runtime = "nodejs"

export const revalidate = 0

export const dynamic = "force-dynamic"

export const metadata = {
  title: "",
}
export default function Page({ params, searchParams }: PageProps) {
  return (
    <>
      <div className="flex h-full w-full flex-grow flex-col items-center justify-center gap-12">
        <object
          data="/next.svg"
          width={200}
          height={48}
          className="animate-pulse"
        />
      </div>
    </>
  )
}
