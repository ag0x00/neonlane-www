// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'

import './styles.css'
import 'styles/tailwind.css'

const serif = IBM_Plex_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: '300'
})
const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: '300'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={serif.variable + ' ' + sans.variable}>
        {children}
      </body>
    </html>
  )
}
