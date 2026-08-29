import React, { useState } from 'react'
import { Search, Filter, Sparkles, MapPin, Building, Check, ArrowRight, X } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerDiscover() {
  const { sendConnectionRequest } = useOwner()

  const [filterType, setFilterType] = useState('All')
  const [filterIndustry, setFilterIndustry] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [selectedTargetBiz, setSelectedTargetBiz] = useState(null)
  const [connectReason, setConnectReason] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const mockBusinesses = [
    {
      id: 'biz-1',
      name: 'Dubai Logistics & Distribution Co.',
      logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      industry: 'Logistics & Supply Chain',
      type: 'Distributor',
      location: 'Dubai, UAE',
      description: 'Premier Middle East distribution logistics network with 150,000 sq ft warehousing.',
      offers: ['Warehousing', 'Regional Distribution', 'Customs Clearance'],
      needs: ['Eco-friendly Packaging', 'Biodegradable Mailers'],
      compatibilityScore: 94,
      verification: 'Verified',
    },
    {
      id: 'biz-2',
      name: 'Nordic Packaging Hub',
      logoUrl: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80',
      industry: 'Packaging & Freight',
      type: 'Manufacturer',
      location: 'Stockholm, Sweden',
      description: 'Specialist in Scandinavian certified compostable materials and European freight.',
      offers: ['FSC Kraft Paper', 'Corrugated Boxes'],
      needs: ['International Partners', 'Technology Suppliers'],
      compatibilityScore: 88,
      verification: 'Verified',
    },
    {
      id: 'biz-3',
      name: 'Singapore BioTech Ventures',
      logoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
      industry: 'Finance & Capital',
      type: 'Investor',
      location: 'Singapore',
      description: 'Venture Capital firm deploying Series A growth funding into sustainable manufacturing.',
      offers: ['Series A Capital', 'APAC Market Access'],
      needs: ['High Growth Green Tech', 'Sustainable Packaging'],
      compatibilityScore: 86,
      verification: 'Verified',
    }
  ]

  const handleOpenConnectModal = (biz) => {
    setSelectedTargetBiz(biz)
    setConnectReason(`I'm looking to establish a partnership with ${biz.name} in ${biz.location}.`)
    setShowConnectModal(true)
  }

  const handleSendConnection = () => {
    if (selectedTargetBiz) {
      sendConnectionRequest({
        businessName: selectedTargetBiz.name,
        contactName: 'Executive Team',
        title: 'Business Partner',
        industry: selectedTargetBiz.industry,
        location: selectedTargetBiz.location,
        avatarUrl: selectedTargetBiz.logoUrl,
        logoUrl: selectedTargetBiz.logoUrl,
        compatibilityScore: selectedTargetBiz.compatibilityScore,
        reason: connectReason,
        sharedInterests: selectedTargetBiz.offers,
      })
      setShowConnectModal(false)
      setToastMessage(`Connection request sent to ${selectedTargetBiz.name}!`)
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Discover Businesses & Partners
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Hyna AI calculates multi-attribute compatibility scores to recommend relevant buyers, suppliers, and distributors.
        </p>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '16px',
          border: '1px solid #e2e8f0',
          marginBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
          <Search size={18} color="#64748b" />
          <input
            type="text"
            placeholder="Search by name, offers, needs, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.88rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {['All', 'Distributor', 'Manufacturer', 'Investor', 'Retailer'].map((type) => (
            <button
              key={type}
              type="button"
              className={`select-card ${filterType === type ? 'active' : ''}`}
              style={{ padding: '6px 12px', borderRadius: '10px' }}
              onClick={() => setFilterType(type)}
            >
              <span className="select-card-label" style={{ fontSize: '0.76rem' }}>{type}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Business Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {mockBusinesses.map((biz) => (
          <div key={biz.id} className="opportunity-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="opp-card-header">
                <div className="opp-company-badge">
                  <img src={biz.logoUrl} alt={biz.name} className="opp-logo-img" />
                  <div>
                    <h4 className="opp-company-name">{biz.name}</h4>
                    <p className="opp-company-loc">{biz.type} • {biz.location}</p>
                  </div>
                </div>

                <div className="ai-score-pill">
                  <Sparkles size={14} />
                  <span>{biz.compatibilityScore}%</span>
                </div>
              </div>

              <p style={{ fontSize: '0.84rem', color: '#475569', margin: '10px 0' }}>{biz.description}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '12px 0' }}>
                <div style={{ fontSize: '0.74rem', color: '#0066ff', fontWeight: 700 }}>OFFERS: {biz.offers.join(', ')}</div>
                <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700 }}>NEEDS: {biz.needs.join(', ')}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <button type="button" className="btn-secondary-owner" style={{ flex: 1, padding: '10px' }}>
                View Profile
              </button>
              <button
                type="button"
                className="btn-primary-owner"
                style={{ flex: 1, padding: '10px' }}
                onClick={() => handleOpenConnectModal(biz)}
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Connection Request Modal */}
      {showConnectModal && selectedTargetBiz && (
        <div className="modal-overlay-owner" onClick={() => setShowConnectModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
                Connect with {selectedTargetBiz.name}
              </h3>
              <button type="button" onClick={() => setShowConnectModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <X size={20} color="#64748b" />
              </button>
            </div>

            <div className="ai-score-pill" style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <Sparkles size={14} />
              <span>{selectedTargetBiz.compatibilityScore}% Potential Compatibility</span>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label className="owner-input-label">Why do you want to connect?</label>
              <textarea
                className="owner-input-field owner-textarea-field"
                value={connectReason}
                onChange={(e) => setConnectReason(e.target.value)}
                placeholder="Explain what business opportunities you are proposing..."
              />
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={() => setShowConnectModal(false)}>Cancel</button>
              <button type="button" className="btn-primary-owner" onClick={handleSendConnection}>
                <span>Send Request</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
