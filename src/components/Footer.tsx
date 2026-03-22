import Link from 'next/link'

const footerLinks = [
  { href: '/platforms', label: 'Platforms' },
  { href: '/technology', label: 'Technology' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-black tracking-tighter text-white">
            Strata
          </Link>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/50">
          <a href="mailto:hello@strata.dev" className="hover:text-white transition-colors">
            hello@strata.dev
          </a>
          <span>·</span>
          <span>© {new Date().getFullYear()} Strata</span>
        </div>
      </div>
    </footer>
  )
}
