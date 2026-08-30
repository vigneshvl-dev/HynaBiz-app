import React from 'react'
import { CreditCard, CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerPayments() {
  const { payments } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          B2B Payments &amp; Invoicing
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Manage online payment requests, wire transfers, transaction records, and invoice associations.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {payments.map((p) => (
          <div key={p.id} className="opportunity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {p.invoiceNumber}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 2px 0' }}>
                  {p.fromCustomer}
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Txn ID: {p.transactionId} • Method: {p.method} • Date: {p.date}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>{p.amount}</div>
                <span style={{ fontSize: '0.76rem', fontWeight: 800, padding: '4px 10px', borderRadius: '999px', background: p.status === 'Completed' ? '#d1fae5' : '#fef3c7', color: p.status === 'Completed' ? '#065f46' : '#92400e' }}>
                  {p.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
