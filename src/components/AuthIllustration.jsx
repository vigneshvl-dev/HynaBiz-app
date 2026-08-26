import React from 'react'
import logoImg from '../assets/logo.png'
import boy1Img from '../assets/boy1.png'
import boy2Img from '../assets/boy2.png'

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
            <img src={boy1Img} alt="Boy 1" className="avatar-img" />
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
            <img src={boy2Img} alt="Boy 2" className="avatar-img" />
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
