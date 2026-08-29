import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, X, Briefcase, UserCheck, TrendingUp, Check, Building2, CheckCircle2 } from 'lucide-react'
import AuthIllustration from '../components/AuthIllustration'
import SocialLogin from '../components/SocialLogin'
import Divider from '../components/Divider'
import PrimaryButton from '../components/PrimaryButton'
import Toast from '../components/Toast'
import PageTransition from '../components/PageTransition'

const SUBROLE_GOALS = {
  Owner: [
    'Create business profile',
    'Showcase products/services',
    'Find buyers',
    'Find suppliers',
    'Find partners',
    'Create business goals',
    'Discover opportunities'
  ],
  Buyer: [
    'Post requirements',
    'Find suppliers/manufacturers',
    'Compare businesses',
    'Request connections',
    'Create purchase opportunities'
  ],
  Supplier: [
    'Showcase products',
    'Find buyers',
    'Respond to requirements',
    'Receive AI matches',
    'Build business relationships'
  ],
  Distributor: [
    'Find manufacturers',
    'Find products',
    'Find market opportunities',
    'Connect with suppliers'
  ],
  Manufacturer: [
    'Find buyers',
    'Find distributors',
    'Find suppliers',
    'Expand to new markets'
  ],
  'Tech Expert': [
    'Offer specialized tech services',
    'Connect with businesses & clients',
    'Explore consulting opportunities'
  ],
  'Legal Expert': [
    'Provide legal compliance & advice',
    'Connect with enterprise clients',
    'Contract review & structuring'
  ],
  'Finance Expert': [
    'Financial planning & advisory',
    'Connect with growing businesses',
    'Capital structure consulting'
  ],
  'Business Consultant': [
    'Strategic business consulting',
    'Process optimization & growth',
    'Connect with founders & leadership'
  ],
  GTM: [
    'Go-to-market strategy',
    'Launch & expansion consulting',
    'Market entry planning'
  ],
  'Marketing Developer': [
    'Digital marketing & development',
    'Growth marketing & campaigns',
    'Client lead acquisition'
  ],
  'Design Agency': [
    'Brand identity & UI/UX design',
    'Creative strategy & assets',
    'Design partnerships'
  ],
  Startup: [
    'Discover high-growth startups',
    'Evaluate early pitch decks',
    'Connect with ambitious founders'
  ],
  SME: [
    'Invest in established SMEs',
    'Explore revenue-generating businesses',
    'Strategic SME partnerships'
  ],
  'Early Stage': [
    'Early-stage deal flow',
    'Pre-seed & seed opportunities',
    'Founding team mentorship'
  ],
  Seed: [
    'Seed stage venture funding',
    'Lead or co-invest in syndicates',
    'Scale portfolio startups'
  ],
  'Series A/B': [
    'Series A/B growth capital',
    'Institutional venture deals',
    'Board participation & scaling'
  ],
  Growth: [
    'Growth-stage equity capital',
    'Pre-IPO & expansion funding',
    'Strategic market acceleration'
  ],
  'Strategic Investor': [
    'Corporate strategic alignment',
    'M&A & joint venture partnerships',
    'Synergistic business expansion'
  ]
}

