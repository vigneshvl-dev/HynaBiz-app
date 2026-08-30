import React from 'react'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerSubscription() {
  const { subscription } = useOwner()

  const plans = [
    { title: 'Free', price: '$0 / month', features: ['Basic Business Profile', 'Limited Discovery', '5 AI Matches / month'] },
    { title: 'Professional', price: '$49 / month', features: ['Advanced Matching Engine', 'Unlimited Discovery', 'Basic Lead CRM', '10 Quotations / month'] },
    { title: 'Business (Current)', price: '$199 / month', isCurrent: true, features: ['Unlimited AI Matches', 'Full B2B Lead CRM', 'Quotations & Invoicing', '5-Min Speed Matches', '5 Team Accounts', 'Expansion Analytics'] },
    { title: 'Enterprise', price: 'Custom', features: ['Unlimited Team Members', 'Dedicated Account Manager', 'Custom API Integrations', 'Multi-Country Enterprise Support'] },
  ]

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Subscription &amp; Business Plan Management
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Manage your HynaBiz enterprise membership tier and billing history.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {plans.map((p, idx) => (
          <div key={idx} style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', border: p.isCurrent ? '2px solid #0066ff' : '1px solid #e2e8f0', boxShadow: p.isCurrent ? '0 10px 30px rgba(0,102,255,0.12)' : 'none', position: 'relative' }}>
            {p.isCurrent && (
              <span style={{ position: 'absolute', top: '-12px', right: '16px', fontSize: '0.7rem', fontWeight: 800, color: '#ffffff', background: '#0066ff', padding: '3px 10px', borderRadius: '999px' }}>
                CURRENT PLAN
              </span>
            )}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>{p.title}</h3>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#0066ff', marginBottom: '16px' }}>{p.price}</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {p.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#334155' }}>
                  <CheckCircle2 size={15} color="#0066ff" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button type="button" className={p.isCurrent ? 'btn-secondary-owner' : 'btn-primary-owner'} style={{ width: '100%' }}>
              {p.isCurrent ? 'Manage Billing' : 'Upgrade Plan'}
            </button>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
