import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import {
  Home,
  User,
  Building,
  FileText,
  Package,
  Sparkles,
  Compass,
  Users,
  TrendingUp,
  MessageSquare,
  Video,
  HelpCircle,
  Zap,
  Layers,
  ShoppingBag,
  Receipt,
  Briefcase,
  CreditCard,
  Star,
  Bot,
  BarChart3,
  Share2,
  UserPlus,
  Globe,
  ShieldCheck,
  Bell,
  Settings,
  Search,
  Plus,
  X,
  ChevronRight
} from 'lucide-react'
import { useOwner } from '../../context/OwnerContext'

export default function OwnerLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { ownerProfile, businessProfile, notifications } = useOwner()

  const [searchQuery, setSearchQuery] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const navigationGroups = [
    {
      title: 'CORE PLATFORM',
      items: [
        { label: 'Dashboard', path: '/owner/dashboard', icon: Home },
        { label: 'Hyna AI Matches', path: '/owner/matches', icon: Sparkles },
        { label: 'My Requirements', path: '/owner/requirements', icon: FileText },
        { label: 'My Offers', path: '/owner/offers', icon: Package },
        { label: 'Discover Businesses', path: '/owner/discover', icon: Compass },
      ]
    },
    {
      title: 'SALES & PIPELINE',
      items: [
        { label: 'Leads (CRM)', path: '/owner/leads', icon: TrendingUp },
        { label: 'Quotations', path: '/owner/quotations', icon: Receipt },
        { label: 'Deals Pipeline', path: '/owner/deals', icon: Briefcase },
        { label: 'Payments', path: '/owner/payments', icon: CreditCard },
        { label: 'B2B Marketplace', path: '/owner/marketplace', icon: ShoppingBag },
      ]
    },
    {
      title: 'NETWORKING & CHAT',
      items: [
        { label: 'Connections & Intros', path: '/owner/connections', icon: Users },
        { label: 'Who Can Help Me?', path: '/owner/help', icon: HelpCircle },
        { label: '5-Min Speed Match', path: '/owner/speed-networking', icon: Zap },
        { label: 'Messages', path: '/owner/messages', icon: MessageSquare },
        { label: 'Meetings', path: '/owner/meetings', icon: Video },
      ]
    },
    {
      title: 'MANAGEMENT & GROWTH',
      items: [
        { label: 'Products & Services', path: '/owner/products', icon: Layers },
        { label: 'Analytics & Insights', path: '/owner/analytics', icon: BarChart3 },
        { label: 'Business Expansion', path: '/owner/expansion', icon: Globe },
        { label: 'Reputation & Reviews', path: '/owner/reputation', icon: Star },
        { label: 'Team Management', path: '/owner/team', icon: UserPlus },
      ]
    },
    {
      title: 'ACCOUNT & SYSTEM',
      items: [
        { label: 'Personal Profile', path: '/owner/profile', icon: User },
        { label: 'My Business Profile', path: '/owner/business', icon: Building },
        { label: 'Business Posts', path: '/owner/posts', icon: Share2 },
        { label: 'Verification', path: '/owner/verification', icon: ShieldCheck },
        { label: 'Hyna AI Assistant', path: '/owner/ai', icon: Bot },
        { label: 'Notifications', path: '/owner/notifications', icon: Bell },
        { label: 'Subscription & Settings', path: '/owner/settings', icon: Settings },
      ]
    }
  ]

  const mobileNavLinks = [
    { label: 'Home', path: '/owner/dashboard', icon: Home },
    { label: 'Matches', path: '/owner/matches', icon: Sparkles },
    // Center "+ Create" button
    { label: 'Messages', path: '/owner/messages', icon: MessageSquare },
    { label: 'Profile', path: '/owner/profile', icon: User },
  ]

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
          {navigationGroups.map((group, idx) => (
            <div key={idx} style={{ marginBottom: '16px' }}>
              <div
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  color: '#64748b',
                  letterSpacing: '0.06em',
                  padding: '4px 12px 6px 12px',
                }}
              >
                {group.title}
              </div>
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                    style={{ padding: '9px 12px', fontSize: '0.84rem' }}
                  >
                    <Icon size={17} />
                    <span>{item.label}</span>
                  </NavLink>
                )
              })}
            </div>
          ))}
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
          {mobileNavLinks.map((item, idx) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            if (idx === 2) {
              return (
                <React.Fragment key="center-create">
                  <button
                    type="button"
                    className="mobile-create-btn"
                    onClick={() => setShowCreateModal(true)}
                    aria-label="Create Action"
                  >
                    <Plus size={24} />
                  </button>

                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                </React.Fragment>
              )
            }
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>

      {/* Quick Action Modal */}
      {showCreateModal && (
        <div className="modal-overlay-owner" onClick={() => setShowCreateModal(false)}>
          <div className="modal-card-owner" style={{ maxWidth: '440px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Quick Create Action
              </h3>
              <button type="button" onClick={() => setShowCreateModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="select-card" style={{ flexDirection: 'row', padding: '12px 14px', textAlign: 'left' }} onClick={() => { setShowCreateModal(false); navigate('/owner/requirements') }}>
                <div className="select-card-icon"><FileText size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Post Requirement ("What I Need")</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Tell Hyna AI what buyers or suppliers you need</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>

              <div className="select-card" style={{ flexDirection: 'row', padding: '12px 14px', textAlign: 'left' }} onClick={() => { setShowCreateModal(false); navigate('/owner/offers') }}>
                <div className="select-card-icon"><Package size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Publish Offer ("What I Can Offer")</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Publish products, manufacturing or distribution capacity</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>

              <div className="select-card" style={{ flexDirection: 'row', padding: '12px 14px', textAlign: 'left' }} onClick={() => { setShowCreateModal(false); navigate('/owner/quotations') }}>
                <div className="select-card-icon"><Receipt size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Create B2B Quotation</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Generate &amp; send professional PDF quotation</div>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>

              <div className="select-card" style={{ flexDirection: 'row', padding: '12px 14px', textAlign: 'left' }} onClick={() => { setShowCreateModal(false); navigate('/owner/help') }}>
                <div className="select-card-icon"><HelpCircle size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div className="select-card-label">Post Problem ("Who Can Help Me?")</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Ask community for legal, export, HR, or finance advice</div>
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
