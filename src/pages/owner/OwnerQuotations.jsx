import React, { useState } from 'react'
import { Receipt, Plus, Download, Send, Check } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerQuotations() {
  const { quotations, createQuotation } = useOwner()
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [form, setForm] = useState({
    customerName: '', contactPerson: '', itemDesc: 'Biodegradable Courier Mailers (50k units)', qty: 50000, unitPrice: 0.22, tax: 575, shipping: 1200
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.customerName) {
      const itemsTotal = form.qty * form.unitPrice
      const totalAmount = itemsTotal + Number(form.tax) + Number(form.shipping)
      createQuotation({
        customerName: form.customerName,
        contactPerson: form.contactPerson,
        date: 'Today',
        validUntil: '30 Days',
        items: [{ description: form.itemDesc, qty: form.qty, unitPrice: form.unitPrice, total: itemsTotal }],
        subtotal: itemsTotal,
        tax: Number(form.tax),
        shippingFee: Number(form.shipping),
        totalAmount,
      })
      setShowModal(false)
      setToastMessage('B2B Quotation created and ready to send!')
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            B2B Quotation Generator &amp; System
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Generate, edit, send, and download formal commercial price quotations for buyers and leads.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowModal(true)}>
          <Plus size={18} />
          <span>Create Quotation</span>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {quotations.map((q) => (
          <div key={q.id} className="opportunity-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                  {q.quotationNumber}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '6px 0 2px 0' }}>
                  {q.customerName}
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Contact: {q.contactPerson} • Issued: {q.date}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 800, background: '#d1fae5', color: '#065f46', padding: '4px 10px', borderRadius: '999px' }}>
                  {q.status}
                </span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>
                  ${q.totalAmount.toLocaleString()}
                </div>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px', marginBottom: '14px' }}>
              {q.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#334155' }}>
                  <span>{item.description} (Qty: {item.qty})</span>
                  <strong>${item.total.toLocaleString()}</strong>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" className="btn-secondary-owner" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                <Download size={14} />
                <span>Download PDF</span>
              </button>
              <button type="button" className="btn-primary-owner" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
                <Send size={14} />
                <span>Send via Chat</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay-owner" onClick={() => setShowModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Create Commercial Quotation
            </h3>
            <form onSubmit={handleSubmit} className="owner-form-grid">
              <input type="text" placeholder="Customer / Business Name" className="owner-input-field" value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} required />
              <input type="text" placeholder="Contact Person" className="owner-input-field" value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} />
              <input type="text" placeholder="Item Description" className="owner-input-field" value={form.itemDesc} onChange={(e) => setForm({ ...form, itemDesc: e.target.value })} />
              <div className="form-group-row">
                <input type="number" placeholder="Quantity" className="owner-input-field" value={form.qty} onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })} />
                <input type="number" step="0.01" placeholder="Unit Price ($)" className="owner-input-field" value={form.unitPrice} onChange={(e) => setForm({ ...form, unitPrice: Number(e.target.value) })} />
              </div>
              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">Generate Quotation</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
