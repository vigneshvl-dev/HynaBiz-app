import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, X, Briefcase, UserCheck, TrendingUp, Check, Building2, CheckCircle2, Store, ShoppingBag, Package, Truck, Factory, ChevronRight, ShieldCheck, User, ChevronLeft } from 'lucide-react'
import AuthIllustration from '../components/AuthIllustration'
import Logo from '../components/Logo'
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

const FEATURES_STACK = [
  { label: 'Earn', title: 'Earn', icon: '✨' },
  { label: 'Spend', title: 'Spend', icon: '💳' },
  { label: 'Invest', title: 'Invest', icon: '📈' }
]

export default function Login() {
  const navigate = useNavigate()
  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const [introStage, setIntroStage] = useState('welcome')
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(1)
  const [pageStage, setPageStage] = useState('entering')

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % FEATURES_STACK.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])
  const [authMode, setAuthMode] = useState('signup')
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showFinalCtaPopup, setShowFinalCtaPopup] = useState(false)
  const [showRoleSelectionPopup, setShowRoleSelectionPopup] = useState(false)
  const [roleStep, setRoleStep] = useState(1) // 1 = pick category, 2 = pick sub-role
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
          {introStage === 'welcome' ? (
            <div className="onboarding-welcome-view blue-above-white-theme">
              {/* Blue Top Background Hero Area */}
              <div className="welcome-hero-blue-top">
                <div className="blue-top-gradient-bg" />

                {/* Top Brand Header */}
                <div className="welcome-brand-header-top">
                  <Logo className="welcome-logo-img-white" />
                  <span className="welcome-brand-text-white">
                    Hyna<span className="welcome-brand-accent-cyan">Biz</span>
                  </span>
                </div>

                {/* 4-Point Sparkle Star */}
                <div className="hero-sparkle-star-top">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z" fill="#FFFFFF" />
                  </svg>
                </div>

                {/* Vertical Feature Stack (Matching Image 2: Earn, Spend, Invest) */}
                <div className="vertical-feature-stack">
                  {FEATURES_STACK.map((item, idx) => {
                    const isActive = idx === activeFeatureIndex
                    return (
                      <div
                        key={item.label}
                        className={`feature-stack-row ${isActive ? 'active' : 'muted'}`}
                        onClick={() => setActiveFeatureIndex(idx)}
                      >
                        {isActive ? (
                          <div className="feature-active-pill">
                            <span className="feature-pill-icon">{item.icon}</span>
                            <span className="feature-pill-title">{item.title}</span>
                          </div>
                        ) : (
                          <span className="feature-muted-label">{item.label}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* White Bottom Section */}
              <div className="welcome-content-white-bottom">
                {/* Title Section */}
                <div className="welcome-text-content">
                  <h2 className="welcome-headline">
                    Manage Better. Grow Bigger.
                    <br />
                    <span className="welcome-headline-sub">Anytime, anywhere</span>
                  </h2>
                </div>

                {/* Action Buttons */}
                <div className="welcome-action-buttons">
                  <button
                    type="button"
                    className="btn-get-started"
                    onClick={() => {
                      setAuthMode('signup')
                      setIntroStage('done')
                    }}
                  >
                    Get Started
                  </button>
                  <button
                    type="button"
                    className="btn-already-account"
                    onClick={() => {
                      setAuthMode('login')
                      setIntroStage('done')
                    }}
                  >
                    I already have an account
                  </button>
                </div>

                {/* Terms Footer */}
                <div className="welcome-terms-footer">
                  By continuing you agree to our{' '}
                  <a
                    href="#terms"
                    onClick={(e) => {
                      e.preventDefault()
                      showToast('Terms of Services page')
                    }}
                  >
                    Terms of Services
                  </a>{' '}
                  and{' '}
                  <a
                    href="#privacy"
                    onClick={(e) => {
                      e.preventDefault()
                      showToast('Privacy Policy page')
                    }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="form-back-bar">
                <button
                  type="button"
                  className="form-back-button"
                  onClick={() => setIntroStage('welcome')}
                >
                  <ChevronLeft size={18} /> Back
                </button>
              </div>

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
              {/* ── STEP 1: Choose category ── */}
              {roleStep === 1 && (
                <>
                  <button
                    type="button"
                    className="cta-popup-close-btn"
                    onClick={() => setShowRoleSelectionPopup(false)}
                    aria-label="Close role selection"
                  >
                    <X size={18} />
                  </button>

                  <div className="role-header">
                    <h2 className="role-title">Choose your business role</h2>
                    <p className="role-subtitle">This helps us personalize your experience on HynaBiz.</p>
                  </div>

                  <div className="role-options-grid">
                    {/* 1. BUSINESS */}
                    <div
                      className="role-card"
                      onClick={() => {
                        setSelectedCategory('BUSINESS')
                        setRoleStep(2)
                      }}
                    >
                      <div className="most-common-badge">Most common</div>
                      <div className="role-card-header">
                        <div className="role-icon-box business-icon-bg">
                          <Store size={24} color="#0066ff" />
                        </div>
                        <div className="role-info">
                          <h3 className="role-category-name">1. Business</h3>
                          <p className="role-category-desc">Trade, supply &amp; commercial entities</p>
                        </div>
                        <ChevronRight size={18} color="#94a3b8" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                      </div>
                    </div>

                    {/* 2. PROFESSIONAL */}
                    <div
                      className={`role-card category-professional ${selectedCategory === 'PROFESSIONAL' ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCategory('PROFESSIONAL')
                        setSelectedSubRole('Tech Expert')
                      }}
                    >
                      <div className="role-card-header">
                        <div className="role-icon-box pro-icon-bg">
                          <UserCheck size={24} color="#10b981" />
                        </div>
                        <div className="role-info">
                          <h3 className="role-category-name">2. Professional</h3>
                          <p className="role-category-desc">Consultants, experts &amp; specialists</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                          {selectedCategory === 'PROFESSIONAL' && (
                            <div className="role-check-badge"><Check size={14} color="#ffffff" /></div>
                          )}
                          <ChevronRight size={18} color="#94a3b8" />
                        </div>
                      </div>
                    </div>

                    {/* 3. INVESTOR */}
                    <div
                      className={`role-card category-investor ${selectedCategory === 'INVESTOR' ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCategory('INVESTOR')
                        setSelectedSubRole('Startup')
                      }}
                    >
                      <div className="role-card-header">
                        <div className="role-icon-box investor-icon-bg">
                          <TrendingUp size={24} color="#a855f7" />
                        </div>
                        <div className="role-info">
                          <h3 className="role-category-name">3. Investor</h3>
                          <p className="role-category-desc">Venture capital &amp; financial partners</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                          {selectedCategory === 'INVESTOR' && (
                            <div className="role-check-badge"><Check size={14} color="#ffffff" /></div>
                          )}
                          <ChevronRight size={18} color="#94a3b8" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="primary-auth-button role-submit-btn"
                    onClick={() => {
                      setShowRoleSelectionPopup(false)
                      const roleName = selectedSubRole ? `${selectedCategory} (${selectedSubRole})` : selectedCategory
                      showToast(`Selected ${roleName}! Welcome to HynaBiz.`)
                      if (selectedCategory === 'BUSINESS') {
                        setTimeout(() => navigate('/owner/dashboard'), 400)
                      }
                    }}
                  >
                    <span>Continue to HynaBiz</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="popup-security-footer">
                    <ShieldCheck size={15} color="#0066ff" />
                    <span>100% Secure • Your information is always protected</span>
                  </div>
                </>
              )}

              {/* ── STEP 2: Who are you? (Business sub-roles) ── */}
              {roleStep === 2 && (
                <>
                  <button
                    type="button"
                    className="cta-popup-close-btn"
                    onClick={() => setRoleStep(1)}
                    aria-label="Back"
                  >
                    <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} />
                  </button>

                  <div className="role-header">
                    <h2 className="role-title">Who are you?</h2>
                    <p className="role-subtitle">Select your role inside the Business category.</p>
                  </div>

                  <div className="subroles-grid-5-full">
                    {[
                      { name: 'Owner', icon: User, color: '#0066ff', bg: '#eff6ff' },
                      { name: 'Buyer', icon: ShoppingBag, color: '#10b981', bg: '#d1fae5' },
                      { name: 'Supplier', icon: Package, color: '#f97316', bg: '#fff7ed' },
                      { name: 'Distributor', icon: Truck, color: '#a855f7', bg: '#f3e8ff' },
                      { name: 'Manufacturer', icon: Factory, color: '#ef4444', bg: '#fef2f2' },
                    ].map((sub) => {
                      const SubIcon = sub.icon
                      const isActive = selectedSubRole === sub.name
                      return (
                        <button
                          key={sub.name}
                          type="button"
                          className={`subrole-big-card ${isActive ? 'active' : ''}`}
                          onClick={() => setSelectedSubRole(sub.name)}
                        >
                          <div
                            className="subrole-big-icon"
                            style={{ background: isActive ? sub.color : sub.bg }}
                          >
                            <SubIcon size={28} color={isActive ? '#ffffff' : sub.color} />
                          </div>
                          <span className="subrole-big-text">{sub.name}</span>
                          {isActive && (
                            <div className="subrole-big-check">
                              <Check size={12} color="#ffffff" />
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    className="primary-auth-button role-submit-btn"
                    style={{ marginTop: '20px' }}
                    onClick={() => {
                      setShowRoleSelectionPopup(false)
                      setRoleStep(1)
                      showToast(`Welcome as ${selectedSubRole}! Let's go.`)
                      if (selectedSubRole === 'Owner') {
                        setTimeout(() => navigate('/owner/dashboard'), 400)
                      }
                    }}
                  >
                    <span>Continue as {selectedSubRole}</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="popup-security-footer">
                    <ShieldCheck size={15} color="#0066ff" />
                    <span>100% Secure • Your information is always protected</span>
                  </div>
                </>
              )}
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
