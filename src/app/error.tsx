'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-white/40 text-sm font-mono mb-4">ERROR</p>
        <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-white/60 mb-8">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
