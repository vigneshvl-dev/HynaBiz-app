import React from 'react'
import { Globe, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerExpansion() {
  const { expansionPlans } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Business Expansion &amp; Global Trade Network
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Tell Hyna AI: "I want to expand into Dubai/UAE" to discover buyers, logistics, legal, and regional partners.
        </p>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #0066ff 0%, #00d2ff 100%)', borderRadius: '24px', padding: '24px', color: '#ffffff', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Globe size={24} color="#ffffff" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            Active Expansion Target: Dubai, UAE
          </h2>
        </div>
        <p style={{ fontSize: '0.88rem', opacity: 0.9, margin: '0 0 16px 0' }}>
          Hyna AI has identified 3 verified buyers, 1 logistics hub (Dubai Logistics Co. 94% match), and legal compliance partners for GCC market entry.
        </p>
        <button type="button" className="btn-primary-owner" style={{ background: '#ffffff', color: '#0066ff', border: 'none' }}>
          <span>Launch Expansion Playbook</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {expansionPlans.map((plan) => (
          <div key={plan.id} className="opportunity-card">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              Target Market: {plan.targetMarket}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {plan.recommendedSteps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155', background: '#f8fafc', padding: '10px 14px', borderRadius: '10px' }}>
                  <CheckCircle2 size={16} color="#0066ff" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
