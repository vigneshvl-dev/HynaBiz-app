import React, { useState, useEffect } from 'react'

const LETTERS = [
  { char: 'H', type: 'hyna' },
  { char: 'y', type: 'hyna' },
  { char: 'n', type: 'hyna' },
  { char: 'a', type: 'hyna' },
  { char: 'B', type: 'biz' },
  { char: 'i', type: 'biz' },
  { char: 'z', type: 'biz' },
]

export default function HandwrittenTitle() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showShimmer, setShowShimmer] = useState(false)
  const [showTagline, setShowTagline] = useState(false)

  useEffect(() => {
    // Start handwriting reveal after short initial delay
    const startTimeout = setTimeout(() => {
      let current = 0
      const interval = setInterval(() => {
        current += 1
        setVisibleCount(current)

        if (current >= LETTERS.length) {
          clearInterval(interval)
          // 1. Fade out writing cursor
          setTimeout(() => setIsComplete(true), 150)
          // 2. Trigger tiny shimmer pass over HynaBiz
          setTimeout(() => setShowShimmer(true), 350)
          // 3. Tagline fades in smoothly afterward
          setTimeout(() => setShowTagline(true), 800)
        }
      }, 75) // 75ms smooth letter timing
    }, 350)

    return () => clearTimeout(startTimeout)
  }, [])

  return (
    <div className="handwriting-title-container">
      <div className="handwriting-text-line">
        <h1 className="app-title brand-title">
          {LETTERS.map((letter, idx) => {
            const isRevealed = idx < visibleCount
            const isCurrentWritingLetter = !isComplete && idx === visibleCount - 1

            return (
              <span
                key={idx}
                className={`letter-span ${letter.type === 'hyna' ? 'brand-hyna' : 'brand-biz'} ${
                  isRevealed ? 'revealed' : ''
                } ${isCurrentWritingLetter ? 'writing-now' : ''}`}
              >
                {letter.char}
              </span>
            )
          })}
        </h1>

        {/* Tiny Shimmer Pass */}
        {showShimmer && <div className="title-shimmer-bar" />}
      </div>

      {/* Tagline Fades In Afterward */}
      <p className={`app-tagline ${showTagline ? 'tagline-visible' : ''}`}>
        Manage Better. Grow Bigger.
      </p>
    </div>
  )
}
