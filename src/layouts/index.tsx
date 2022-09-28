export default function Layout({ children }: { children?: any }) {
  return (
    <main className="flex h-full min-h-screen w-full flex-col">{children}</main>
  )
}
