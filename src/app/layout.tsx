import "./globals.css"
import type { Metadata } from "next"
import { Caveat } from "next/font/google"
import type React from "react"

const caveat = Caveat({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: "Rebecca Currie - Community Assistant",
  description: "Bulletin board for Ryan Hall, 3rd Floor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} font-caveat`}>{children}</body>
    </html>
  )
}


