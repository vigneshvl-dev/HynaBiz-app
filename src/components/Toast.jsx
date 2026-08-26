import React from 'react'

export default function Toast({ message, visible, onDismiss }) {
  if (!visible || !message) return null

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <div className="toast-content">
        <span className="toast-icon">ℹ️</span>
        <span className="toast-text">{message}</span>
        {onDismiss && (
          <button 
            type="button" 
            className="toast-close" 
            onClick={onDismiss}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}
