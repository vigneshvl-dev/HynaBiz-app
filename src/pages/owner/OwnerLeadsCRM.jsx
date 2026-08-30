import React, { useState } from 'react'
import { TrendingUp, Plus, ArrowRight, DollarSign, Calendar, ChevronRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerLeadsCRM() {
  const { leadsCRM, updateLeadStage, addLead } = useOwner()
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const stages = ['New', 'Contacted', 'Discussion', 'Negotiation', 'Converted', 'Lost']

  const [form, setForm] = useState({
    companyName: '', contactPerson: '', requirement: '', estimatedValue: '$25,000', source: 'Hyna Match', notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.companyName) {
      addLead(form)
      setShowModal(false)
      setToastMessage('Lead added to CRM Pipeline!')
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            Business Leads CRM Pipeline
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Track leads through stages: New &rarr; Contacted &rarr; Discussion &rarr; Negotiation &rarr; Converted.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowModal(true)}>
          <Plus size={18} />
          <span>Add Lead</span>
        </button>
      </div>

      {/* Kanban Pipeline Board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', overflowX: 'auto' }}>
        {stages.map((stage) => {
          const stageLeads = leadsCRM.filter((l) => l.stage === stage)
          return (
            <div key={stage} style={{ background: '#f8fafc', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>{stage}</span>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, background: '#e2e8f0', color: '#475569', padding: '2px 8px', borderRadius: '999px' }}>
                  {stageLeads.length}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {stageLeads.map((lead) => (
                  <div key={lead.id} style={{ background: '#ffffff', borderRadius: '14px', padding: '12px 14px', border: '1px solid #cbd5e1', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a' }}>{lead.companyName}</div>
                    <div style={{ fontSize: '0.76rem', color: '#0066ff', fontWeight: 700 }}>Contact: {lead.contactPerson}</div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', margin: '4px 0' }}>{lead.requirement}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', margin: '4px 0' }}>Value: {lead.estimatedValue}</div>
                    
                    {/* Stage Selector */}
                    <select
                      className="owner-input-field"
                      style={{ padding: '4px 8px', fontSize: '0.74rem', marginTop: '8px' }}
                      value={lead.stage}
                      onChange={(e) => updateLeadStage(lead.id, e.target.value)}
                    >
                      {stages.map((st) => (
                        <option key={st} value={st}>Move to: {st}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {showModal && (
        <div className="modal-overlay-owner" onClick={() => setShowModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Add New Business Lead
            </h3>
            <form onSubmit={handleSubmit} className="owner-form-grid">
              <input type="text" placeholder="Company Name" className="owner-input-field" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} required />
              <input type="text" placeholder="Contact Person" className="owner-input-field" value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} />
              <input type="text" placeholder="Requirement / Opportunity" className="owner-input-field" value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} />
              <input type="text" placeholder="Estimated Value (e.g. $50,000)" className="owner-input-field" value={form.estimatedValue} onChange={(e) => setForm({ ...form, estimatedValue: e.target.value })} />
              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">Save Lead</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
