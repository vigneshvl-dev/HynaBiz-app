import React, { useState } from 'react'
import { Package, Plus, ArrowRight, MapPin, Tag } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerOffers() {
  const { offers, publishOffer } = useOwner()
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [form, setForm] = useState({
    title: '', category: 'Products', description: '', pricing: '', moq: '', capacity: '', availability: 'Immediate', location: 'Global'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.title) {
      publishOffer(form)
      setShowModal(false)
      setToastMessage('Offer published to HynaBiz matching engine!')
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            My Offers — "What Can I Offer?"
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Publish what your business can provide to feed Hyna AI matching engine.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowModal(true)}>
          <Plus size={18} />
          <span>Publish Offer</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {offers.map((off) => (
          <div key={off.id} className="opportunity-card">
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
              {off.category}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '8px 0 4px 0' }}>
              {off.title}
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#475569', margin: '0 0 12px 0' }}>{off.description}</p>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Pricing: {off.pricing}</div>
            <div style={{ fontSize: '0.76rem', color: '#64748b' }}>MOQ: {off.moq} • Capacity: {off.capacity}</div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay-owner" onClick={() => setShowModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Publish New Commercial Offer
            </h3>
            <form onSubmit={handleSubmit} className="owner-form-grid">
              <input type="text" placeholder="Offer Title (e.g. Biodegradable Courier Mailers)" className="owner-input-field" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              <textarea placeholder="Description" className="owner-input-field owner-textarea-field" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
              <div className="form-group-row">
                <input type="text" placeholder="Pricing Range" className="owner-input-field" value={form.pricing} onChange={(e) => setForm({ ...form, pricing: e.target.value })} />
                <input type="text" placeholder="Minimum Order Quantity (MOQ)" className="owner-input-field" value={form.moq} onChange={(e) => setForm({ ...form, moq: e.target.value })} />
              </div>
              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">Publish Offer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
