import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen'

export default function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    // Navigate slightly before the fade-out completes (2.8s delay + 0.9s = 3.7s)
    // so login is already mounted when splash becomes invisible
    const timer = setTimeout(() => {
      navigate('/login')
    }, 3500)

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
