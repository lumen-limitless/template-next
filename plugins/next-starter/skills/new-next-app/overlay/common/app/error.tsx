"use client"; // Error components must be Client Components

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex h-full w-full grow flex-col items-center justify-center space-y-5 text-center">
      <h1 className="text-6xl">😔</h1>
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </section>
  );
}
