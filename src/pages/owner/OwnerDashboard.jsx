import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Zap,
  Users,
  Target,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Building,
  Plus,
  MessageSquare
} from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const {
    ownerProfile,
    businessProfile,
    opportunities,
    connections,
    missions,
    toggleTaskCompleted
  } = useOwner()

  const [aiGoalQuery, setAiGoalQuery] = useState('')

  const handleAskHynaAI = (e) => {
    e.preventDefault()
    if (aiGoalQuery.trim()) {
      navigate(`/owner/ai?query=${encodeURIComponent(aiGoalQuery)}`)
    } else {
      navigate('/owner/ai')
    }
  }

  return (
    <OwnerLayout>
      {/* Welcome & AI Goal Bar */}
      <div className="dashboard-welcome-banner">
        <h1 className="dashboard-welcome-title">Welcome back, {ownerProfile.fullName}</h1>
        <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '-6px', marginBottom: '18px' }}>
          {businessProfile.name} • {businessProfile.industry}
        </p>

        <form onSubmit={handleAskHynaAI} className="ai-prompt-box-inline">
          <Sparkles size={20} color="#00d2ff" style={{ flexShrink: 0 }} />
          <input
            type="text"
            className="ai-prompt-input-inline"
            placeholder="What's your next business goal? Tell HynaBiz what you need..."
            value={aiGoalQuery}
            onChange={(e) => setAiGoalQuery(e.target.value)}
          />
          <button type="submit" className="ai-prompt-submit-btn">
            <span>Ask Hyna AI</span>
            <ArrowRight size={16} />
          </button>
        </form>
      </div>

      <div className="dashboard-grid-2col">
        {/* Main Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* AI OPPORTUNITIES */}
          <div>
            <div className="dashboard-section-title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={20} color="#0066ff" />
                <span>AI Opportunities for You</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/owner/opportunities')}
                style={{ background: 'none', border: 'none', color: '#0066ff', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}
              >
                View All ({opportunities.length})
              </button>
            </div>

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

                  <div className="ai-score-pill">
                    <Sparkles size={14} />
                    <span>{opp.compatibilityScore}% Match</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.86rem', color: '#334155', margin: '8px 0' }}>
                  {opp.summary}
                </p>

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
                  <button
                    type="button"
                    className="btn-primary-owner"
                    style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                    onClick={() => navigate('/owner/opportunities')}
                  >
                    <span>View Opportunity</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ACTIVE BUSINESS MISSIONS */}
          <div>
            <div className="dashboard-section-title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={20} color="#0066ff" />
                <span>Active Business Missions</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/owner/missions')}
                style={{ background: 'none', border: 'none', color: '#0066ff', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}
              >
                View Missions
              </button>
            </div>

            {missions.map((m) => (
              <div
                key={m.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px',
                  border: '1px solid #e2e8f0',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#eff6ff', color: '#0066ff', padding: '3px 8px', borderRadius: '6px' }}>
                      MISSION
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      {m.title}
                    </h4>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, color: '#0066ff' }}>
                    {m.progress}%
                  </span>
                </div>

                <div className="progress-track" style={{ height: '6px', marginBottom: '14px' }}>
                  <div className="progress-fill" style={{ width: `${m.progress}%` }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                  {m.tasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => toggleTaskCompleted(m.id, task.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: task.completed ? '#64748b' : '#0f172a',
                        cursor: 'pointer',
                        textDecoration: task.completed ? 'line-through' : 'none',
                      }}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: task.completed ? 'none' : '1.5px solid #cbd5e1',
                          background: task.completed ? '#0066ff' : '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                        }}
                      >
                        {task.completed && <Check size={12} />}
                      </div>
                      <span>{task.label}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn-secondary-owner"
                  style={{ width: '100%', padding: '10px', fontSize: '0.84rem' }}
                  onClick={() => navigate('/owner/missions')}
                >
                  Continue Mission
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Side Widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* PROFILE COMPLETION WIDGET */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '20px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>
                Profile Completion
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#0066ff' }}>
                87%
              </span>
            </div>

            <div className="progress-track" style={{ height: '6px', marginBottom: '14px' }}>
              <div className="progress-fill" style={{ width: '87%' }} />
            </div>

            <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '14px' }}>
              Complete remaining verification items to boost AI matching score.
            </p>

            <button
              type="button"
              className="btn-secondary-owner"
              style={{ width: '100%', padding: '8px 12px', fontSize: '0.8rem' }}
              onClick={() => navigate('/owner/profile')}
            >
              Complete Profile
            </button>
          </div>

          {/* RECOMMENDED CONNECTIONS */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '20px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div className="dashboard-section-title" style={{ fontSize: '1rem', marginBottom: '14px' }}>
              <span>Recommended Connections</span>
              <button
                type="button"
                onClick={() => navigate('/owner/network')}
                style={{ background: 'none', border: 'none', color: '#0066ff', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}
              >
                View Network
              </button>
            </div>

            {connections.map((conn) => (
              <div
                key={conn.id}
                style={{
                  border: '1px solid #f1f5f9',
                  borderRadius: '14px',
                  padding: '12px',
                  marginBottom: '10px',
                  background: '#f8fafc',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <img src={conn.logoUrl} alt={conn.businessName} style={{ width: '36px', height: '36px', borderRadius: '10px', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#0f172a' }}>{conn.businessName}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{conn.industry} • {conn.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    className="btn-secondary-owner"
                    style={{ flex: 1, padding: '6px', fontSize: '0.74rem' }}
                    onClick={() => navigate('/owner/network')}
                  >
                    View Profile
                  </button>
                  <button
                    type="button"
                    className="btn-primary-owner"
                    style={{ flex: 1, padding: '6px', fontSize: '0.74rem' }}
                    onClick={() => navigate('/owner/network')}
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RECOMMENDED NEXT ACTION */}
          <div
            style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              borderRadius: '20px',
              padding: '20px',
              border: '1px solid #bfdbfe',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <MessageSquare size={18} color="#0066ff" />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 800, color: '#0066ff' }}>
                Recommended Next Action
              </span>
            </div>

            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a', marginBottom: '4px' }}>
              Follow up with Dubai Distribution Co.
            </div>

            <p style={{ fontSize: '0.78rem', color: '#475569', marginBottom: '14px' }}>
              You connected 3 days ago and haven't responded to Tariq's latest message yet.
            </p>

            <button
              type="button"
              className="btn-primary-owner"
              style={{ width: '100%', padding: '10px', fontSize: '0.82rem' }}
              onClick={() => navigate('/owner/messages')}
            >
              View Conversation
            </button>
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
