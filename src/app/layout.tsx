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
  title: {
    default: 'Strata — Building Intelligent Platforms',
    template: '%s | Strata',
  },
  description:
    'Strata designs and builds modern AI-powered platforms, SaaS systems, and automation infrastructure. Premium technology studio.',
  keywords: ['AI platforms', 'SaaS development', 'automation systems', 'platform engineering', 'software studio'],
  openGraph: {
    title: 'Strata — Building Intelligent Platforms',
    description: 'We design and build modern AI-powered platforms, SaaS systems, and automation infrastructure.',
    type: 'website',
    siteName: 'Strata',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata — Building Intelligent Platforms',
    description: 'We design and build modern AI-powered platforms, SaaS systems, and automation infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <body className="bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
