import "./globals.css"
import type { Metadata } from "next"
import { Caveat } from "next/font/google"
import type React from "react"

const caveat = Caveat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rebecca Currie - Community Assistant",
  description: "Bulletin board for Hennepin Hall, 3rd Floor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caveat.className}>{children}</body>
    </html>
  )
}