import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Sparkles, Send, ArrowRight, Zap, Target, Globe } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerAISearch() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('query') || ''

  const { businessProfile, ownerProfile } = useOwner()
  const [query, setQuery] = useState(initialQuery)
  const [messages, setMessages] = useState([
    {
      id: 'ai-intro',
      sender: 'ai',
      text: `Hello ${ownerProfile.fullName}! I am Hyna AI. How can I assist ${businessProfile.name} in discovering distributors, buyers, or markets today?`
    }
  ])

  useEffect(() => {
    if (initialQuery) {
      handleAskQuery(initialQuery)
    }
  }, [initialQuery])

  const handleAskQuery = (qText) => {
    if (!qText.trim()) return
    const userMsg = { id: `u-${Date.now()}`, sender: 'user', text: qText }
    setMessages((prev) => [...prev, userMsg])

    setTimeout(() => {
      const aiReply = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Hyna AI Strategy Analysis for "${qText}":\n\n1. Market Match: 3 verified Middle East distributors found in Dubai.\n2. Recommended Next Step: Publish a Distributor Requirement for UAE region to receive direct RFP bids.\n3. Estimated Lead Time: 7 to 14 days for initial connection.`
      }
      setMessages((prev) => [...prev, aiReply])
    }, 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      handleAskQuery(query)
      setQuery('')
    }
  }

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={24} color="#0066ff" />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Hyna AI Business Intelligence
          </h1>
        </div>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '4px 0 0 0' }}>
          Ask Hyna AI to analyze market opportunities, draft partnership proposals, or find active buyers.
        </p>
      </div>

      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          height: 'calc(100vh - 200px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          overflow: 'hidden',
        }}
      >
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', background: '#f8fafc' }}>
          {messages.map((m) => (
            <div
              key={m.id}
              style={{
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                background: m.sender === 'user' ? 'linear-gradient(135deg, #0066ff 0%, #0052cc 100%)' : '#ffffff',
                color: m.sender === 'user' ? '#ffffff' : '#0f172a',
                padding: '16px 20px',
                borderRadius: m.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                border: m.sender === 'user' ? 'none' : '1px solid #e2e8f0',
                whiteSpace: 'pre-line',
                fontSize: '0.92rem',
                lineHeight: 1.5,
              }}
            >
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '16px', background: '#ffffff', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '12px' }}>
          <input
            type="text"
            placeholder="Ask Hyna AI anything about market entry, buyers, or strategic goals..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: 1, border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '12px 16px', outline: 'none', fontSize: '0.9rem' }}
          />
          <button type="submit" className="btn-primary-owner" style={{ padding: '12px 22px' }}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </OwnerLayout>
  )
}
