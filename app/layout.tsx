import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Min Htet Naing(MTN) - Cybersecurity Professional",
  description:
    "Application Security Engineer & Penetration Tester specializing in web, mobile, and infrastructure security",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="matrix-bg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>
        <Suspense>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
