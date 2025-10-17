import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ChatbotWidget } from "@/components/chatbot-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khách Sạn ABC 5 Sao",
  description: "Khách sạn 5 sao hàng đầu với dịch vụ đẳng cấp thế giới",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head />
      <body className={`font-sans antialiased`}>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  )
}
