'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        <div className="text-6xl md:text-7xl font-cursive text-accent" style={{ fontFamily: 'Great Vibes' }}>
          <span style={{
            display: 'inline-block',
            animation: 'typewriter 3s steps(25, end) infinite'
          }}>
            Paul Christian Labor
          </span>
        </div>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-3 border-border rounded-full"></div>
          <div
            className="absolute inset-0 border-3 border-transparent border-t-accent rounded-full"
            style={{
              animation: 'spin 2s linear infinite'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}