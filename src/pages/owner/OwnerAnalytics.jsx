import React from 'react'
import { BarChart3, TrendingUp, Sparkles, Eye, Users, Briefcase } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerAnalytics() {
  const { analytics } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Business Analytics &amp; Hyna Insights
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Real-time metrics, demand forecasting, regional market trends, and lead conversion performance.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
        <div style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>Profile Views</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>{analytics.profileViewsMonthly}</div>
          <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700 }}>+18% this month</span>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase' }}>Search Impressions</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>{analytics.searchAppearances}</div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Network wide</span>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>Revenue Generated</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>{analytics.revenueGenerated}</div>
          <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700 }}>14 Deals Converted</span>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '24px', color: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Sparkles size={22} color="#00d2ff" />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#00d2ff' }}>
            Hyna Insight — Regional Business Intelligence
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {analytics.demandInsights.map((ins, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '14px 18px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00d2ff', textTransform: 'uppercase' }}>{ins.region}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>{ins.growth}</div>
            </div>
          ))}
        </div>
      </div>
    </OwnerLayout>
  )
}
