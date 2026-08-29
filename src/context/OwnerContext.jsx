import React, { createContext, useContext, useState } from 'react'
import {
  INITIAL_OWNER_PROFILE,
  INITIAL_BUSINESS_PROFILE,
  INITIAL_PRODUCTS,
  INITIAL_SERVICES,
  MOCK_OPPORTUNITIES,
  MOCK_CONNECTIONS,
  MOCK_MISSIONS,
  MOCK_REQUIREMENTS,
  MOCK_MESSAGES,
  MOCK_MEETINGS
} from '../data/mockOwnerData'

const OwnerContext = createContext()

export function OwnerProvider({ children }) {
  const [onboardingStep, setOnboardingStep] = useState(1)
  const [onboardingCompleted, setOnboardingCompleted] = useState(false)

  // Step 1: Owner Profile
  const [ownerProfile, setOwnerProfile] = useState(INITIAL_OWNER_PROFILE)

  // Step 2: Business Profile
  const [businessProfile, setBusinessProfile] = useState(INITIAL_BUSINESS_PROFILE)

  // Step 3: Products & Services
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [services, setServices] = useState(INITIAL_SERVICES)

  // Step 4: What Can You Offer
  const [whatCanOffer, setWhatCanOffer] = useState(['Products', 'Manufacturing', 'Logistics', 'Consulting'])

  // Step 5: What Are You Looking For
  const [whatLookingFor, setWhatLookingFor] = useState(['Buyers', 'Distributors', 'International Partners'])

  // Step 6: Business Goals
  const [businessGoals, setBusinessGoals] = useState(['Find Distributors', 'Enter New Markets', 'Expand Internationally'])
  const [goalDetailText, setGoalDetailText] = useState('I want to expand my packaging business into the UAE and GCC region.')

  // Step 7: Target Markets
  const [marketScope, setMarketScope] = useState('International')
  const [targetCountries, setTargetCountries] = useState(['India', 'United Arab Emirates', 'United States', 'Singapore'])

  // Step 8: Business Intent
  const [businessIntentText, setBusinessIntentText] = useState('I manufacture eco-friendly biodegradable packaging and I am looking for exclusive commercial distributors in Dubai and UAE.')
  const [aiIntentAnalysis, setAiIntentAnalysis] = useState({
    need: 'Distributor',
    industry: 'Packaging & Manufacturing',
    targetMarket: 'Dubai, UAE',
    goal: 'International Expansion',
    intentLevel: 'High (96% Confidence)',
  })

  // Step 9: Verification Statuses
  const [verification, setVerification] = useState({
    email: 'Verified',
    phone: 'Verified',
    business: 'Verified',
    website: 'Verified',
    registration: 'Pending',
  })

  // Core Owner Platform Lists
  const [opportunities, setOpportunities] = useState(MOCK_OPPORTUNITIES)
  const [connections, setConnections] = useState(MOCK_CONNECTIONS)
  const [missions, setMissions] = useState(MOCK_MISSIONS)
  const [requirements, setRequirements] = useState(MOCK_REQUIREMENTS)
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [meetings, setMeetings] = useState(MOCK_MEETINGS)

  // Actions
  const addProduct = (newProd) => {
    setProducts((prev) => [...prev, { ...newProd, id: `prod-${Date.now()}` }])
  }

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)))
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const addService = (newServ) => {
    setServices((prev) => [...prev, { ...newServ, id: `serv-${Date.now()}` }])
  }

  const updateService = (id, updatedFields) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s)))
  }

  const deleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  const publishRequirement = (reqData) => {
    setRequirements((prev) => [
      {
        ...reqData,
        id: `req-${Date.now()}`,
        publishedDate: 'Just now',
      },
      ...prev,
    ])
  }

  const addMission = (missionData) => {
    setMissions((prev) => [
      {
        ...missionData,
        id: `mission-${Date.now()}`,
        progress: 0,
      },
      ...prev,
    ])
  }

  const toggleTaskCompleted = (missionId, taskId) => {
    setMissions((prev) =>
      prev.map((m) => {
        if (m.id !== missionId) return m
        const updatedTasks = m.tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
        const completedCount = updatedTasks.filter((t) => t.completed).length
        const progress = Math.round((completedCount / updatedTasks.length) * 100)
        return { ...m, tasks: updatedTasks, progress }
      })
    )
  }

  const sendConnectionRequest = (connData) => {
    setConnections((prev) => [
      {
        ...connData,
        id: `conn-${Date.now()}`,
        status: 'Pending',
      },
      ...prev,
    ])
  }

  const sendMessageToChat = (chatId, text) => {
    setMessages((prev) =>
      prev.map((chat) => {
        if (chat.id !== chatId) return chat
        return {
          ...chat,
          messages: [
            ...chat.messages,
            { id: `m-${Date.now()}`, sender: 'me', text, time: 'Just now' },
          ],
        }
      })
    )
  }

  return (
    <OwnerContext.Provider
      value={{
        onboardingStep,
        setOnboardingStep,
        onboardingCompleted,
        setOnboardingCompleted,
        ownerProfile,
        setOwnerProfile,
        businessProfile,
        setBusinessProfile,
        products,
        services,
        addProduct,
        updateProduct,
        deleteProduct,
        addService,
        updateService,
        deleteService,
        whatCanOffer,
        setWhatCanOffer,
        whatLookingFor,
        setWhatLookingFor,
        businessGoals,
        setBusinessGoals,
        goalDetailText,
        setGoalDetailText,
        marketScope,
        setMarketScope,
        targetCountries,
        setTargetCountries,
        businessIntentText,
        setBusinessIntentText,
        aiIntentAnalysis,
        setAiIntentAnalysis,
        verification,
        setVerification,
        opportunities,
        setOpportunities,
        connections,
        setConnections,
        sendConnectionRequest,
        missions,
        setMissions,
        addMission,
        toggleTaskCompleted,
        requirements,
        setRequirements,
        publishRequirement,
        messages,
        setMessages,
        sendMessageToChat,
        meetings,
        setMeetings,
      }}
    >
      {children}
    </OwnerContext.Provider>
  )
}

export function useOwner() {
  const context = useContext(OwnerContext)
  if (!context) {
    throw new Error('useOwner must be used within an OwnerProvider')
  }
  return context
}
