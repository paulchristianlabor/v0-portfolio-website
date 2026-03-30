import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SplashScreen from '@/components/SplashScreen'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });

export const metadata: Metadata = {
  title: 'Paul Christian Labor - Portfolio',
  description: 'Portfolio of Paul Christian Labor - Web Developer & Designer',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SplashScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}