export default function Login() {
  const navigate = useNavigate()
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const [introStage, setIntroStage] = useState('active')
  const [pageStage, setPageStage] = useState('entering')
  const [authMode, setAuthMode] = useState('signup')
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showFinalCtaPopup, setShowFinalCtaPopup] = useState(false)
  const [showRoleSelectionPopup, setShowRoleSelectionPopup] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('BUSINESS')
  const [selectedSubRole, setSelectedSubRole] = useState('Owner')

  const showToast = (message) => {
    setToastMessage(message)
    setToastVisible(true)
  }

  // Animate exit then navigate to target
  const transitionTo = (path) => {
    setPageStage('leaving')
    setTimeout(() => navigate(path), 380)
  }

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIntroStage('leaving')
    }, 2800)
    const doneTimer = setTimeout(() => {
      setIntroStage('done')
    }, 3550)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false)
      }, 3200)
      return () => clearTimeout(timer)
    }
  }, [toastVisible])

  const handleMainSubmit = (e) => {
    if (e) e.preventDefault()
    if (!emailOrPhone.trim()) {
      showToast('Please enter your email or phone number.')
      return
    }
    if (!password) {
      showToast(authMode === 'login' ? 'Please enter your password.' : 'Please create a password.')
      return
    }

    if (authMode === 'signup') {
      if (!confirmPassword) {
        showToast('Please confirm your password.')
        return
      }
      if (password !== confirmPassword) {
        showToast('Passwords do not match!')
        return
      }
      // Show Final CTA completion popup after Sign Up
      setShowFinalCtaPopup(true)
      showToast('Account registered successfully!')
    } else {
      // Show Final CTA completion popup after Login / Sign In
      setShowFinalCtaPopup(true)
      showToast('Logged in successfully!')
    }
  }

  const handleSocialLogin = (message) => {
    showToast(message || 'Social login successful!')
  }

  return (
    <PageTransition stage={pageStage}>
      <div className="login-canvas-wrapper">
        <div className="canvas-ambient-glow glow-top" />
        <div className="canvas-ambient-glow glow-bottom" />
        <div className="auth-phone-card">
        <div className="mobile-status-bar auth-status-bar">
          <span className="status-time">9:41</span>
          <div className="dynamic-island">
            <span className="island-camera" />
          </div>
          <div className="status-icons">
            <svg className="icon-cellular" viewBox="0 0 18 12" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" />
              <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
              <rect x="15" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg className="icon-wifi" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.05 3.55a8.42 8.42 0 0111.9 0l-1.06 1.06a6.92 6.92 0 00-9.78 0L2.05 3.55zM4.17 5.67a5.42 5.42 0 017.66 0l-1.06 1.06a3.92 3.92 0 00-5.54 0L4.17 5.67z" />
            </svg>
            <div className="battery-icon">
              <div className="battery-fill" />
            </div>
          </div>
        </div>

        <div className="auth-viewport">
          {introStage !== 'done' ? (
            <div className={`login-intro-container stage-${introStage}`}>
              <div className="intro-illustration-box">
                <div className="orbital-ring ring-1" />
                <div className="orbital-ring ring-2" />

                <div className="central-avatar pulse-avatar">
                  <svg viewBox="0 0 100 100" className="intro-avatar-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="intro-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066ff" />
                        <stop offset="100%" stopColor="#00d2ff" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#intro-bg)" />
                    <path d="M 26 88 C 26 74, 34 64, 50 64 C 66 64, 74 74, 74 88 Z" fill="#ffffff" />
                    <circle cx="50" cy="38" r="16" fill="#ffffff" />
                    <path d="M 47 54 L 53 54 L 55 64 L 50 69 L 45 64 Z" fill="#0066ff" />
                  </svg>
                </div>

                <div className="orbiting-node node-left">
                  <svg viewBox="0 0 100 100" width="40" height="40">
                    <circle cx="50" cy="50" r="48" fill="#dbeafe" />
                    <path d="M 25 85 C 25 72, 33 62, 50 62 C 67 62, 75 72, 75 85 Z" fill="#3b82f6" />
                    <circle cx="50" cy="38" r="16" fill="#fcd34d" />
                  </svg>
                </div>

                <div className="orbiting-node node-right">
                  <svg viewBox="0 0 100 100" width="40" height="40">
                    <circle cx="50" cy="50" r="48" fill="#ffedd5" />
                    <path d="M 25 85 C 25 72, 33 62, 50 62 C 67 62, 75 72, 75 85 Z" fill="#fdba74" />
                    <circle cx="50" cy="38" r="16" fill="#374151" />
                  </svg>
                </div>
              </div>

              <h2 className="intro-headline">
                Connect Buyers, Distributors &amp; Businesses
              </h2>
            </div>
          ) : (
            <>
              <div className="auth-top-illustration-section">
                <AuthIllustration />
              </div>

              <div className="auth-bottom-sheet">
                <div className="auth-header-group">
                  <h1 className="auth-title">
                    Welcome to <span className="auth-title-gradient"><span className="brand-hyna-inline">HYNA</span><span className="brand-biz-inline">BIZ</span></span>
                  </h1>
                  <p className="auth-subtitle">
                    {authMode === 'login' ? 'Login to continue your journey' : 'Sign up to access your business'}
                  </p>
                </div>

                <div className="auth-mode-toggle-container">
                  <div className="auth-mode-toggle" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={authMode === 'signup'}
                      className={`mode-toggle-btn ${authMode === 'signup' ? 'active' : ''}`}
                      onClick={() => setAuthMode('signup')}
                    >
                      Sign Up
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={authMode === 'login'}
                      className={`mode-toggle-btn ${authMode === 'login' ? 'active' : ''}`}
                      onClick={() => setAuthMode('login')}
                    >
                      Login
                    </button>
                    <div className={`mode-toggle-pill ${authMode}`} />
                  </div>
                </div>

                <SocialLogin onSocialClick={handleSocialLogin} />
                <Divider text="Or" />

                <form onSubmit={handleMainSubmit} className="auth-input-form">
                  <div className="input-field-wrapper">
                    <span className="input-icon">
                      <Mail size={18} />
                    </span>
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="auth-input"
                    />
                  </div>

                  <div className="input-field-wrapper">
                    <span className="input-icon">
                      <Lock size={18} />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={authMode === 'login' ? 'Password' : 'Create Password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="auth-input"
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {authMode === 'signup' && (
                    <div className="input-field-wrapper">
                      <span className="input-icon">
                        <Lock size={18} />
                      </span>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="auth-input"
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        tabIndex="-1"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  )}

                  <div className="auth-actions-group">
                    <PrimaryButton type="submit" onClick={handleMainSubmit}>
                      {authMode === 'login' ? 'Login' : 'Sign Up'}
                    </PrimaryButton>
                  </div>
                </form>

                <div className="auth-switch-footer">
                  <span className="switch-text">
                    {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                  </span>
                  <button
                    type="button"
                    className="switch-link-btn"
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  >
                    {authMode === 'login' ? 'Sign Up' : 'Login'}
                  </button>
                </div>
              </div>
            </>
          )}

          <Toast
            message={toastMessage}
            visible={toastVisible}
            onDismiss={() => setToastVisible(false)}
          />
        </div>

        {showFinalCtaPopup && (
          <div className="cta-popup-overlay">
            <div className="cta-popup-card">
              <button
                type="button"
                className="cta-popup-close-btn"
                onClick={() => {
                  setShowFinalCtaPopup(false)
                  setShowRoleSelectionPopup(true)
                }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="cta-popup-badge">
                <Sparkles size={26} color="#0066ff" />
              </div>
              <h2 className="cta-popup-title">Turn Your Goal Into a Mission.</h2>
              <div className="cta-popup-quote">
                <p className="quote-heading">Tell HynaBiz.</p>
                <p className="quote-text">Connect. Discover. Grow.</p>
              </div>

              <button
                type="button"
                className="primary-auth-button cta-popup-btn"
                onClick={() => {
                  setShowFinalCtaPopup(false)
                  setShowRoleSelectionPopup(true)
                }}
              >
                <span>Get Started with HynaBiz</span>
                <ArrowRight size={18} />
              </button>

              <p className="cta-popup-tagline">
                Global • Intelligent • Connected
              </p>
            </div>
          </div>
        )}

        {showRoleSelectionPopup && (
          <div className="cta-popup-overlay">
            <div className="cta-popup-card role-selection-card">
              <button
                type="button"
                className="cta-popup-close-btn"
                onClick={() => setShowRoleSelectionPopup(false)}
                aria-label="Close role selection"
              >
                <X size={18} />
              </button>

              <div className="role-header">
                <h2 className="role-title">Select Your Business Role</h2>
                <p className="role-subtitle">Tell us how you operate on HynaBiz</p>
              </div>

              <div className="role-options-grid">
                {/* 1. BUSINESS Category */}
                <div
                  className={`role-card ${selectedCategory === 'BUSINESS' ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory('BUSINESS')}
                >
                  <div className="role-card-header">
                    <div className="role-icon-box">
                      <Building2 size={22} color="#0066ff" />
                    </div>
                    <div className="role-info">
                      <h3 className="role-category-name">1. BUSINESS</h3>
                      <p className="role-category-desc">Trade, supply &amp; commercial entities</p>
                    </div>
                    {selectedCategory === 'BUSINESS' && (
                      <div className="role-check-badge">
                        <Check size={14} color="#ffffff" />
                      </div>
                    )}
                  </div>

                  {selectedCategory === 'BUSINESS' && (
                    <div className="subroles-container">
                      <span className="subroles-label">Select Sub-Role:</span>
                      <div className="subroles-pills">
                        {['Owner', 'Buyer', 'Supplier', 'Distributor', 'Manufacturer'].map((sub) => (
                          <button
                            key={sub}
                            type="button"
                            className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedCategory('BUSINESS')
                              setSelectedSubRole(sub)
                            }}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. PROFESSIONAL Category */}
                <div
                  className={`role-card ${selectedCategory === 'PROFESSIONAL' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedCategory('PROFESSIONAL')
                    if (!['Tech Expert', 'Legal Expert', 'Finance Expert', 'Business Consultant', 'GTM', 'Marketing Developer', 'Design Agency'].includes(selectedSubRole)) {
                      setSelectedSubRole('Tech Expert')
                    }
                  }}
                >
                  <div className="role-card-header">
                    <div className="role-icon-box">
                      <UserCheck size={22} color="#0066ff" />
                    </div>
                    <div className="role-info">
                      <h3 className="role-category-name">2. PROFESSIONAL</h3>
                      <p className="role-category-desc">Consultants, experts &amp; specialists</p>
                    </div>
                    {selectedCategory === 'PROFESSIONAL' && (
                      <div className="role-check-badge">
                        <Check size={14} color="#ffffff" />
                      </div>
                    )}
                  </div>

                  {selectedCategory === 'PROFESSIONAL' && (
                    <div className="subroles-container">
                      <div className="subrole-group">
                        <span className="subroles-label">1. EXPERT:</span>
                        <div className="subroles-pills">
                          {['Tech Expert', 'Legal Expert', 'Finance Expert'].map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCategory('PROFESSIONAL')
                                setSelectedSubRole(sub)
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="subrole-group" style={{ marginTop: '8px' }}>
                        <span className="subroles-label">2. CONSULTANT:</span>
                        <div className="subroles-pills">
                          {['Business Consultant', 'GTM'].map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCategory('PROFESSIONAL')
                                setSelectedSubRole(sub)
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="subrole-group" style={{ marginTop: '8px' }}>
                        <span className="subroles-label">3. SERVICE PROVIDER:</span>
                        <div className="subroles-pills">
                          {['Marketing Developer', 'Design Agency'].map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCategory('PROFESSIONAL')
                                setSelectedSubRole(sub)
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. INVESTOR Category */}
                <div
                  className={`role-card ${selectedCategory === 'INVESTOR' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedCategory('INVESTOR')
                    if (!['Startup', 'SME', 'Early Stage', 'Seed', 'Series A/B', 'Growth', 'Strategic Investor'].includes(selectedSubRole)) {
                      setSelectedSubRole('Startup')
                    }
                  }}
                >
                  <div className="role-card-header">
                    <div className="role-icon-box">
                      <TrendingUp size={22} color="#0066ff" />
                    </div>
                    <div className="role-info">
                      <h3 className="role-category-name">3. INVESTOR</h3>
                      <p className="role-category-desc">Venture capital &amp; financial partners</p>
                    </div>
                    {selectedCategory === 'INVESTOR' && (
                      <div className="role-check-badge">
                        <Check size={14} color="#ffffff" />
                      </div>
                    )}
                  </div>

                  {selectedCategory === 'INVESTOR' && (
                    <div className="subroles-container">
                      <div className="subrole-group">
                        <span className="subroles-label">1. ANGEL INVESTOR:</span>
                        <div className="subroles-pills">
                          {['Startup', 'SME', 'Early Stage'].map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCategory('INVESTOR')
                                setSelectedSubRole(sub)
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="subrole-group" style={{ marginTop: '8px' }}>
                        <span className="subroles-label">2. VC INVESTOR:</span>
                        <div className="subroles-pills">
                          {['Seed', 'Series A/B'].map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCategory('INVESTOR')
                                setSelectedSubRole(sub)
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="subrole-group" style={{ marginTop: '8px' }}>
                        <span className="subroles-label">3. CORPORATE INVESTOR:</span>
                        <div className="subroles-pills">
                          {['Growth', 'Strategic Investor'].map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subrole-pill ${selectedSubRole === sub ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCategory('INVESTOR')
                                setSelectedSubRole(sub)
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="button"
                className="primary-auth-button role-submit-btn"
                onClick={() => {
                  setShowRoleSelectionPopup(false)
                  setPassword('')
                  setConfirmPassword('')
                  const roleName = selectedSubRole ? `${selectedCategory} (${selectedSubRole})` : selectedCategory
                  showToast(`Selected ${roleName}! Welcome to HynaBiz.`)
                  if (selectedCategory === 'BUSINESS' && (selectedSubRole === 'Owner' || !selectedSubRole)) {
                    setTimeout(() => {
                      navigate('/owner/onboarding')
                    }, 400)
                  }
                }}
              >
                <span>Continue to HynaBiz</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        <div className="mobile-home-indicator">
          <div className="home-bar" />
        </div>
      </div>
    </div>
    </PageTransition>
  )
}
