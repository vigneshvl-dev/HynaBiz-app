import React from 'react'
import { Briefcase, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerDeals() {
  const { deals } = useOwner()

  const pipelineStages = ['Lead', 'Contact', 'Discussion', 'Quotation', 'Negotiation', 'Agreement', 'Deal', 'Completed']

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Deal Management &amp; Commercial Pipeline
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Track B2B commercial progression: Lead &rarr; Quotation &rarr; Negotiation &rarr; Agreement &rarr; Payment &rarr; Completed.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '6px', marginBottom: '24px' }}>
        {pipelineStages.map((st, idx) => (
          <div key={st} style={{ background: '#f8fafc', padding: '10px 6px', borderRadius: '10px', textAlign: 'center', fontSize: '0.74rem', fontWeight: 800, color: '#0f172a', border: '1px solid #e2e8f0' }}>
            {idx + 1}. {st}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {deals.map((deal) => (
          <div key={deal.id} className="opportunity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  DEAL PIPELINE
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 2px 0' }}>
                  {deal.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Partner: {deal.partnerName} • Closing: {deal.expectedClosing}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#10b981' }}>{deal.dealValue}</div>
                <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>{deal.paymentStatus}</span>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px', fontSize: '0.82rem', color: '#334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Stage: <strong>{deal.stage}</strong></span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff' }}>Active Commercial Track</span>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
