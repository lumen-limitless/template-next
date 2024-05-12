interface PageProps {
  params: {};
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page({}: PageProps) {
  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-center gap-12">
      <object
        data="/next.svg"
        width={200}
        height={48}
        className="animate-pulse"
      />
    </div>
  );
}
