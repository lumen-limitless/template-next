type PageProps = {
  params: {}
  searchParams: Record<string, string | Array<string> | undefined>
}

export const metadata = {
  title: 'Not Found',
}
export default async function Page({}: PageProps) {
  return (
    <>
      <h1>404 - page not found</h1>
    </>
  )
}
