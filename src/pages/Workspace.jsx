import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import PrimaryButton from '../components/PrimaryButton'
import Toast from '../components/Toast'

export default function Workspace() {
  const navigate = useNavigate()
  const [workspaceName, setWorkspaceName] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const showToast = (msg) => {
    setToastMessage(msg)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  const handleCreate = (e) => {
    e.preventDefault()
    showToast('Workspace registration pipeline will be available soon.')
  }

  return (
    <div className="login-canvas-wrapper">
      <div className="canvas-ambient-glow glow-top" />
      <div className="canvas-ambient-glow glow-bottom" />

      <div className="auth-phone-card">
        {/* Status Bar */}
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

        <div className="auth-viewport workspace-viewport">
          <div className="workspace-header">
            <button
              type="button"
              className="workspace-back-btn"
              onClick={() => navigate('/login')}
              aria-label="Back to login"
            >
              ← Back to Login
            </button>
            <div className="workspace-logo-badge">
              <img src={logoImg} alt="HYNABIZ Logo" className="workspace-logo-img" />
            </div>
            <h1 className="workspace-title">Create Workspace</h1>
            <p className="workspace-subtitle">
              Set up your business environment in HYNABIZ
            </p>
          </div>

          <form className="workspace-form" onSubmit={handleCreate}>
            <div className="form-group">
              <label htmlFor="workspace-input" className="form-label">
                Workspace / Organization Name
              </label>
              <input
                id="workspace-input"
                type="text"
                className="form-input"
                placeholder="e.g. Acme Innovations Inc."
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </div>

            <div className="workspace-preview-card">
              <div className="preview-dot" />
              <div className="preview-info">
                <span className="preview-label">Your Workspace URL</span>
                <span className="preview-url">
                  https://{workspaceName.trim() ? workspaceName.toLowerCase().replace(/[^a-z0-9]/g, '') : 'your-company'}.hynabiz.com
                </span>
              </div>
            </div>

            <PrimaryButton type="submit">
              Continue Setup →
            </PrimaryButton>
          </form>

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
