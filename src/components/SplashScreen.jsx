import React from 'react'
import Logo from './Logo'
import HandwrittenTitle from './HandwrittenTitle'

export default function SplashScreen() {
  return (
    <div className="device-wrapper">
      {/* Mobile Device Frame Container */}
      <div className="mobile-phone-frame">
        
        {/* Mobile Status Bar (9:41, Dynamic Island, Network, Battery) */}
        <div className="mobile-status-bar">
          <span className="status-time">9:41</span>
          <div className="dynamic-island">
            <span className="island-camera" />
          </div>
          <div className="status-icons">
            {/* Cellular */}
            <svg className="icon-cellular" viewBox="0 0 18 12" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" />
              <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
              <rect x="15" y="0" width="3" height="12" rx="0.5" />
            </svg>
            {/* Wifi */}
            <svg className="icon-wifi" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.05 3.55a8.42 8.42 0 0111.9 0l-1.06 1.06a6.92 6.92 0 00-9.78 0L2.05 3.55zM4.17 5.67a5.42 5.42 0 017.66 0l-1.06 1.06a3.92 3.92 0 00-5.54 0L4.17 5.67z" />
            </svg>
            {/* Battery */}
            <div className="battery-icon">
              <div className="battery-fill" />
            </div>
          </div>
        </div>

        {/* Main Splash Viewport */}
        <div className="splash-viewport">
          
          {/* Background Ambient Lighting */}
          <div className="ambient-background">
            <div className="ambient-glow ambient-glow-top" />
            <div className="ambient-glow ambient-glow-center" />
            <div className="ambient-glow ambient-glow-bottom" />
          </div>

          {/* Center App Splash Content */}
          <div className="splash-card">
            
            {/* Logo with Ambient Backlight Halo & Floating Breathing Motion */}
            <div className="logo-wrapper">
              <div className="logo-backlight-pulse" />
              <div className="logo-container">
                <Logo className="brand-logo" />
              </div>
            </div>

            {/* Brand Identity: Handwriting Reveal + Cursor + Glow + Shimmer + Tagline */}
            <div className="brand-identity">
              <HandwrittenTitle />
            </div>

          </div>

          {/* Powered by HynaStudio Footer */}
          <div className="powered-by-section">
            <span className="powered-by-label">POWERED BY</span>
            <span className="powered-by-brand">Hyna<span className="powered-by-accent">Studio</span></span>
          </div>

        </div>

        {/* iOS Home Indicator Bar */}
        <div className="mobile-home-indicator">
          <div className="home-bar" />
        </div>

      </div>
    </div>
  )
}
