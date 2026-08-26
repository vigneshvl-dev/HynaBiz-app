import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthIllustration from '../components/AuthIllustration'
import SocialLogin from '../components/SocialLogin'
import Divider from '../components/Divider'
import PrimaryButton from '../components/PrimaryButton'
import Toast from '../components/Toast'
export default function Login() {
  const navigate = useNavigate()
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const showToast = (message) => {
    setToastMessage(message)
    setToastVisible(true)
  }
  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false)
      }, 3200)
      return () => clearTimeout(timer)
    }
  }, [toastVisible])
  const handleMainLogin = () => {
    showToast('Login functionality will be connected soon.')
  }
  const handleSocialLogin = (message) => {
    showToast(message)
  }
  const handleCreateWorkspace = () => {
    navigate('/workspace')
  }
  return (
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
          <div className="auth-top-illustration-section">
            <AuthIllustration />
          </div>
          <div className="auth-bottom-sheet">
            <div className="auth-header-group">
              <h1 className="auth-title">Welcome to HYNABIZ</h1>
              <p className="auth-subtitle">Start your journey with</p>
            </div>
            <SocialLogin onSocialClick={handleSocialLogin} />
            <Divider text="Or" />
            <PrimaryButton onClick={handleMainLogin}>
              Login 
            </PrimaryButton>
            <div className="workspace-action-container">
              <button
                type="button"
                className="workspace-link-btn"
                onClick={handleCreateWorkspace}
                aria-label="Create New Workspace"
              >
                <span className="workspace-link-text">Create New Workspace</span>
                <span className="workspace-link-arrow">→</span>
              </button>
            </div>
          </div>
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
  )
}
