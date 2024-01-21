'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex items-center justify-center text-center">
        <section className="flex h-full w-full flex-grow flex-col items-center justify-center space-y-5 text-center">
          <h1 className="text-6xl">😔</h1>
          <h2 className="text-xl">Something went wrong!</h2>
          <button
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </section>
      </body>
    </html>
  );
}
