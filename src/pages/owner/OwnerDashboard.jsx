import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Zap,
  TrendingUp,
  MessageSquare,
  Video,
  Briefcase,
  Receipt,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Plus
} from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const { ownerProfile, businessProfile, dashboardMetrics, aiMatches, leadsCRM, meetings } = useOwner()

  return (
    <OwnerLayout>
      {/* Welcome Banner */}
      <div className="dashboard-welcome-banner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 className="dashboard-welcome-title" style={{ margin: 0 }}>
              Good Morning, {ownerProfile.fullName}
            </h1>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
              {businessProfile.name} • {businessProfile.industry} • <ShieldCheck size={14} color="#10b981" style={{ verticalAlign: 'middle' }} /> {businessProfile.verificationStatus}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="btn-primary-owner"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
              onClick={() => navigate('/owner/requirements')}
            >
              <Plus size={16} />
              <span>Post Requirement</span>
            </button>
            <button
              type="button"
              className="btn-secondary-owner"
              style={{ padding: '8px 14px', fontSize: '0.82rem', background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
              onClick={() => navigate('/owner/offers')}
            >
              <span>Publish Offer</span>
            </button>
          </div>
        </div>

        {/* AI Quick Query */}
        <div className="ai-prompt-box-inline" style={{ marginTop: '20px' }}>
          <Sparkles size={20} color="#00d2ff" style={{ flexShrink: 0 }} />
          <input
            type="text"
            className="ai-prompt-input-inline"
            placeholder="Tell Hyna what your business needs today... (e.g., I need a distributor in Kerala)"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                navigate(`/owner/ai?query=${encodeURIComponent(e.target.value)}`)
              }
            }}
          />
          <button
            type="button"
            className="ai-prompt-submit-btn"
            onClick={() => navigate('/owner/ai')}
          >
            <span>Ask Hyna AI</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Overview Stat Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '14px', marginBottom: '24px' }}>
        <div
          onClick={() => navigate('/owner/matches')}
          style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>New Matches</span>
            <Sparkles size={18} color="#0066ff" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{dashboardMetrics.newMatches}</div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>AI Recommended</span>
        </div>

        <div
          onClick={() => navigate('/owner/leads')}
          style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>Active Leads</span>
            <TrendingUp size={18} color="#10b981" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{dashboardMetrics.newLeads}</div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>In CRM Pipeline</span>
        </div>

        <div
          onClick={() => navigate('/owner/messages')}
          style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase' }}>Messages</span>
            <MessageSquare size={18} color="#6366f1" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{dashboardMetrics.newMessages}</div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Unread Inquiries</span>
        </div>

        <div
          onClick={() => navigate('/owner/meetings')}
          style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase' }}>Meetings</span>
            <Video size={18} color="#f59e0b" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{dashboardMetrics.upcomingMeetings}</div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Upcoming B2B Calls</span>
        </div>

        <div
          onClick={() => navigate('/owner/deals')}
          style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#00d2ff', textTransform: 'uppercase' }}>Active Deals</span>
            <Briefcase size={18} color="#0066ff" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{dashboardMetrics.activeDeals}</div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{dashboardMetrics.completedDealsCount} Completed</span>
        </div>
      </div>

      {/* Main 2-Column Dashboard Body */}
      <div className="dashboard-grid-2col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* AI MATCH RECOMMENDATIONS */}
          <div>
            <div className="dashboard-section-title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} color="#0066ff" />
                <span>Hyna AI Recommended Matches</span>
              </div>
              <button type="button" onClick={() => navigate('/owner/matches')} style={{ background: 'none', border: 'none', color: '#0066ff', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}>
                View All ({aiMatches.length})
              </button>
            </div>

            {aiMatches.map((opp) => (
              <div key={opp.id} className="opportunity-card">
                <div className="opp-card-header">
                  <div className="opp-company-badge">
                    <img src={opp.logoUrl} alt={opp.businessName} className="opp-logo-img" />
                    <div>
                      <h4 className="opp-company-name">{opp.businessName}</h4>
                      <p className="opp-company-loc">{opp.type} • {opp.location}</p>
                    </div>
                  </div>

                  <div className="ai-score-pill">
                    <Sparkles size={14} />
                    <span>{opp.compatibilityScore}% Match</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.86rem', color: '#334155', margin: '8px 0' }}>{opp.summary}</p>

                <div className="opp-match-reasons">
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>Why Hyna AI Recommends:</span>
                  {opp.matchReasons.map((reason, idx) => (
                    <div key={idx} className="match-reason-item">
                      <CheckCircle2 size={13} color="#0066ff" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
                  <button type="button" className="btn-secondary-owner" style={{ padding: '8px 14px', fontSize: '0.8rem' }} onClick={() => navigate('/owner/messages')}>
                    Chat Directly
                  </button>
                  <button type="button" className="btn-primary-owner" style={{ padding: '8px 16px', fontSize: '0.82rem' }} onClick={() => navigate('/owner/quotations')}>
                    <span>Send Quotation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ACTIVE LEADS CRM PREVIEW */}
          <div>
            <div className="dashboard-section-title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={20} color="#10b981" />
                <span>Active B2B Leads</span>
              </div>
              <button type="button" onClick={() => navigate('/owner/leads')} style={{ background: 'none', border: 'none', color: '#0066ff', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}>
                Manage CRM
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {leadsCRM.map((lead) => (
                <div key={lead.id} style={{ background: '#ffffff', borderRadius: '16px', padding: '14px 18px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>{lead.companyName}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{lead.requirement} • {lead.estimatedValue}</div>
                  </div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', background: '#eff6ff', color: '#0066ff' }}>
                    {lead.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* AI RECOMMENDATIONS WIDGET */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              AI Smart Recommendations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '12px', fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
                • 3 potential distributors found in UAE &amp; Middle East.
              </div>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '12px', fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
                • 5 potential clothing packaging buyers in Kerala.
              </div>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '12px', fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>
                • 2 strategic Series A investor opportunities.
              </div>
            </div>
          </div>

          {/* UPCOMING MEETINGS */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <div className="dashboard-section-title" style={{ fontSize: '0.98rem', marginBottom: '12px' }}>
              <span>Upcoming Meetings</span>
              <button type="button" onClick={() => navigate('/owner/meetings')} style={{ background: 'none', border: 'none', color: '#0066ff', fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer' }}>
                Calendar
              </button>
            </div>
            {meetings.map((m) => (
              <div key={m.id} style={{ background: '#eff6ff', borderRadius: '14px', padding: '12px', marginBottom: '10px', border: '1px solid #bfdbfe' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff' }}>{m.type} • {m.date}</div>
                <div style={{ fontWeight: 800, fontSize: '0.86rem', color: '#0f172a', margin: '2px 0' }}>{m.personName}</div>
                <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{m.businessName}</div>
                <a href={m.meetingLink} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '6px', fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', textDecoration: 'none' }}>
                  Join Call &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
