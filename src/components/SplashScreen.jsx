import React, { useState, useEffect } from 'react'
import logoImg from '../assets/logo.png'

export default function SplashScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)

  const statusMessages = [
    'Initializing secure workspace...',
    'Syncing intelligent engine...',
    'Preparing your enterprise dashboard...',
    'Ready.'
  ]

  useEffect(() => {
    // Smooth, realistic loading progress simulation
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Organic progress curve
        const increment = Math.floor(Math.random() * 7) + 3
        const nextVal = Math.min(100, prev + increment)
        
        if (nextVal > 75) setStatusIndex(3)
        else if (nextVal > 45) setStatusIndex(2)
        else if (nextVal > 15) setStatusIndex(1)
        
        return nextVal
      })
    }, 110)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="splash-viewport">
      {/* Background ambient lighting effects */}
      <div className="ambient-background">
        <div className="ambient-glow ambient-glow-top" />
        <div className="ambient-glow ambient-glow-center" />
        <div className="ambient-glow ambient-glow-bottom" />
        <div className="ambient-grid-overlay" />
      </div>

      {/* Main App Splash Content */}
      <div className="splash-card">
        
        {/* Logo Container with Layered Backlight & Breathing Motion */}
        <div className="logo-wrapper">
          <div className="logo-backlight-pulse" />
          <div className="logo-outer-ring" />
          
          <div className="logo-container">
            <img
              src={logoImg}
              alt="HynaBiz Logo"
              className="brand-logo"
              loading="eager"
            />
          </div>
        </div>

        {/* Brand Identity: App Name & Tagline */}
        <div className="brand-identity">
          <div className="app-title-wrapper">
            <h1 className="app-title">
              Hyna<span className="text-highlight">Biz</span>
            </h1>
            <span className="app-badge">OS</span>
          </div>

          <p className="app-tagline">
            Smart Business Operating System
          </p>
        </div>

        {/* Subtle, Minimal Loading Indicator */}
        <div className="loader-section">
          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${loadingProgress}%` }}
            >
              <div className="progress-glow-tip" />
            </div>
          </div>

          <div className="status-container">
            <span className="status-text">{statusMessages[statusIndex]}</span>
            <span className="progress-number">{loadingProgress}%</span>
          </div>
        </div>

      </div>

      {/* App Version & Security Note at Bottom */}
      <div className="splash-footer">
        <div className="security-indicator">
          <span className="security-dot" />
          <span>Enterprise Encryption Active</span>
        </div>
        <span className="version-tag">v2.4.0 (Build 829)</span>
      </div>
    </div>
  )
}
