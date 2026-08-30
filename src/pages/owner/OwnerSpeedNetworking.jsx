import React, { useState } from 'react'
import { Zap, Video, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerSpeedNetworking() {
  const { speedSessions } = useOwner()
  const [activeSession, setActiveSession] = useState(speedSessions[0])

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={24} color="#0066ff" />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            5-Minute Business Speed Networking
          </h1>
        </div>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '4px 0 0 0' }}>
          Accelerated 5-minute B2B meetings designed for high-purpose business introductions.
        </p>
      </div>

      {/* Speed Match Container */}
      <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '4px 12px', borderRadius: '999px' }}>
            SESSION FLOW
          </span>
          <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#10b981' }}>
            <Clock size={14} style={{ verticalAlign: 'middle' }} /> 5 Minutes Dedicated Session
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '24px' }}>
          {['1. Intro (1m)', '2. Requirement (1m)', '3. Opportunity (1.5m)', '4. Connect (1.5m)'].map((step, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '10px', borderRadius: '12px', textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', border: '1px solid #cbd5e1' }}>
              {step}
            </div>
          ))}
        </div>

        {activeSession && (
          <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '20px', border: '1px solid #cbd5e1', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src={activeSession.avatarUrl} alt={activeSession.participantName} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {activeSession.participantName}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#0066ff', fontWeight: 700 }}>{activeSession.participantRole} • {activeSession.participantCompany}</div>
                <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>Time Slot: {activeSession.timeSlot}</div>
              </div>
            </div>

            <button type="button" className="btn-primary-owner" style={{ padding: '12px 24px' }}>
              <Video size={18} />
              <span>Join 5-Min Match Call</span>
            </button>
          </div>
        )}
      </div>
    </OwnerLayout>
  )
}
