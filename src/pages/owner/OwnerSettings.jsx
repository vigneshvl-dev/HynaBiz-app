import React from 'react'
import { Settings, Lock, ShieldCheck, Bell, User, Building, CreditCard } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerSettings() {
  const { ownerProfile, businessProfile } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Owner Settings &amp; Preferences
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Manage personal account details, business settings, privacy controls, notifications, and security options.
        </p>
      </div>

      <div className="dashboard-grid-2col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Personal Account Settings */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={18} color="#0066ff" />
              <span>Personal Account</span>
            </h3>
            <div className="owner-form-grid">
              <input type="text" className="owner-input-field" defaultValue={ownerProfile.fullName} placeholder="Full Name" />
              <input type="email" className="owner-input-field" defaultValue={ownerProfile.email} placeholder="Email Address" />
              <input type="text" className="owner-input-field" defaultValue={ownerProfile.phone} placeholder="Phone Number" />
            </div>
          </div>

          {/* Business Settings */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Building size={18} color="#0066ff" />
              <span>Business Profile Settings</span>
            </h3>
            <div className="owner-form-grid">
              <input type="text" className="owner-input-field" defaultValue={businessProfile.name} placeholder="Business Name" />
              <input type="text" className="owner-input-field" defaultValue={businessProfile.gstNumber} placeholder="GST/Tax Number" />
              <input type="text" className="owner-input-field" defaultValue={businessProfile.website} placeholder="Website URL" />
            </div>
          </div>
        </div>

        {/* Security & Privacy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={18} color="#0066ff" />
              <span>Security &amp; 2FA</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button type="button" className="btn-secondary-owner">Change Password</button>
              <button type="button" className="btn-secondary-owner">Enable Two-Factor Authentication (2FA)</button>
            </div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
