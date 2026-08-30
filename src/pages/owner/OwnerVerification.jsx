import React from 'react'
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'

export default function OwnerVerification() {
  const verifications = [
    { label: 'Email Address Verification', status: 'Verified', date: 'Aug 15, 2026' },
    { label: 'Mobile Phone Number Verification', status: 'Verified', date: 'Aug 15, 2026' },
    { label: 'GST / Tax Registration Check', status: 'Verified', date: 'Aug 18, 2026' },
    { label: 'Government Business Registration (CIN)', status: 'Verified', date: 'Aug 18, 2026' },
    { label: 'Export / Import Code (IEC) License', status: 'Verified', date: 'Aug 20, 2026' },
  ]

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Verification &amp; Business Trust Center
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Verified businesses display green trust badges and receive 3.4x higher AI match compatibility prioritization.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {verifications.map((v, idx) => (
          <div key={idx} style={{ background: '#ffffff', borderRadius: '16px', padding: '16px 20px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={22} color="#10b981" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{v.label}</h4>
                <div style={{ fontSize: '0.76rem', color: '#64748b' }}>Verified on {v.date}</div>
              </div>
            </div>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#065f46', background: '#d1fae5', padding: '4px 12px', borderRadius: '999px' }}>
              ✓ Verified
            </span>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
