import React, { useState } from 'react'
import { Users, Sparkles, MessageSquare, ArrowRight, Check } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerConnections() {
  const { connections, introductions } = useOwner()
  const [activeTab, setActiveTab] = useState('Connections')

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Connections &amp; Introduction Engine
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Manage your verified network connections and AI-assisted warm business introductions.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {['Connections', 'Business Introductions', 'Pending Requests'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`select-card ${activeTab === tab ? 'active' : ''}`}
            style={{ padding: '8px 18px', borderRadius: '12px' }}
            onClick={() => setActiveTab(tab)}
          >
            <span className="select-card-label" style={{ fontSize: '0.82rem' }}>{tab}</span>
          </button>
        ))}
      </div>

      {activeTab === 'Connections' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {connections.map((c) => (
            <div key={c.id} className="opportunity-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <img src={c.avatarUrl} alt={c.contactName} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>{c.contactName}</h4>
                  <div style={{ fontSize: '0.78rem', color: '#0066ff', fontWeight: 700 }}>{c.title} • {c.businessName}</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{c.location}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                <button type="button" className="btn-secondary-owner" style={{ flex: 1, padding: '8px' }}>View Profile</button>
                <button type="button" className="btn-primary-owner" style={{ flex: 1, padding: '8px' }}>
                  <MessageSquare size={14} />
                  <span>Chat</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {introductions.map((intro) => (
            <div key={intro.id} className="opportunity-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={18} color="#0066ff" />
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {intro.status}
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#334155', margin: '6px 0 10px 0' }}>{intro.reason}</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', fontSize: '0.8rem', color: '#475569', fontStyle: 'italic', marginBottom: '12px' }}>
                "{intro.suggestedMessage}"
              </div>
              <button type="button" className="btn-primary-owner" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
                <span>Send Introduction Request</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </OwnerLayout>
  )
}
