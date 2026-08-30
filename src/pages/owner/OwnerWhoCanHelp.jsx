import React, { useState } from 'react'
import { HelpCircle, Plus, MessageSquare, ArrowRight, User } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerWhoCanHelp() {
  const { whoCanHelpPosts, createHelpPost } = useOwner()
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const [questionText, setQuestionText] = useState('')
  const [category, setCategory] = useState('Export & Logistics')
  const [location, setLocation] = useState('Dubai, UAE')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (questionText) {
      createHelpPost({ question: questionText, category, location })
      setShowModal(false)
      setToastMessage('Problem posted to HynaBiz community!')
      setToastVisible(true)
      setQuestionText('')
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            "Who Can Help Me?" — Problem Solving Hub
          </h1>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
            Post business challenges or export/legal/HR questions to receive direct responses from verified network experts.
          </p>
        </div>

        <button type="button" className="btn-primary-owner" onClick={() => setShowModal(true)}>
          <Plus size={18} />
          <span>Post Question</span>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {whoCanHelpPosts.map((post) => (
          <div key={post.id} className="opportunity-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <img src={post.avatarUrl} alt={post.author} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{post.author}</h4>
                <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{post.company} • {post.timeAgo}</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '4px 10px', borderRadius: '8px' }}>
                {post.category}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600, margin: '8px 0 14px 0' }}>{post.question}</p>

            {post.replies.length > 0 && (
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0066ff', textTransform: 'uppercase' }}>Expert Responses ({post.replies.length})</span>
                {post.replies.map((r) => (
                  <div key={r.id} style={{ fontSize: '0.82rem', color: '#334155' }}>
                    <strong>{r.name} ({r.company}):</strong> {r.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay-owner" onClick={() => setShowModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>
              Post Business Challenge / Question
            </h3>
            <form onSubmit={handleSubmit} className="owner-form-grid">
              <textarea
                placeholder="e.g. I need someone who can help me export my product to UAE..."
                className="owner-input-field owner-textarea-field"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                required
              />
              <input type="text" placeholder="Category (e.g. Export, Legal, Marketing)" className="owner-input-field" value={category} onChange={(e) => setCategory(e.target.value)} />
              <input type="text" placeholder="Target Location" className="owner-input-field" value={location} onChange={(e) => setLocation(e.target.value)} />
              <div className="onboarding-btn-row">
                <button type="button" className="btn-secondary-owner" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-owner">Post Question</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OwnerLayout>
  )
}
