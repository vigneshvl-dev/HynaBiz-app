import React from 'react'

export default function PrimaryButton({
  children = 'Login with Ease.!',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`primary-auth-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="button-text">{children}</span>
    </button>
  )
}
