import React from 'react'
import { ShoppingBag, Search, ShieldCheck, ArrowRight } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerMarketplace() {
  const { marketplaceItems } = useOwner()

  return (
    <OwnerLayout>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          B2B Commercial Marketplace
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Business-to-business product and service marketplace for bulk commercial transactions and RFPs.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {marketplaceItems.map((item) => (
          <div key={item.id} className="opportunity-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {item.category}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 800 }}>
                  <ShieldCheck size={14} style={{ verticalAlign: 'middle' }} /> Verified Supplier
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>{item.title}</h3>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>By {item.supplier}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: '10px 0 4px 0' }}>{item.price}</div>
              <div style={{ fontSize: '0.76rem', color: '#64748b' }}>MOQ: {item.moq}</div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
              <button type="button" className="btn-secondary-owner" style={{ flex: 1, padding: '8px' }}>Save Product</button>
              <button type="button" className="btn-primary-owner" style={{ flex: 1, padding: '8px' }}>Request Quotation</button>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
