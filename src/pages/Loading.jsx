import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen'
import '../styles/page-transition.css'

export default function Loading() {
  const navigate = useNavigate()
  const [stage, setStage] = useState('entering')

  useEffect(() => {
    // Fade in
    const enterRaf = requestAnimationFrame(() => setStage('visible'))

    // After splash display time, animate out then navigate to login
    const leaveTimer = setTimeout(() => setStage('leaving'), 2800)
    const navTimer = setTimeout(() => navigate('/login'), 3180)

    return () => {
      cancelAnimationFrame(enterRaf)
      clearTimeout(leaveTimer)
      clearTimeout(navTimer)
    }
  }, [navigate])

  const handleClick = () => {
    setStage('leaving')
    setTimeout(() => navigate('/login'), 350)
  }

  return (
    <div
      className={`page-transition page-transition--${stage}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      title="Tap to skip"
    >
      <SplashScreen />
    </div>
  )
}
