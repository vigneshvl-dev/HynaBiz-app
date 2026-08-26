import React from 'react'
import logoImg from '../assets/hynabiz-logo-removebg-preview.png'

export default function Logo({ className }) {
  return (
    <img
      src={logoImg}
      alt="HYNABIZ Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
