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
  metadataBase: new URL('https://strata.dev'),
  openGraph: {
    title: 'Strata — Building Intelligent Platforms',
    description: 'We design and build modern AI-powered platforms, SaaS systems, and automation infrastructure.',
    type: 'website',
    siteName: 'Strata',
    url: 'https://strata.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata — Building Intelligent Platforms',
    description: 'We design and build modern AI-powered platforms, SaaS systems, and automation infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://strata.dev',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Strata',
  url: 'https://strata.dev',
  description: 'Strata designs and builds modern AI-powered platforms, SaaS systems, and automation infrastructure.',
  sameAs: ['https://github.com/izzyarbiv/strata-portfolio'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@strata.dev',
    contactType: 'customer service',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
