import React, { useEffect, useState } from 'react'
import '../styles/page-transition.css'

/**
 * PageTransition
 * Wraps page content with slide-up fade-in entrance.
 * Accepts optional `stage` prop to allow parent to trigger 'leaving' exit.
 */
export default function PageTransition({ children, stage: externalStage, className = '' }) {
  const [internalStage, setInternalStage] = useState('entering')

  useEffect(() => {
    // Delay 1 frame so browser paints the starting state first
    const raf = requestAnimationFrame(() => {
      setInternalStage('visible')
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  // If parent overrides with 'leaving', honour it
  const stage = externalStage === 'leaving' ? 'leaving' : internalStage

  return (
    <div className={`page-transition page-transition--${stage} ${className}`}>
      {children}
    </div>
  )
}
