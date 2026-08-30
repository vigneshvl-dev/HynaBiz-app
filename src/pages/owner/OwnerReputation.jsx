import React from 'react'
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerReputation() {
  const { reputation, businessProfile } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Business Reputation &amp; Trust Score
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Transparent B2B trust indicators based on verified platform activity, completed deals, and reviews.
        </p>
      </div>

      <div className="dashboard-welcome-banner" style={{ background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '4px 10px', borderRadius: '6px' }}>
              COMMERCIAL REPUTATION
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 2px 0' }}>
              {businessProfile.name}
            </h2>
            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
              {reputation.completedDeals} Completed Deals • Response Rate: {reputation.responseRate}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fef3c7', padding: '12px 20px', borderRadius: '16px' }}>
            <Star size={28} color="#d97706" fill="#d97706" />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#92400e' }}>
                {reputation.rating} / 5.0
              </div>
              <div style={{ fontSize: '0.72rem', color: '#b45309', fontWeight: 700 }}>Based on {reputation.totalReviews} verified reviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Verified Customer Feedback</h3>
          {reputation.reviews.map((rev) => (
            <div key={rev.id} className="opportunity-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>{rev.reviewerName}</h4>
                  <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{rev.company} • {rev.date}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.86rem', fontWeight: 800, color: '#d97706' }}>
                  <Star size={16} fill="#d97706" />
                  <span>{rev.rating}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#334155', margin: 0 }}>"{rev.comment}"</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>Trust &amp; Verification Badges</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {reputation.verificationBadges.map((badge, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#059669', fontWeight: 700, background: '#d1fae5', padding: '8px 12px', borderRadius: '10px' }}>
                  <ShieldCheck size={16} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
