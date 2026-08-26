import React from 'react'

export default function Divider({ text = 'Or' }) {
  return (
    <div className="auth-divider" role="separator" aria-label={text}>
      <span className="divider-line" />
      <span className="divider-text">{text}</span>
      <span className="divider-line" />
    </div>
  )
}
