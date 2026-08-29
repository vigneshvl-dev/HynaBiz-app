import React, { useState } from 'react'
import { Calendar, Video, Clock, MapPin, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerMeetings() {
  const { meetings } = useOwner()
  const [activeTab, setActiveTab] = useState('Upcoming')

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Meetings &amp; Video Calls
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Schedule and join business meetings with global buyers and partners.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {['Upcoming', 'Past', 'Cancelled'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`select-card ${activeTab === tab ? 'active' : ''}`}
            style={{ padding: '8px 16px', borderRadius: '12px' }}
            onClick={() => setActiveTab(tab)}
          >
            <span className="select-card-label" style={{ fontSize: '0.82rem' }}>{tab}</span>
          </button>
        ))}
      </div>

      {/* Meetings List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {meetings.map((m) => (
          <div key={m.id} className="opportunity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066ff' }}>
                  <Video size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {m.purpose}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                    With {m.personName} ({m.businessName})
                  </div>
                </div>
              </div>

              <span style={{ fontSize: '0.76rem', fontWeight: 800, background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '999px' }}>
                {m.status}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#475569', margin: '14px 0', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} color="#0066ff" />
                <span>{m.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color="#0066ff" />
                <span>{m.time}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" className="btn-secondary-owner" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                Reschedule
              </button>
              <a
                href={m.meetingLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-owner"
                style={{ padding: '8px 16px', fontSize: '0.8rem', textDecoration: 'none' }}
              >
                <span>Join Video Meeting</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
