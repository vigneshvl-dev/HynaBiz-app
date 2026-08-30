import React, { createContext, useContext, useState } from 'react'
import {
  INITIAL_OWNER_PROFILE,
  INITIAL_BUSINESS_PROFILE,
  DASHBOARD_OVERVIEW_METRICS,
  MOCK_REQUIREMENTS,
  MOCK_OFFERS,
  MOCK_DISCOVERY_BUSINESSES,
  MOCK_AI_RECOMMENDATIONS,
  MOCK_WHO_CAN_HELP,
  MOCK_SPEED_NETWORKING_SESSIONS,
  MOCK_CONNECTIONS,
  MOCK_INTRODUCTIONS,
  MOCK_LEADS_CRM,
  MOCK_MESSAGES,
  MOCK_MEETINGS,
  MOCK_PRODUCTS,
  MOCK_SERVICES,
  MOCK_MARKETPLACE_ITEMS,
  MOCK_QUOTATIONS,
  MOCK_DEALS,
  MOCK_PAYMENTS,
  MOCK_REPUTATION,
  MOCK_ANALYTICS,
  MOCK_POSTS,
  MOCK_TEAM_MEMBERS,
  MOCK_EXPANSION_PLANS,
  MOCK_NOTIFICATIONS,
  MOCK_SUBSCRIPTION
} from '../data/mockOwnerData'

const OwnerContext = createContext()

export function OwnerProvider({ children }) {
  const [onboardingStep, setOnboardingStep] = useState(1)
  const [onboardingCompleted, setOnboardingCompleted] = useState(true)

  // Profiles
  const [ownerProfile, setOwnerProfile] = useState(INITIAL_OWNER_PROFILE)
  const [businessProfile, setBusinessProfile] = useState(INITIAL_BUSINESS_PROFILE)
  const [dashboardMetrics, setDashboardMetrics] = useState(DASHBOARD_OVERVIEW_METRICS)

  // Core Platform Hub Datasets
  const [requirements, setRequirements] = useState(MOCK_REQUIREMENTS)
  const [offers, setOffers] = useState(MOCK_OFFERS)
  const [discoveryBusinesses, setDiscoveryBusinesses] = useState(MOCK_DISCOVERY_BUSINESSES)
  const [aiMatches, setAiMatches] = useState(MOCK_AI_RECOMMENDATIONS)
  const [whoCanHelpPosts, setWhoCanHelpPosts] = useState(MOCK_WHO_CAN_HELP)
  const [speedSessions, setSpeedSessions] = useState(MOCK_SPEED_NETWORKING_SESSIONS)
  const [connections, setConnections] = useState(MOCK_CONNECTIONS)
  const [introductions, setIntroductions] = useState(MOCK_INTRODUCTIONS)
  const [leadsCRM, setLeadsCRM] = useState(MOCK_LEADS_CRM)
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [meetings, setMeetings] = useState(MOCK_MEETINGS)
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [services, setServices] = useState(MOCK_SERVICES)
  const [marketplaceItems, setMarketplaceItems] = useState(MOCK_MARKETPLACE_ITEMS)
  const [quotations, setQuotations] = useState(MOCK_QUOTATIONS)
  const [deals, setDeals] = useState(MOCK_DEALS)
  const [payments, setPayments] = useState(MOCK_PAYMENTS)
  const [reputation, setReputation] = useState(MOCK_REPUTATION)
  const [analytics, setAnalytics] = useState(MOCK_ANALYTICS)
  const [posts, setPosts] = useState(MOCK_POSTS)
  const [teamMembers, setTeamMembers] = useState(MOCK_TEAM_MEMBERS)
  const [expansionPlans, setExpansionPlans] = useState(MOCK_EXPANSION_PLANS)
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS)
  const [subscription, setSubscription] = useState(MOCK_SUBSCRIPTION)

  // Actions
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

  const publishOffer = (offerData) => {
    setOffers((prev) => [
      {
        ...offerData,
        id: `off-${Date.now()}`,
      },
      ...prev,
    ])
  }

  const createQuotation = (quoteData) => {
    setQuotations((prev) => [
      {
        ...quoteData,
        id: `quote-${Date.now()}`,
        quotationNumber: `QT-2026-${Math.floor(100 + Math.random() * 900)}`,
        status: 'Sent / Pending Approval',
      },
      ...prev,
    ])
  }

  const updateLeadStage = (leadId, newStage) => {
    setLeadsCRM((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, stage: newStage } : l))
    )
  }

  const addLead = (leadData) => {
    setLeadsCRM((prev) => [
      {
        ...leadData,
        id: `lead-${Date.now()}`,
        stage: 'New',
        lastContact: 'Just now',
      },
      ...prev,
    ])
  }

  const createHelpPost = (postData) => {
    setWhoCanHelpPosts((prev) => [
      {
        ...postData,
        id: `help-${Date.now()}`,
        author: ownerProfile.fullName,
        company: businessProfile.name,
        avatarUrl: ownerProfile.avatarUrl,
        repliesCount: 0,
        timeAgo: 'Just now',
        replies: [],
      },
      ...prev,
    ])
  }

  const addPost = (postText, type = 'Business Update') => {
    setPosts((prev) => [
      {
        id: `post-${Date.now()}`,
        author: ownerProfile.fullName,
        company: businessProfile.name,
        avatarUrl: ownerProfile.avatarUrl,
        type,
        content: postText,
        likes: 0,
        comments: 0,
        timeAgo: 'Just now',
      },
      ...prev,
    ])
  }

  const inviteTeamMember = (memberData) => {
    setTeamMembers((prev) => [
      {
        ...memberData,
        id: `tm-${Date.now()}`,
        status: 'Active',
      },
      ...prev,
    ])
  }

  const addProduct = (prodData) => {
    setProducts((prev) => [
      {
        ...prodData,
        id: `prod-${Date.now()}`,
      },
      ...prev,
    ])
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const addService = (servData) => {
    setServices((prev) => [
      {
        ...servData,
        id: `serv-${Date.now()}`,
      },
      ...prev,
    ])
  }

  const deleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id))
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
        dashboardMetrics,
        requirements,
        publishRequirement,
        offers,
        publishOffer,
        discoveryBusinesses,
        aiMatches,
        whoCanHelpPosts,
        createHelpPost,
        speedSessions,
        connections,
        introductions,
        leadsCRM,
        updateLeadStage,
        addLead,
        messages,
        sendMessageToChat,
        meetings,
        products,
        addProduct,
        deleteProduct,
        services,
        addService,
        deleteService,
        marketplaceItems,
        quotations,
        createQuotation,
        deals,
        payments,
        reputation,
        analytics,
        posts,
        addPost,
        teamMembers,
        inviteTeamMember,
        expansionPlans,
        notifications,
        subscription,
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
