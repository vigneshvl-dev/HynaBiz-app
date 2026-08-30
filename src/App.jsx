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
import OwnerBusinessView from './pages/owner/OwnerBusinessView'
import OwnerAISearch from './pages/owner/OwnerAISearch'
import OwnerOffers from './pages/owner/OwnerOffers'
import OwnerAIMatches from './pages/owner/OwnerAIMatches'
import OwnerWhoCanHelp from './pages/owner/OwnerWhoCanHelp'
import OwnerSpeedNetworking from './pages/owner/OwnerSpeedNetworking'
import OwnerConnections from './pages/owner/OwnerConnections'
import OwnerLeadsCRM from './pages/owner/OwnerLeadsCRM'
import OwnerMarketplace from './pages/owner/OwnerMarketplace'
import OwnerQuotations from './pages/owner/OwnerQuotations'
import OwnerDeals from './pages/owner/OwnerDeals'
import OwnerPayments from './pages/owner/OwnerPayments'
import OwnerReputation from './pages/owner/OwnerReputation'
import OwnerAnalytics from './pages/owner/OwnerAnalytics'
import OwnerPosts from './pages/owner/OwnerPosts'
import OwnerTeam from './pages/owner/OwnerTeam'
import OwnerExpansion from './pages/owner/OwnerExpansion'
import OwnerVerification from './pages/owner/OwnerVerification'
import OwnerNotifications from './pages/owner/OwnerNotifications'
import OwnerSubscription from './pages/owner/OwnerSubscription'
import OwnerSettings from './pages/owner/OwnerSettings'

function App() {
  const location = useLocation()

  return (
    <OwnerProvider>
      <main className="app-container">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Loading />} />
          <Route path="/splash" element={<Loading />} />
          <Route path="/login" element={<Login />} />

          {/* Owner Platform Core Routes */}
          <Route path="/owner/onboarding" element={<OwnerOnboarding />} />
          <Route path="/owner/onboarding/success" element={<ProfileReady />} />
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/profile" element={<OwnerProfileView />} />
          <Route path="/owner/business" element={<OwnerBusinessView />} />
          <Route path="/owner/requirements" element={<OwnerRequirements />} />
          <Route path="/owner/offers" element={<OwnerOffers />} />
          <Route path="/owner/matches" element={<OwnerAIMatches />} />
          <Route path="/owner/discover" element={<OwnerDiscover />} />
          <Route path="/owner/connections" element={<OwnerConnections />} />
          <Route path="/owner/leads" element={<OwnerLeadsCRM />} />
          <Route path="/owner/messages" element={<OwnerMessages />} />
          <Route path="/owner/meetings" element={<OwnerMeetings />} />
          <Route path="/owner/help" element={<OwnerWhoCanHelp />} />
          <Route path="/owner/speed-networking" element={<OwnerSpeedNetworking />} />
          <Route path="/owner/products" element={<OwnerProductsServices />} />
          <Route path="/owner/marketplace" element={<OwnerMarketplace />} />
          <Route path="/owner/quotations" element={<OwnerQuotations />} />
          <Route path="/owner/deals" element={<OwnerDeals />} />
          <Route path="/owner/payments" element={<OwnerPayments />} />
          <Route path="/owner/reputation" element={<OwnerReputation />} />
          <Route path="/owner/ai" element={<OwnerAISearch />} />
          <Route path="/owner/analytics" element={<OwnerAnalytics />} />
          <Route path="/owner/posts" element={<OwnerPosts />} />
          <Route path="/owner/team" element={<OwnerTeam />} />
          <Route path="/owner/expansion" element={<OwnerExpansion />} />
          <Route path="/owner/verification" element={<OwnerVerification />} />
          <Route path="/owner/notifications" element={<OwnerNotifications />} />
          <Route path="/owner/subscription" element={<OwnerSubscription />} />
          <Route path="/owner/settings" element={<OwnerSettings />} />

          {/* Legacy / Compatibility Fallbacks */}
          <Route path="/owner/opportunities" element={<OwnerOpportunities />} />
          <Route path="/owner/missions" element={<OwnerMissions />} />
          <Route path="/owner/network" element={<OwnerConnections />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </OwnerProvider>
  )
}

export default App
