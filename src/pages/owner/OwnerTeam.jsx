import React, { useState } from 'react'
import { UserPlus, Plus, ShieldCheck, Mail } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerTeam() {
  const { teamMembers, inviteTeamMember } = useOwner()
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', role: 'Manager' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email) {
      inviteTeamMember(form)
      setShowModal(false)
      setToastMessage(`Invitation sent to ${form.email}!`)
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            Team Management &amp; Access Controls
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Invite employees, delegate leads/CRM access, and assign operational roles: Owner &rarr; Manager &rarr; Sales.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowModal(true)}>
          <UserPlus size={18} />
          <span>Invite Team Member</span>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {teamMembers.map((tm) => (
          <div key={tm.id} style={{ background: '#ffffff', borderRadius: '16px', padding: '16px 20px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{tm.name}</h4>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{tm.email}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '4px 12px', borderRadius: '8px' }}>
                Role: {tm.role}
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#059669', background: '#d1fae5', padding: '4px 10px', borderRadius: '999px' }}>
                {tm.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay-owner" onClick={() => setShowModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Invite Team Member
            </h3>
            <form onSubmit={handleSubmit} className="owner-form-grid">
              <input type="text" placeholder="Full Name" className="owner-input-field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <input type="email" placeholder="Work Email" className="owner-input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <select className="owner-input-field" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                <option value="Admin">Admin (Full Access)</option>
                <option value="Manager">Manager (Operations &amp; Deals)</option>
                <option value="Sales">Sales (Leads &amp; Messages)</option>
                <option value="Finance">Finance (Invoicing &amp; Quotes)</option>
              </select>
              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">Send Invite</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
