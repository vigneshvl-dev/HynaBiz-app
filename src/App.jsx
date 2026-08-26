import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loading from './pages/Loading'
import Login from './pages/Login'
import Workspace from './pages/Workspace'

function App() {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </main>
  )
}

export default App
