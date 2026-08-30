import React, { useState } from 'react'
import { Share2, Plus, ThumbsUp, MessageSquare, Send } from 'lucide-react'
import OwnerLayout from '../../components/owner/OwnerLayout'
import { useOwner } from '../../context/OwnerContext'
import Toast from '../../components/Toast'

export default function OwnerPosts() {
  const { posts, addPost } = useOwner()
  const [postText, setPostText] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postText.trim()) {
      addPost(postText.trim())
      setPostText('')
      setToastMessage('Business Post published to network feed!')
      setToastVisible(true)
    }
  }

  return (
    <OwnerLayout>
      <Toast message={toastMessage} visible={toastVisible} onDismiss={() => setToastVisible(false)} />

      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Business Posts &amp; Community Network
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
          Publish announcements, product launches, offers, hiring posts, and updates to the HynaBiz business feed.
        </p>
      </div>

      {/* Post Creator Box */}
      <div style={{ background: '#ffffff', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
        <form onSubmit={handleSubmit} className="owner-form-grid">
          <textarea
            placeholder="Share a business update, new product launch, offer, or announcement..."
            className="owner-input-field owner-textarea-field"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn-primary-owner" style={{ padding: '10px 20px' }}>
              <Send size={16} />
              <span>Publish Update</span>
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {posts.map((post) => (
          <div key={post.id} className="opportunity-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <img src={post.avatarUrl} alt={post.author} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{post.author}</h4>
                <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{post.company} • {post.timeAgo}</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 800, color: '#0066ff', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px' }}>
                {post.type}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.5, margin: '8px 0 14px 0' }}>{post.content}</p>

            <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '10px', fontSize: '0.8rem', color: '#64748b' }}>
              <button type="button" style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ThumbsUp size={15} />
                <span>{post.likes} Likes</span>
              </button>
              <button type="button" style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MessageSquare size={15} />
                <span>{post.comments} Comments</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </OwnerLayout>
  )
}
