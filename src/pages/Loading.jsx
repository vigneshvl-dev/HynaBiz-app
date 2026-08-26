import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen'

export default function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    // Automatically transition to login page after splash duration
    const timer = setTimeout(() => {
      navigate('/login')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div 
      onClick={handleClick} 
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
      title="Tap to skip to login"
    >
      <SplashScreen />
    </div>
  )
}
