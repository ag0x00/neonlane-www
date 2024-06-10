// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { IBM_Plex_Serif } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'
import './styles.css'
import "styles/tailwind.css"

const ibm_plex_serif = IBM_Plex_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_serif',
  weight: '500'
})
const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_sans',
  weight: '300'
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibm_plex_serif.variable + ' ' + ibm_plex_sans.variable}>
        {children}
      </body>
    </html>
  )
}
