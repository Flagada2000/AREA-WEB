import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
    <>
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-between items-center w-full h-[8%] px-12 pt-5 pb-5 bg-gradient-to-r from-[rgba(1, 8, 17, 0.70)] to-[rgba(0, 26.25, 129.62, 0.70)] shadow-md backdrop-blur-[100px]">
          <Link href="/home">
            <p className="text-blue-100 text-3xl font-bold font-inter hover:text-blue-300">AREA</p>
          </Link>
          <div className="flex items-center space-x-20">

            <Link href="/home">
              <p className="text-blue-100 text-base font-medium hover:text-blue-300">Accueil</p>
            </Link>
            <Link href="/about">
              <p className="text-blue-100 text-base font-medium hover:text-blue-300">À propos</p>
            </Link>
            <Link href="/doc">
              <p className="text-blue-100 text-base font-medium hover:text-blue-300">Documentation</p>
            </Link>
            <Link href="/contact">
              <p className="text-blue-100 text-base font-medium hover:text-blue-300">Contact</p>
            </Link>

          </div>

          <div className="flex items-center space-x-8">
            <Link href="/create-action">
              <button className="px-6 py-2 bg-blue-100 rounded-full flex items-center space-x-2 hover:bg-blue-300">
                <div className="text-blue-700 font-semibold">Créer une Action</div>
              </button>
            </Link>
            <Link href="/login">
              <button className="px-6 py-2 bg-gradient-to-r from-[#1D428F] to-[#A3C8F8] rounded-full flex items-center space-x-2 hover:from-[#A3C8F8] hover:to-[#1D428F]">
                <div className="text-blue-100 font-semibold">Profil</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </>
  )
}
