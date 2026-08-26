import React from 'react'
import Logo from './Logo'

const Boy1Avatar = () => (
  <svg viewBox="0 0 100 100" className="avatar-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dbeafe" />
        <stop offset="100%" stopColor="#bfdbfe" />
      </linearGradient>
      <linearGradient id="shirt-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#bg-grad-1)" />
    <path d="M 22 90 C 22 75, 30 65, 50 65 C 70 65, 78 75, 78 90 Z" fill="url(#shirt-grad-1)" />
    <rect x="44" y="52" width="12" height="15" rx="3" fill="#fcd34d" />
    <circle cx="50" cy="38" r="18" fill="#fcd34d" />
    <path d="M 32 36 C 32 20, 68 20, 68 36 C 68 30, 62 25, 50 25 C 38 25, 32 30, 32 36 Z" fill="#1e293b" />
    <path d="M 32 36 Q 36 30 45 34 Q 50 32 55 35 Q 68 32 68 36" fill="#1e293b" />
    <rect x="36" y="34" width="11" height="8" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
    <rect x="53" y="34" width="11" height="8" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
    <line x1="47" y1="38" x2="53" y2="38" stroke="#1e293b" strokeWidth="2" />
    <path d="M 45 47 Q 50 50 55 47" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
)

const Boy2Avatar = () => (
  <svg viewBox="0 0 100 100" className="avatar-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffedd5" />
        <stop offset="100%" stopColor="#fed7aa" />
      </linearGradient>
      <linearGradient id="shirt-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0f766e" />
        <stop offset="100%" stopColor="#115e59" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#bg-grad-2)" />
    <path d="M 22 90 C 22 75, 30 65, 50 65 C 70 65, 78 75, 78 90 Z" fill="url(#shirt-grad-2)" />
    <rect x="44" y="52" width="12" height="15" rx="3" fill="#fdba74" />
    <circle cx="50" cy="38" r="18" fill="#fdba74" />
    <path d="M 32 30 C 35 15, 65 15, 68 30 L 68 38 L 32 38 Z" fill="#475569" />
    <circle cx="43" cy="36" r="2.5" fill="#1e293b" />
    <circle cx="57" cy="36" r="2.5" fill="#1e293b" />
    <path d="M 44 46 Q 50 51 56 46" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
)

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
            <Boy1Avatar />
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
            <Logo className="hub-logo-img" />
          </div>
          <div className="hub-tag">
            <span className="hub-tag-dot" />
            HYNABIZ
          </div>
        </div>

        {/* Right Communicating Character Card */}
        <div className="scene-card scene-card-right">
          <div className="character-avatar avatar-male">
            <Boy2Avatar />
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

