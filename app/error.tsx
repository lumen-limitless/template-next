'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
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
  );
}
