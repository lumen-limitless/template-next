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
        <a href="#main" className="sr-only" aria-label="skip">
          skip to content
        </a>

        <Header />

        <Main>{children}</Main>

        <Footer />
      </body>
    </html>
  );
}
