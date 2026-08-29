import React, { useState } from 'react'
import { FileText, Plus, ArrowRight, Clock, MapPin, Tag } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerRequirements() {
  const { requirements, publishRequirement } = useOwner()
  const [showPublishModal, setShowPublishModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [reqForm, setReqForm] = useState({
    title: '',
    description: '',
    type: 'Distributor',
    industry: 'Packaging & Manufacturing',
    location: 'Dubai, UAE',
    budget: '$50,000 - $150,000',
    timeline: '1–3 Months',
    intentLevel: 'High',
  })

  const reqTypeOptions = ['Buyer', 'Supplier', 'Distributor', 'Manufacturer', 'Investor', 'Partner', 'Professional', 'Service', 'Other']
  const timelineOptions = ['Immediate', 'Within 30 Days', '1–3 Months', '3–6 Months', 'Exploring']

  const handlePublish = (e) => {
    e.preventDefault()
    if (reqForm.title && reqForm.description) {
      publishRequirement(reqForm)
      setShowPublishModal(false)
      setToastMessage('Requirement published to HynaBiz AI matching engine!')
      setToastVisible(true)
      setReqForm({
        title: '',
        description: '',
        type: 'Distributor',
        industry: 'Packaging & Manufacturing',
        location: 'Dubai, UAE',
        budget: '$50,000 - $150,000',
        timeline: '1–3 Months',
        intentLevel: 'High',
      })
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            Business Requirements
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Post specific purchasing, supply, or distribution needs for Hyna AI to match with verified providers.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowPublishModal(true)}>
          <Plus size={18} />
          <span>Publish Requirement</span>
        </button>
      </div>

      {/* Requirements List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {requirements.map((req) => (
          <div key={req.id} className="opportunity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#eff6ff', color: '#0066ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {req.type} REQUIREMENT
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 2px 0' }}>
                  {req.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  {req.industry} • <MapPin size={12} style={{ verticalAlign: 'middle' }} /> {req.location}
                </div>
              </div>

              <span style={{ fontSize: '0.74rem', color: '#10b981', fontWeight: 800, background: '#d1fae5', padding: '4px 10px', borderRadius: '999px' }}>
                Intent: {req.intentLevel}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#334155', marginBottom: '14px' }}>{req.description}</p>

            <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
              <div><strong>Budget:</strong> {req.budget}</div>
              <div><strong>Timeline:</strong> {req.timeline}</div>
              <div><strong>Published:</strong> {req.publishedDate}</div>
            </div>
          </div>
        ))}
      </div>

      {/* PUBLISH REQUIREMENT MODAL */}
      {showPublishModal && (
        <div className="modal-overlay-owner" onClick={() => setShowPublishModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Publish Business Requirement
            </h3>
            <form onSubmit={handlePublish} className="owner-form-grid">
              <div>
                <label className="owner-input-label">Requirement Title</label>
                <input
                  type="text"
                  className="owner-input-field"
                  value={reqForm.title}
                  onChange={(e) => setReqForm({ ...reqForm, title: e.target.value })}
                  placeholder="e.g. Looking for Exclusive UAE Packaging Distributor"
                  required
                />
              </div>

              <div>
                <label className="owner-input-label">Detailed Description</label>
                <textarea
                  className="owner-input-field owner-textarea-field"
                  value={reqForm.description}
                  onChange={(e) => setReqForm({ ...reqForm, description: e.target.value })}
                  placeholder="Describe your exact requirement, specifications, and volume..."
                  required
                />
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Requirement Type</label>
                  <select
                    className="owner-input-field"
                    value={reqForm.type}
                    onChange={(e) => setReqForm({ ...reqForm, type: e.target.value })}
                  >
                    {reqTypeOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="owner-input-label">Timeline</label>
                  <select
                    className="owner-input-field"
                    value={reqForm.timeline}
                    onChange={(e) => setReqForm({ ...reqForm, timeline: e.target.value })}
                  >
                    {timelineOptions.map((tl) => (
                      <option key={tl} value={tl}>{tl}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Location / Market</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={reqForm.location}
                    onChange={(e) => setReqForm({ ...reqForm, location: e.target.value })}
                    placeholder="e.g. Dubai, UAE"
                  />
                </div>

                <div>
                  <label className="owner-input-label">Target Budget</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={reqForm.budget}
                    onChange={(e) => setReqForm({ ...reqForm, budget: e.target.value })}
                    placeholder="e.g. $50,000 - $150,000"
                  />
                </div>
              </div>

              <div className="onboarding-btn-row" style={{ marginTop: '12px' }}>
                <button type="button" className="btn-secondary-owner" onClick={() => setShowPublishModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">
                  <span>Publish Requirement</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
