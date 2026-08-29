import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Loading from './pages/Loading'
import Login from './pages/Login'
import { OwnerProvider } from './context/OwnerContext'

import OwnerOnboarding from './pages/owner/OwnerOnboarding'
import ProfileReady from './pages/owner/ProfileReady'
import OwnerDashboard from './pages/owner/OwnerDashboard'
import OwnerDiscover from './pages/owner/OwnerDiscover'
import OwnerOpportunities from './pages/owner/OwnerOpportunities'
import OwnerRequirements from './pages/owner/OwnerRequirements'
import OwnerMissions from './pages/owner/OwnerMissions'
import OwnerMessages from './pages/owner/OwnerMessages'
import OwnerMeetings from './pages/owner/OwnerMeetings'
import OwnerProductsServices from './pages/owner/OwnerProductsServices'
import OwnerProfileView from './pages/owner/OwnerProfileView'
import OwnerAISearch from './pages/owner/OwnerAISearch'

function App() {
  const location = useLocation()

  return (
    <OwnerProvider>
      <main className="app-container">
        {/* location.key forces re-mount on route change, triggering enter animation */}
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Loading />} />
          <Route path="/login" element={<Login />} />

          {/* Owner Platform Routes */}
          <Route path="/owner/onboarding" element={<OwnerOnboarding />} />
          <Route path="/owner/onboarding/success" element={<ProfileReady />} />
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/discover" element={<OwnerDiscover />} />
          <Route path="/owner/opportunities" element={<OwnerOpportunities />} />
          <Route path="/owner/requirements" element={<OwnerRequirements />} />
          <Route path="/owner/missions" element={<OwnerMissions />} />
          <Route path="/owner/messages" element={<OwnerMessages />} />
          <Route path="/owner/meetings" element={<OwnerMeetings />} />
          <Route path="/owner/products" element={<OwnerProductsServices />} />
          <Route path="/owner/profile" element={<OwnerProfileView />} />
          <Route path="/owner/ai" element={<OwnerAISearch />} />
          <Route path="/owner/network" element={<OwnerDiscover />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </OwnerProvider>
  )
}

export default App
