import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, CheckCircle, ArrowRight, Building, Globe, Target, Briefcase } from 'lucide-react'
import { useOwner } from '../../context/OwnerContext'

export default function ProfileReady() {
  const navigate = useNavigate()
  const {
    businessProfile,
    whatCanOffer,
    whatLookingFor,
    businessGoals,
    targetCountries
  } = useOwner()

  return (
    <div className="owner-onboarding-wrapper">
      {/* Mobile Device Phone Frame */}
      <div className="auth-phone-card" style={{ maxWidth: '440px', height: '860px', background: '#ffffff' }}>
        {/* Mobile Status Bar */}
        <div className="mobile-status-bar auth-status-bar">
          <span className="status-time">9:41</span>
          <div className="dynamic-island">
            <span className="island-camera" />
          </div>
          <div className="status-icons">
            <svg className="icon-cellular" viewBox="0 0 18 12" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" />
              <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
              <rect x="15" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg className="icon-wifi" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.05 3.55a8.42 8.42 0 0111.9 0l-1.06 1.06a6.92 6.92 0 00-9.78 0L2.05 3.55zM4.17 5.67a5.42 5.42 0 017.66 0l-1.06 1.06a3.92 3.92 0 00-5.54 0L4.17 5.67z" />
            </svg>
            <div className="battery-icon">
              <div className="battery-fill" />
            </div>
          </div>
        </div>

        {/* Inner Scrollable Viewport */}
        <div className="auth-viewport" style={{ padding: '16px 14px 20px 14px', overflowY: 'auto', flex: 1, background: '#ffffff' }}>
          <div className="onboarding-card" style={{ boxShadow: 'none', border: 'none', padding: '12px 6px', maxWidth: '100%', textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
              }}
            >
              <CheckCircle size={36} color="#059669" />
            </div>

            <h2 className="onboarding-title" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
              Your HynaBiz profile is ready.
            </h2>
            <p className="onboarding-subtitle" style={{ marginBottom: '24px' }}>
              Your business is now ready to discover new opportunities and connect across the global AI network.
            </p>

            {/* Profile Summary Card */}
            <div
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '20px',
                padding: '20px 16px',
                textAlign: 'left',
                marginBottom: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid #cbd5e1', paddingBottom: '14px' }}>
                <img
                  src={businessProfile.logoUrl}
                  alt={businessProfile.name}
                  style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {businessProfile.name}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    {businessProfile.industry} • {businessProfile.city}, {businessProfile.country}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>What You Offer</span>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                    {whatCanOffer.slice(0, 3).join(', ')}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>What You Need</span>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                    {whatLookingFor.slice(0, 3).join(', ')}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>Business Goals</span>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                    {businessGoals.slice(0, 2).join(', ')}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>Target Markets</span>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                    {targetCountries.slice(0, 3).join(', ')}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary-owner"
              style={{ width: '100%', padding: '16px', fontSize: '0.95rem' }}
              onClick={() => navigate('/owner/dashboard')}
            >
              <span>Enter HynaBiz</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Home Indicator */}
        <div className="mobile-home-indicator">
          <div className="home-bar" />
        </div>
      </div>
    </div>
  )
}
