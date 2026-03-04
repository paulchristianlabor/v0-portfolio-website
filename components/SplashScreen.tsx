'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 bg-background flex items-center justify-center z-[9999] transition-opacity duration-1000"
      style={{ 
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Rotating Hexagon */}
        <svg
          className="absolute inset-0 w-full h-full animate-spinHexagon"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="100,20 170,60 170,140 100,180 30,140 30,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
        </svg>

        {/* P Letter */}
        <div className="text-8xl font-bold text-accent z-10">
          P
        </div>
      </div>
    </div>
  )
}