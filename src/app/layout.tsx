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
        <div className='h-16'>
          <p className='inline-block ml-3 mt-1 w-32 text-7xl font-semibold hover:tracking-widerer duration-300'>AERA</p>
        </div>
        <div className="">
          {children}

        </div>
      </body>
    </html>
  )
}
