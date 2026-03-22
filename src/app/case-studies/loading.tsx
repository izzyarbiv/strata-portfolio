export default function Loading() {
  return (
    <div className="min-h-screen bg-black pt-24 px-6">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="mb-16">
          <div className="h-4 w-24 bg-white/10 rounded mb-4" />
          <div className="h-12 w-2/3 bg-white/10 rounded mb-4" />
          <div className="h-6 w-1/2 bg-white/5 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-8 h-72" />
          ))}
        </div>
      </div>
    </div>
  )
}
