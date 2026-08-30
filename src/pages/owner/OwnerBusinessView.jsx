import React from 'react'
import { Building, ShieldCheck, MapPin, Globe, Edit2, FileText, CheckCircle2 } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerBusinessView() {
  const { businessProfile, products, services } = useOwner()

  return (
    <OwnerLayout>
      {/* Banner / Cover */}
      <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#ffffff', marginBottom: '24px' }}>
        <img src={businessProfile.coverUrl} alt="Cover" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
        <div style={{ padding: '24px', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '-50px' }}>
            <img src={businessProfile.logoUrl} alt={businessProfile.name} style={{ width: '84px', height: '84px', borderRadius: '20px', objectFit: 'cover', border: '4px solid #ffffff', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
            <div style={{ flex: 1, minWidth: '240px', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                  {businessProfile.name}
                </h1>
                <ShieldCheck size={20} color="#10b981" />
              </div>
              <p style={{ fontSize: '0.86rem', color: '#64748b', margin: '4px 0 0 0' }}>
                {businessProfile.industry} • {businessProfile.category} • {businessProfile.city}, {businessProfile.country}
              </p>
            </div>
            <button type="button" className="btn-secondary-owner" style={{ marginTop: '10px' }}>
              <Edit2 size={15} />
              <span>Edit Business Profile</span>
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* About Section */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 10px 0', color: '#0f172a' }}>Business Description</h3>
            <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>{businessProfile.description}</p>
          </div>

          {/* Registration Details */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 14px 0', color: '#0f172a' }}>Business Registration &amp; Tax Info</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.84rem' }}>
              <div><strong>GST/Tax Number:</strong> {businessProfile.gstNumber}</div>
              <div><strong>Registration No:</strong> {businessProfile.registrationNumber}</div>
              <div><strong>Founded Year:</strong> {businessProfile.foundedYear}</div>
              <div><strong>Team Size:</strong> {businessProfile.businessSize}</div>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#0066ff', margin: '0 0 10px 0' }}>VERIFICATION STATUS</h4>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={18} />
              <span>{businessProfile.verificationStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
