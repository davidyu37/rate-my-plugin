import './globals.css'
import { Inter } from 'next/font/google'
import { CategoryProvider } from './_context/category-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rate my Plugins',
  description: 'Find and rate plugins for ChatGPT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CategoryProvider>
          {children}
        </CategoryProvider>
      </body>
    </html>
  )
}
