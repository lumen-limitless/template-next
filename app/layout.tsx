import Footer from '@/app/footer';
import Header from '@/app/header';
import Main from '@/app/main';
import { cn } from '@/lib/utils';
import { Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from './metadata';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body
        style={{
          textRendering: 'optimizeLegibility',
        }}
        className={cn(
          roboto.className,
          'flex min-h-screen touch-manipulation flex-col antialiased',
        )}
      >
        <a
          href="#main"
          className="sr-only absolute left-[-999px] top-[-999px] block border bg-[#ffc] text-black focus:not-sr-only focus:bottom-0 focus:top-0 focus:border-[#990000]"
          aria-label="skip"
          id="skip"
        >
          Skip Content
        </a>

        <Header />

        <Main>{children}</Main>

        <Footer />

        <TailwindIndicator />
      </body>
    </html>
  );
}

const TailwindIndicator = () => {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-black p-2 font-mono text-sm text-white">
      <span className="block sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="3xl:hidden hidden 2xl:block">2XL</span>
      <span className="3xl:block hidden">3XL</span>
    </div>
  );
};
