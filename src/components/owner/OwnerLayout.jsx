import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import {
  Home,
  Sparkles,
  Compass,
  Zap,
  Users,
  Package,
  FileText,
  Target,
  MessageSquare,
  Calendar,
  Bell,
  Settings,
  User,
  Search,
  Plus,
  X,
  PlusCircle,
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { ownerProfile, businessProfile } = useOwner()

  const [searchQuery, setSearchQuery] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const sidebarLinks = [
    { label: 'Home', path: '/owner/dashboard', icon: Home },
    { label: 'Hyna AI', path: '/owner/ai', icon: Sparkles },
    { label: 'Discover', path: '/owner/discover', icon: Compass },
    { label: 'Opportunities', path: '/owner/opportunities', icon: Zap },
    { label: 'Network', path: '/owner/network', icon: Users },
    { label: 'Products & Services', path: '/owner/products', icon: Package },
    { label: 'Requirements', path: '/owner/requirements', icon: FileText },
    { label: 'Missions', path: '/owner/missions', icon: Target },
    { label: 'Messages', path: '/owner/messages', icon: MessageSquare },
    { label: 'Meetings', path: '/owner/meetings', icon: Calendar },
  ]

  const mobileNavLinks = [
    { label: 'Home', path: '/owner/dashboard', icon: Home },
    { label: 'Discover', path: '/owner/discover', icon: Compass },
    // Center "+ Create" button handled separately
    { label: 'Messages', path: '/owner/messages', icon: MessageSquare },
    { label: 'Profile', path: '/owner/profile', icon: User },
  ]

  const handleGlobalSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/owner/discover?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="owner-platform-layout">
      {/* Desktop Sidebar */}
      <aside className="owner-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-icon">H</div>
          <div>
            <h1 className="sidebar-brand-title">HynaBiz</h1>
            <span style={{ fontSize: '0.68rem', color: '#00d2ff', fontWeight: 700 }}>OWNER ENTERPRISE</span>
          </div>
        </div>

        <nav className="sidebar-nav-list">
          {sidebarLinks.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/owner/profile" className="sidebar-nav-item">
            <User size={18} />
            <span>Profile</span>
          </NavLink>
          <NavLink to="/owner/dashboard" className="sidebar-nav-item">
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
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
              placeholder="Ask Hyna AI or search suppliers, buyers, products..."
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
              <span>Create</span>
            </button>

            <button
              type="button"
              className="icon-btn-top"
              onClick={() => navigate('/owner/messages')}
              title="Messages"
            >
              <MessageSquare size={18} />
              <span className="nav-badge-count">1</span>
            </button>

            <button
              type="button"
              className="icon-btn-top"
              onClick={() => navigate('/owner/opportunities')}
              title="Notifications"
            >
              <Bell size={18} />
              <span className="nav-badge-count">3</span>
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
          <NavLink
            to="/owner/dashboard"
            className={`mobile-nav-item ${location.pathname === '/owner/dashboard' ? 'active' : ''}`}
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/owner/discover"
            className={`mobile-nav-item ${location.pathname === '/owner/discover' ? 'active' : ''}`}
          >
            <Compass size={20} />
            <span>Discover</span>
          </NavLink>

          <button
            type="button"
            className="mobile-create-btn"
            onClick={() => setShowCreateModal(true)}
            aria-label="Create Action"
          >
            <Plus size={24} />
          </button>

          <NavLink
            to="/owner/messages"
            className={`mobile-nav-item ${location.pathname === '/owner/messages' ? 'active' : ''}`}
          >
            <MessageSquare size={20} />
            <span>Messages</span>
          </NavLink>

          <NavLink
            to="/owner/profile"
            className={`mobile-nav-item ${location.pathname === '/owner/profile' ? 'active' : ''}`}
          >
            <User size={20} />
            <span>Profile</span>
          </NavLink>
        </nav>
      </div>

      {/* Quick Action "+ Create" Modal */}
      {showCreateModal && (
        <div className="modal-overlay-owner" onClick={() => setShowCreateModal(false)}>
          <div
            className="modal-card-owner"
            style={{ maxWidth: '420px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Quick Create
              </h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                className="select-card"
                style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '14px', textAlign: 'left' }}
                onClick={() => {
                  setShowCreateModal(false)
                  navigate('/owner/products')
                }}
              >
                <div className="select-card-icon"><Package size={20} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Add Product</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Showcase new products to buyers</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>

              <div
                className="select-card"
                style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '14px', textAlign: 'left' }}
                onClick={() => {
                  setShowCreateModal(false)
                  navigate('/owner/products')
                }}
              >
                <div className="select-card-icon"><Briefcase size={20} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Add Service</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>List consulting or business services</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>

              <div
                className="select-card"
                style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '14px', textAlign: 'left' }}
                onClick={() => {
                  setShowCreateModal(false)
                  navigate('/owner/requirements')
                }}
              >
                <div className="select-card-icon"><FileText size={20} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Create Requirement</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Post purchase or distributor needs</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>

              <div
                className="select-card"
                style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '14px', textAlign: 'left' }}
                onClick={() => {
                  setShowCreateModal(false)
                  navigate('/owner/missions')
                }}
              >
                <div className="select-card-icon"><Target size={20} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Create Business Mission</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Track long-term expansion goals</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
