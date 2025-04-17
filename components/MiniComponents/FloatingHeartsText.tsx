'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { Heart } from 'lucide-react'

interface FloatingHeartsTextProps {
  children: ReactNode
}

export default function FloatingHeartsText({ children }: FloatingHeartsTextProps) {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>(
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      // Create a new heart with random position
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // Random position (0-100%)
        delay: Math.random() * 0.5, // Random delay
        size: Math.random() * 6 + 8, // Random size between 8-14px
      }

      setHearts((prevHearts) => [...prevHearts, newHeart])

      // Remove hearts after they've animated to prevent memory issues
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id))
      }, 3000)
    }, 300) // Create a new heart every 300ms

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative inline-flex items-center justify-center py-4">
      {children}

      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="animate-float-up absolute bottom-0 fill-red-500 text-red-500 opacity-80"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) rotate(20deg);
            opacity: 0;
          }
        }

        .animate-float-up {
          animation: float-up 3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
