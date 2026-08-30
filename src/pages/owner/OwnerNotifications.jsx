import React from 'react'
import { Bell, Sparkles, TrendingUp, CreditCard } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerNotifications() {
  const { notifications } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Real-Time Notifications
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          New business matches, lead actions, message alerts, quotation updates, and payment status.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {notifications.map((n) => (
          <div key={n.id} style={{ background: '#ffffff', borderRadius: '16px', padding: '16px 20px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Bell size={20} color="#0066ff" />
            <div style={{ flex: 1 }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{n.title}</h4>
              <p style={{ fontSize: '0.82rem', color: '#334155', margin: '2px 0 0 0' }}>{n.text}</p>
            </div>
            <span style={{ fontSize: '0.74rem', color: '#64748b' }}>{n.time}</span>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
