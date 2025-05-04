import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yogeshwar Pawade | Software Engineer',
  description: 'Yogeshwar Pawade - Software Engineer, Full Stack Developer, and AI/ML Engineer. Portfolio showcasing projects, skills, and professional experience.',
  keywords: 'Yogeshwar Pawade, Software Engineer, Full Stack Developer, AI/ML Engineer, Portfolio, React, Next.js, TypeScript',
  authors: [{ name: 'Yogeshwar Pawade' }],
  creator: 'Yogeshwar Pawade',
  icons: {
    icon: '/yp-logo.svg',
    shortcut: '/yp-logo.svg',
    apple: '/yp-logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/yp-logo.svg',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
    </html>
  )
}
