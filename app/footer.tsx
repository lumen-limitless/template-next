'use client';

export default function Footer() {
  return (
    <footer id="footer" className="flex h-16 items-center border-t px-5">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Lumen Limitless. All rights reserved.
      </p>
    </footer>
  );
}
