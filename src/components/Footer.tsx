import Link from 'next/link'

const footerLinks = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-black tracking-tight gradient-text">
            Strata
          </Link>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted">
          <a href="mailto:hello@strata.dev" className="hover:text-foreground transition-colors">
            hello@strata.dev
          </a>
          <span>·</span>
          <span>© {new Date().getFullYear()} Strata. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
