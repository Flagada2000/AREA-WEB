import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Area 51',
  description: 'The best place to find aliens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-[url('/layered-peaks-haikei.svg')] bg-no-repeat bg-cover bg-center h-screen">
          {children}

        </div>
      </body>
    </html>
  )
}
