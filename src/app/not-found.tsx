import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-white/40 text-sm font-mono mb-4 tracking-widest">404</p>
        <h1 className="text-5xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-white/60 mb-10 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
