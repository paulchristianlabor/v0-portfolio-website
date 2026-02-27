'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <svg
        className="w-32 h-32"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* P */}
        <path
          d="M 15 80 L 15 20 L 35 20 Q 45 20 45 30 Q 45 40 35 40 L 15 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          style={{
            strokeDasharray: 60,
            strokeDashoffset: 60,
            animation: 'drawStroke 2s ease-in-out forwards'
          }}
        />
        
        {/* C */}
        <path
          d="M 65 25 Q 55 25 55 50 Q 55 75 65 75 Q 75 75 75 70"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          style={{
            strokeDasharray: 60,
            strokeDashoffset: 60,
            animation: 'drawStroke 2s ease-in-out forwards 0.3s',
            animationFillMode: 'backwards'
          }}
        />
        
        {/* L */}
        <path
          d="M 85 20 L 85 80 L 95 80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          style={{
            strokeDasharray: 50,
            strokeDashoffset: 50,
            animation: 'drawStroke 2s ease-in-out forwards 0.6s',
            animationFillMode: 'backwards'
          }}
        />
      </svg>

      <style jsx>{`
        @keyframes drawStroke {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}