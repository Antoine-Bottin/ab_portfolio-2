import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Antoine Bottin - Portfolio ',
    description: 'This is my dev portfolio',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    keywords: [
        'web',
        'developer',
        'portfolio',
        'Antoine Bottin',
        'software ingeneer',
        'reactJS',
        'NextJs',
        'NodeJs',
        'TypeScript',
        'JavaScript',
        'HTML',
    ],
    metadataBase: new URL('https://www.portfolio.abottin.dev'),
    openGraph: {
        title: 'Antoine Bottin - Portfolio ',
        description: 'This is my dev portfolio',
        images: [{ url: '/assets/pictures/Photo_CV.jpg' }],
        type: 'website',
        url: 'https://www.portfolio.abottin.dev',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
