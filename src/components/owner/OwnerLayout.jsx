import React from 'react'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerLayout({ children }) {
  const { ownerProfile } = useOwner()

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
        {/* Content Body */}
        <main className="dashboard-content-body">{children}</main>
      </div>
    </div>
  )
}
