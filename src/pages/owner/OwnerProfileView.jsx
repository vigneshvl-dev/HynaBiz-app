import React from 'react'
import { Building, ShieldCheck, MapPin, Globe, Mail, Phone, ArrowRight, User } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerProfileView() {
  const {
    ownerProfile,
    businessProfile,
    products,
    services,
    whatCanOffer,
    whatLookingFor,
    targetCountries,
    businessGoals,
    verification
  } = useOwner()

  return (
    <OwnerLayout>
      {/* Business Profile Header Card */}
      <div className="dashboard-welcome-banner" style={{ background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', borderTop: '4px solid #0066ff' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <img src={businessProfile.logoUrl} alt={businessProfile.name} style={{ width: '72px', height: '72px', borderRadius: '16px', objectFit: 'cover', border: '1px solid #cbd5e1' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                  {businessProfile.name}
                </h1>
                <ShieldCheck size={20} color="#10b981" />
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                {businessProfile.industry} • {businessProfile.city}, {businessProfile.country}
              </div>
              <a href={businessProfile.website} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', color: '#0066ff', textDecoration: 'none', fontWeight: 700, display: 'inline-block', marginTop: '4px' }}>
                {businessProfile.website}
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="button" className="btn-secondary-owner">Edit Profile</button>
            <button type="button" className="btn-primary-owner">Share Profile</button>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* ABOUT SECTION */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>About Business</h3>
            <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>{businessProfile.description}</p>
          </div>

          {/* OWNER SECTION */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>Owner Profile</h3>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <img src={ownerProfile.avatarUrl} alt={ownerProfile.fullName} style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>{ownerProfile.fullName}</h4>
                <div style={{ fontSize: '0.8rem', color: '#0066ff', fontWeight: 700 }}>{ownerProfile.title}</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0 0 0' }}>{ownerProfile.bio}</p>
              </div>
            </div>
          </div>

          {/* PRODUCTS & SERVICES SECTION */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>Products ({products.length})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {products.map((p) => (
                <div key={p.id} style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a' }}>{p.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{p.category} • {p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Overview Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* WHAT WE OFFER */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#0066ff', margin: '0 0 10px 0' }}>WHAT WE OFFER</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {whatCanOffer.map((item) => (
                <span key={item} style={{ fontSize: '0.76rem', fontWeight: 700, background: '#eff6ff', color: '#0066ff', padding: '4px 10px', borderRadius: '8px' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* WHAT WE ARE LOOKING FOR */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#0066ff', margin: '0 0 10px 0' }}>WHAT WE ARE LOOKING FOR</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {whatLookingFor.map((item) => (
                <span key={item} style={{ fontSize: '0.76rem', fontWeight: 700, background: '#f8fafc', border: '1px solid #cbd5e1', color: '#334155', padding: '4px 10px', borderRadius: '8px' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* TARGET MARKETS */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>TARGET MARKETS</h4>
            <div style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600 }}>{targetCountries.join(', ')}</div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
