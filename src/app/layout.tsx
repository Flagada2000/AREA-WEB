"use client"
import type { Metadata } from "next";
import "./globals.css";
import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

// export const metadata: Metadata = {
//   title: "Area 51",
//   description: "The best place to find aliens",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>

        <div className="navmain">

          <div className="navbar">
            <Link href="/home">
              <p style={{ position: 'absolute', left: '20px', top: '25px' }} className="text-blue-100 text-3xl font-bold font-inter hover:text-blue-300">AREA</p>
            </Link>
            {/* navigation links */}
            <ul className={menuOpen ? "open" : ""}>
              <div className={`navstyle ${menuOpen ? "open" : ""}`}>
                <Link href="/home">
                  <p className="text-blue-100 text-base font-medium hover:text-blue-300">Accueil</p>
                </Link>
                <Link href="/doc">
                  <p className="text-blue-100 text-base font-medium hover:text-blue-300">Documentation</p>
                </Link>
                <Link href="/profile">
                  <p className="text-blue-100 text-base font-medium hover:text-blue-300">Profil</p>
                </Link>
                <Link href="/myactions">
                  <p className="text-blue-100 text-base font-medium hover:text-blue-300">Mes Actions</p>
                </Link>
              </div>
            </ul>

            {/* boutons créer une action / se connecter */}
            <div className="flex items-center space-x-8">
              <Link href="/create-action">
                <button className="px-6 py-2 bg-blue-100 rounded-full flex items-center space-x-2 hover:bg-blue-300">
                  <div className="text-blue-700 font-semibold">Créer une Action</div>
                </button>
              </Link>
              <Link href="/signin">
                <button className="px-6 py-2 bg-gradient-to-r from-[#1D428F] to-[#A3C8F8] rounded-full flex items-center space-x-2 hover:from-[#A3C8F8] hover:to-[#1D428F]">
                  <div className="text-blue-100 font-semibold">Se connecter</div>
                </button>
              </Link>
              {/* menu hamburger */}
            <button>
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen); }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            </button>
            </div>

          </div>

          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
