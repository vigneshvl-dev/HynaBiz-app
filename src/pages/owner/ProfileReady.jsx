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
      <div className="onboarding-card" style={{ maxWidth: '620px', textAlign: 'center' }}>
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

        <h2 className="onboarding-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
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
            padding: '24px',
            textAlign: 'left',
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid #cbd5e1', paddingBottom: '14px' }}>
            <img
              src={businessProfile.logoUrl}
              alt={businessProfile.name}
              style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }}
            />
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                {businessProfile.name}
              </h3>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                {businessProfile.industry} • {businessProfile.city}, {businessProfile.country}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>What You Offer</span>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                {whatCanOffer.slice(0, 3).join(', ')}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>What You Need</span>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                {whatLookingFor.slice(0, 3).join(', ')}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>Business Goals</span>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                {businessGoals.slice(0, 2).join(', ')}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>Target Markets</span>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b', marginTop: '3px' }}>
                {targetCountries.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn-primary-owner"
          style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
          onClick={() => navigate('/owner/dashboard')}
        >
          <span>Enter HynaBiz</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
