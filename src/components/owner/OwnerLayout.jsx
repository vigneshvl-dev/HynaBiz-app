import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Bell,
  Search,
  Plus,
  X,
  MessageSquare
} from 'lucide-react'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { ownerProfile, businessProfile, notifications } = useOwner()

  const [searchQuery, setSearchQuery] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length



  const handleGlobalSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/owner/ai?query=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="owner-platform-layout">
      {/* Sidebar Navigation */}
      <aside className="owner-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-icon">H</div>
          <div>
            <h1 className="sidebar-brand-title">HynaBiz</h1>
            <span style={{ fontSize: '0.68rem', color: '#00d2ff', fontWeight: 800 }}>OWNER ENTERPRISE</span>
          </div>
        </div>

        <nav className="sidebar-nav-list" style={{ overflowY: 'auto', paddingRight: '4px' }}>
          {/* Navigation items removed */}
        </nav>

        <div className="sidebar-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={ownerProfile.avatarUrl} alt={ownerProfile.fullName} style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff' }}>{ownerProfile.fullName}</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{ownerProfile.title}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main View Area */}
      <div className="owner-main-content">
        {/* Top Header Bar */}
        <header className="owner-top-bar">
          <form onSubmit={handleGlobalSearch} className="top-bar-search">
            <Search size={16} color="#64748b" />
            <input
              type="text"
              placeholder="Tell Hyna AI what your business needs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="top-bar-search-input"
            />
          </form>

          <div className="top-bar-actions">
            <button
              type="button"
              className="btn-primary-owner"
              style={{ padding: '8px 14px', fontSize: '0.8rem' }}
              onClick={() => setShowCreateModal(true)}
            >
              <Plus size={16} />
              <span>+ Create</span>
            </button>

            <button
              type="button"
              className="icon-btn-top"
              onClick={() => navigate('/owner/messages')}
              title="Messages"
            >
              <MessageSquare size={18} />
              <span className="nav-badge-count">5</span>
            </button>

            <button
              type="button"
              className="icon-btn-top"
              onClick={() => navigate('/owner/notifications')}
              title="Notifications"
            >
              <Bell size={18} />
              {unreadCount > 0 && <span className="nav-badge-count">{unreadCount}</span>}
            </button>

            <div
              className="top-profile-badge"
              onClick={() => navigate('/owner/profile')}
              title="View Profile"
            >
              <img
                src={ownerProfile.avatarUrl}
                alt={ownerProfile.fullName}
                className="top-avatar-img"
              />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="dashboard-content-body">{children}</main>

        {/* Mobile Bottom Navigation Bar */}
        <nav className="owner-mobile-nav">
          {/* Mobile nav items removed */}
        </nav>
      </div>


    </div>
  )
}
