import React, { useState } from 'react'
import { Package, Briefcase, Plus, Trash2, Edit2, Globe } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerProductsServices() {
  const { products, services, addProduct, deleteProduct, addService, deleteService } = useOwner()

  const [activeTab, setActiveTab] = useState('Products')
  const [showAddModal, setShowAddModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [prodForm, setProdForm] = useState({
    name: '', category: 'Packaging', description: '', price: '', moq: '', availability: 'In Stock', locations: 'Global', specifications: ''
  })

  const [servForm, setServForm] = useState({
    name: '', category: 'Consulting', description: '', pricing: '', serviceArea: 'Global', availability: 'Immediate', experience: '5+ years', portfolio: ''
  })

  const handleSave = (e) => {
    e.preventDefault()
    if (activeTab === 'Products' && prodForm.name) {
      addProduct(prodForm)
      setToastMessage('Product added to catalog!')
    } else if (activeTab === 'Services' && servForm.name) {
      addService(servForm)
      setToastMessage('Service added to catalog!')
    }
    setShowAddModal(false)
    setToastVisible(true)
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            Products &amp; Services Catalog
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Manage the commercial catalog showcased across the HynaBiz AI network.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          <span>Add {activeTab === 'Products' ? 'Product' : 'Service'}</span>
        </button>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {['Products', 'Services'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`select-card ${activeTab === tab ? 'active' : ''}`}
            style={{ padding: '8px 20px', borderRadius: '12px' }}
            onClick={() => setActiveTab(tab)}
          >
            <span className="select-card-label" style={{ fontSize: '0.88rem' }}>{tab}</span>
          </button>
        ))}
      </div>

      {activeTab === 'Products' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {products.map((p) => (
            <div key={p.id} className="opportunity-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {p.imageUrl && (
                  <img src={p.imageUrl} alt={p.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }} />
                )}
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {p.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 4px 0' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#475569', margin: '0 0 10px 0' }}>{p.description}</p>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>{p.price}</div>
                {p.moq && <div style={{ fontSize: '0.74rem', color: '#64748b' }}>MOQ: {p.moq}</div>}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                <button type="button" onClick={() => deleteProduct(p.id)} style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map((s) => (
            <div key={s.id} className="opportunity-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {s.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 4px 0' }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#475569', margin: '0 0 10px 0' }}>{s.description}</p>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>Pricing: {s.pricing}</div>
                <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Area: {s.serviceArea}</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                <button type="button" onClick={() => deleteService(s.id)} style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD MODAL */}
      {showAddModal && (
        <div className="modal-overlay-owner" onClick={() => setShowAddModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Add New {activeTab === 'Products' ? 'Product' : 'Service'}
            </h3>
            <form onSubmit={handleSave} className="owner-form-grid">
              {activeTab === 'Products' ? (
                <>
                  <input type="text" placeholder="Product Name" className="owner-input-field" value={prodForm.name} onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })} required />
                  <input type="text" placeholder="Category" className="owner-input-field" value={prodForm.category} onChange={(e) => setProdForm({ ...prodForm, category: e.target.value })} />
                  <textarea placeholder="Description" className="owner-input-field owner-textarea-field" value={prodForm.description} onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })} />
                  <input type="text" placeholder="Price (e.g. $0.45 / unit)" className="owner-input-field" value={prodForm.price} onChange={(e) => setProdForm({ ...prodForm, price: e.target.value })} />
                </>
              ) : (
                <>
                  <input type="text" placeholder="Service Name" className="owner-input-field" value={servForm.name} onChange={(e) => setServForm({ ...servForm, name: e.target.value })} required />
                  <input type="text" placeholder="Category" className="owner-input-field" value={servForm.category} onChange={(e) => setServForm({ ...servForm, category: e.target.value })} />
                  <textarea placeholder="Description" className="owner-input-field owner-textarea-field" value={servForm.description} onChange={(e) => setServForm({ ...servForm, description: e.target.value })} />
                  <input type="text" placeholder="Pricing Structure" className="owner-input-field" value={servForm.pricing} onChange={(e) => setServForm({ ...servForm, pricing: e.target.value })} />
                </>
              )}

              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
