import React from 'react'
import logoImg from '../assets/logo.png'

export default function AuthIllustration() {
  return (
    <div className="auth-illustration-container">
      {/* Ambient background aura */}
      <div className="illustration-ambient-aura" />
      
      {/* Main SVG & Character Composition */}
      <div className="illustration-scene">
        
        {/* Left Communicating Character Card */}
        <div className="scene-card scene-card-left">
          <div className="character-avatar avatar-female">
            <svg viewBox="0 0 48 48" className="avatar-svg">
              <circle cx="24" cy="24" r="22" fill="#dbeafe" />
              {/* Hair */}
              <path d="M12 24c0-7 5.5-13 12-13s12 6 12 13v6H12v-6z" fill="#0284c7" />
              {/* Face */}
              <circle cx="24" cy="22" r="9" fill="#fcd34d" />
              {/* Glasses */}
              <rect x="18" y="19" width="5" height="4" rx="1.5" fill="none" stroke="#0369a1" strokeWidth="1.2" />
              <rect x="25" y="19" width="5" height="4" rx="1.5" fill="none" stroke="#0369a1" strokeWidth="1.2" />
              <line x1="23" y1="21" x2="25" y2="21" stroke="#0369a1" strokeWidth="1.2" />
              {/* Smile */}
              <path d="M22 26q2 1.5 4 0" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              {/* Clothes */}
              <path d="M14 42c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#0066ff" />
            </svg>
          </div>
          
          {/* Chat Bubble Left */}
          <div className="chat-bubble chat-bubble-left floating-slow">
            <span className="bubble-dot dot-blue" />
            <span className="bubble-text">Hi Team!</span>
            <div className="bubble-tail" />
          </div>
        </div>

        {/* Central HYNABIZ Hub / Medallion */}
        <div className="scene-center-hub">
          <div className="hub-ripple-ring" />
          <div className="hub-ripple-ring hub-ripple-2" />
          <div className="hub-badge pulse-gentle">
            <img src={logoImg} alt="HYNABIZ Emblem" className="hub-logo-img" />
          </div>
          <div className="hub-tag">
            <span className="hub-tag-dot" />
            HYNABIZ
          </div>
        </div>

        {/* Right Communicating Character Card */}
        <div className="scene-card scene-card-right">
          <div className="character-avatar avatar-male">
            <svg viewBox="0 0 48 48" className="avatar-svg">
              <circle cx="24" cy="24" r="22" fill="#e0f2fe" />
              {/* Hair */}
              <path d="M15 17c2-5 7-6 10-6 4 0 8 3 8 7 0 2-1 4-2 5l-16-6z" fill="#0f172a" />
              {/* Face */}
              <circle cx="24" cy="23" r="9" fill="#fde68a" />
              {/* Eyes */}
              <circle cx="21" cy="22" r="1.2" fill="#0f172a" />
              <circle cx="27" cy="22" r="1.2" fill="#0f172a" />
              {/* Smile */}
              <path d="M22 26q2 1.5 4 0" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              {/* Clothes */}
              <path d="M13 42c0-6 5-11 11-11s11 5 11 11" fill="#0284c7" />
            </svg>
          </div>

          {/* Chat Bubble Right */}
          <div className="chat-bubble chat-bubble-right floating-delayed">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="#0066ff">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            <span className="bubble-text">Let's grow!</span>
            <div className="bubble-tail tail-right" />
          </div>
        </div>

        {/* Decorative Floating Badges */}
        <div className="floating-badge badge-top-left floating-fast">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="#0066ff">
            <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm9-3a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L11 9.586V7z" />
          </svg>
        </div>

        <div className="floating-badge badge-top-right floating-slow">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="#0284c7">
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h7a1 1 0 100-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm10 5a1 1 0 102 0v-5a1 1 0 10-2 0v5z" />
          </svg>
        </div>

        <div className="floating-badge badge-bottom-center floating-delayed">
          <span className="badge-sparkle">✨</span>
          <span className="badge-growth-text">OS</span>
        </div>

        {/* Connection Network Lines */}
        <svg className="scene-connection-lines" viewBox="0 0 340 180" fill="none">
          <path
            d="M 65 95 C 100 80, 120 85, 170 85 C 220 85, 240 80, 275 95"
            stroke="#93c5fd"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            className="animated-dash"
          />
        </svg>
      </div>
    </div>
  )
}
