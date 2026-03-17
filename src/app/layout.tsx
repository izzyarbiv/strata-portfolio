import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Strata — Software Built in Layers',
  description:
    'Strata builds scalable SaaS systems, developer tools, and modern platforms. Engineered systems, scalable by design.',
  keywords: ['software development', 'SaaS', 'platform engineering', 'API architecture', 'cloud infrastructure'],
  openGraph: {
    title: 'Strata — Software Built in Layers',
    description: 'Strata builds scalable SaaS systems, developer tools, and modern platforms.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata — Software Built in Layers',
    description: 'Strata builds scalable SaaS systems, developer tools, and modern platforms.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
