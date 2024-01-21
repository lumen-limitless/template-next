'use client';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-20 flex h-16 w-full items-center border-b px-5"
    >
      <div className="flex w-full justify-between">
        <object data="/vercel.svg" width={100} height={24} />
      </div>
    </header>
  );
}
