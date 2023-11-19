import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/nav/Navbar";
import React from "react";

const notoSans = Noto_Sans({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Fruityverse',
  description: 'NFT cards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
