import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'williamb.dev - développeur fullstack',
  description:
    "Portfolio de William Banas, développeur full-stack : expériences, projets et contact.",
  icons: {
    icon: '/favicon.svg?v=4',
  },
}

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  )
}
