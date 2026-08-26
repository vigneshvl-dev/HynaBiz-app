import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Loading from './pages/Loading'
import Login from './pages/Login'
import Workspace from './pages/Workspace'

function App() {
  const location = useLocation()

  return (
    <main className="app-container">
      {/* location.key forces re-mount on route change, triggering enter animation */}
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </main>
  )
}

export default App
