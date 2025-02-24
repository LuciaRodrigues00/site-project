import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"], weight: '500' })

export const metadata: Metadata = {
  title: 'Lúcia D. Rodrigues',
  description: 'Descomplicando o mundo dos imóveis.',
  icons: {
    icon: '/banner/logo3.png',
  },
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${poppins.className} text-base leading-5 text-text`}>{children}</body>
    </html>
  )
}
