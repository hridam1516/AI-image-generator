import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import PromptInput from '@/components/PromptInput'
import ClientProvider from '@/components/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Image Generator',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
        {/* header */}
        <Header></Header>
        {/* Prompt Input */}
        <PromptInput></PromptInput>
        {children}
        </ClientProvider>
        </body>
    </html>
  )
}