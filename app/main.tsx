export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="flex flex-grow flex-col">
      {children}
    </main>
  );
}
