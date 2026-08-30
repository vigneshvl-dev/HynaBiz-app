import React from 'react'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerAIMatches() {
  const { aiMatches } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={24} color="#0066ff" />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Hyna AI Business Matching
          </h1>
        </div>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '4px 0 0 0' }}>
          Hyna AI analyzes company compatibility, capacity, product intent, and previous activity to explain exact match reasons.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {aiMatches.map((match) => (
          <div key={match.id} className="opportunity-card">
            <div className="opp-card-header">
              <div className="opp-company-badge">
                <img src={match.logoUrl} alt={match.businessName} className="opp-logo-img" />
                <div>
                  <h4 className="opp-company-name">{match.businessName}</h4>
                  <p className="opp-company-loc">{match.type} • {match.location}</p>
                </div>
              </div>

              <div className="ai-score-pill" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
                <Sparkles size={16} />
                <span>{match.compatibilityScore}% Compatibility Match</span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#334155', margin: '12px 0' }}>{match.summary}</p>

            <div className="opp-match-reasons">
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>Key Match Breakdown Reasons:</span>
              {match.matchReasons.map((reason, idx) => (
                <div key={idx} className="match-reason-item" style={{ fontSize: '0.82rem' }}>
                  <CheckCircle2 size={14} color="#0066ff" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '14px' }}>
              <button type="button" className="btn-secondary-owner">Request Introduction</button>
              <button type="button" className="btn-primary-owner">Connect &amp; Pitch</button>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
