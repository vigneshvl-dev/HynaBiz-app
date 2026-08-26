import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthIllustration from '../components/AuthIllustration'
import SocialLogin from '../components/SocialLogin'
import Divider from '../components/Divider'
import PrimaryButton from '../components/PrimaryButton'
import Toast from '../components/Toast'
import PageTransition from '../components/PageTransition'

export default function Login() {
  const navigate = useNavigate()
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const [introStage, setIntroStage] = useState('active')
  const [pageStage, setPageStage] = useState('entering')

  const showToast = (message) => {
    setToastMessage(message)
    setToastVisible(true)
  }

  // Animate exit then navigate to target
  const transitionTo = (path) => {
    setPageStage('leaving')
    setTimeout(() => navigate(path), 380)
  }

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIntroStage('leaving')
    }, 2800)
    const doneTimer = setTimeout(() => {
      setIntroStage('done')
    }, 3550)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false)
      }, 3200)
      return () => clearTimeout(timer)
    }
  }, [toastVisible])

  const handleMainLogin = () => {
    transitionTo('/workspace')
  }

  const handleSocialLogin = () => {
    transitionTo('/workspace')
  }

  return (
    <PageTransition stage={pageStage}>
      <div className="login-canvas-wrapper">
        <div className="canvas-ambient-glow glow-top" />
        <div className="canvas-ambient-glow glow-bottom" />
        <div className="auth-phone-card">
        <div className="mobile-status-bar auth-status-bar">
          <span className="status-time">9:41</span>
          <div className="dynamic-island">
            <span className="island-camera" />
          </div>
          <div className="status-icons">
            <svg className="icon-cellular" viewBox="0 0 18 12" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" />
              <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
              <rect x="15" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg className="icon-wifi" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.05 3.55a8.42 8.42 0 0111.9 0l-1.06 1.06a6.92 6.92 0 00-9.78 0L2.05 3.55zM4.17 5.67a5.42 5.42 0 017.66 0l-1.06 1.06a3.92 3.92 0 00-5.54 0L4.17 5.67z" />
            </svg>
            <div className="battery-icon">
              <div className="battery-fill" />
            </div>
          </div>
        </div>

        <div className="auth-viewport">
          {introStage !== 'done' ? (
            <div className={`login-intro-container stage-${introStage}`}>
              <div className="intro-illustration-box">
                <div className="orbital-ring ring-1" />
                <div className="orbital-ring ring-2" />

                <div className="central-avatar pulse-avatar">
                  <svg viewBox="0 0 100 100" className="intro-avatar-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="intro-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066ff" />
                        <stop offset="100%" stopColor="#00d2ff" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#intro-bg)" />
                    <path d="M 26 88 C 26 74, 34 64, 50 64 C 66 64, 74 74, 74 88 Z" fill="#ffffff" />
                    <circle cx="50" cy="38" r="16" fill="#ffffff" />
                    <path d="M 47 54 L 53 54 L 55 64 L 50 69 L 45 64 Z" fill="#0066ff" />
                  </svg>
                </div>

                <div className="orbiting-node node-left">
                  <svg viewBox="0 0 100 100" width="40" height="40">
                    <circle cx="50" cy="50" r="48" fill="#dbeafe" />
                    <path d="M 25 85 C 25 72, 33 62, 50 62 C 67 62, 75 72, 75 85 Z" fill="#3b82f6" />
                    <circle cx="50" cy="38" r="16" fill="#fcd34d" />
                  </svg>
                </div>

                <div className="orbiting-node node-right">
                  <svg viewBox="0 0 100 100" width="40" height="40">
                    <circle cx="50" cy="50" r="48" fill="#ffedd5" />
                    <path d="M 25 85 C 25 72, 33 62, 50 62 C 67 62, 75 72, 75 85 Z" fill="#fdba74" />
                    <circle cx="50" cy="38" r="16" fill="#374151" />
                  </svg>
                </div>
              </div>

              <h2 className="intro-headline">
                Connect business people<br />through <span className="intro-gradient-text"><span className="brand-hyna-inline">HYNA</span><span className="brand-biz-inline">BIZ</span></span>
              </h2>
            </div>
          ) : (
            <>
              <div className="auth-top-illustration-section">
                <AuthIllustration />
              </div>

              <div className="auth-bottom-sheet">
                <div className="auth-header-group">
                  <h1 className="auth-title">
                    Welcome to <span className="auth-title-gradient"><span className="brand-hyna-inline">HYNA</span><span className="brand-biz-inline">BIZ</span></span>
                  </h1>
                  <p className="auth-subtitle">Start your journey with</p>
                </div>
                <SocialLogin onSocialClick={handleSocialLogin} />
                <Divider text="Or" />
                <PrimaryButton onClick={handleMainLogin}>
                  Login
                </PrimaryButton>
              </div>
            </>
          )}
          <Toast
            message={toastMessage}
            visible={toastVisible}
            onDismiss={() => setToastVisible(false)}
          />
        </div>
        <div className="mobile-home-indicator">
          <div className="home-bar" />
        </div>
      </div>
    </div>
    </PageTransition>
  )
}
