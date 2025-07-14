"use client"

import { useState, useEffect } from "react"

export default function LetterReveal({ text, delay = 0 }) {
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (visibleLetters < text.length) {
          setVisibleLetters((prev) => prev + 1)
        }
      },
      delay + visibleLetters * 80,
    )

    return () => clearTimeout(timer)
  }, [visibleLetters, text.length, delay])

  return (
    <span className="inline-block">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            index < visibleLetters
              ? "opacity-100 transform translate-y-0 scale-100"
              : "opacity-0 transform translate-y-4 scale-75"
          }`}
          style={{
            transitionDelay: `${index * 50}ms`,
            animation: index < visibleLetters ? `letterBounce 0.6s ease-out ${index * 50}ms` : "none",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
} 