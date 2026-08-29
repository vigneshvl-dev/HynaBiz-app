import React, { useState } from 'react'
import { Zap, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerOpportunities() {
  const { opportunities } = useOwner()
  const [activeTab, setActiveTab] = useState('Recommended')

  const tabs = ['Recommended', 'New', 'Active', 'In Discussion', 'Meeting', 'Proposal', 'Completed', 'Archived']

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Opportunity Center
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Manage your high-intent business matches, RFP inquiries, and distribution leads.
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '20px',
          scrollbarWidth: 'none',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`select-card ${activeTab === tab ? 'active' : ''}`}
            style={{ padding: '8px 16px', borderRadius: '12px', whiteSpace: 'nowrap' }}
            onClick={() => setActiveTab(tab)}
          >
            <span className="select-card-label" style={{ fontSize: '0.8rem' }}>{tab}</span>
          </button>
        ))}
      </div>

      {/* Opportunities List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {opportunities.map((opp) => (
          <div key={opp.id} className="opportunity-card">
            <div className="opp-card-header">
              <div className="opp-company-badge">
                <img src={opp.logoUrl} alt={opp.businessName} className="opp-logo-img" />
                <div>
                  <h4 className="opp-company-name">{opp.businessName}</h4>
                  <p className="opp-company-loc">{opp.industry} • {opp.location}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: '#f1f5f9', color: '#475569' }}>
                  {opp.status}
                </span>
                <div className="ai-score-pill">
                  <Sparkles size={14} />
                  <span>{opp.compatibilityScore}% AI Match</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#334155', margin: '10px 0' }}>{opp.summary}</p>

            <div className="opp-match-reasons">
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>Why this matches:</span>
              {opp.matchReasons.map((reason, idx) => (
                <div key={idx} className="match-reason-item">
                  <CheckCircle2 size={13} color="#0066ff" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
              <button type="button" className="btn-secondary-owner" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
                Decline
              </button>
              <button type="button" className="btn-primary-owner" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
                <span>Connect &amp; Pitch</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
