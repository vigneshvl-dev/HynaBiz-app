import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  Trash2,
  Edit2,
  Sparkles,
  ShieldCheck,
  Building,
  User,
  Package,
  Briefcase,
  Target,
  Globe,
  MessageSquare,
  X,
  Upload,
  Camera
} from 'lucide-react'
import { useOwner } from '../../context/OwnerContext'
import { COUNTRY_OPTIONS, INDUSTRY_OPTIONS } from '../../data/mockOwnerData'
import Toast from '../../components/Toast'

export default function OwnerOnboarding() {
  const navigate = useNavigate()
  const {
    onboardingStep,
    setOnboardingStep,
    setOnboardingCompleted,
    ownerProfile,
    setOwnerProfile,
    businessProfile,
    setBusinessProfile,
    products,
    services,
    addProduct,
    updateProduct,
    deleteProduct,
    addService,
    updateService,
    deleteService,
    whatCanOffer,
    setWhatCanOffer,
    whatLookingFor,
    setWhatLookingFor,
    businessGoals,
    setBusinessGoals,
    goalDetailText,
    setGoalDetailText,
    marketScope,
    setMarketScope,
    targetCountries,
    setTargetCountries,
    businessIntentText,
    setBusinessIntentText,
    aiIntentAnalysis,
    setAiIntentAnalysis,
    verification,
  } = useOwner()

  const [toastMessage, setToastMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setOwnerProfile((prev) => ({ ...prev, avatarUrl: reader.result }))
        showToast('Profile photo uploaded!')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBusinessLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setBusinessProfile((prev) => ({ ...prev, logoUrl: reader.result }))
        showToast('Business logo uploaded!')
      }
      reader.readAsDataURL(file)
    }
  }

  // Modals for Step 3 Add Product / Add Service
  const [showAddProductModal, setShowAddProductModal] = useState(false)
  const [showAddServiceModal, setShowAddServiceModal] = useState(false)
  const [newProd, setNewProd] = useState({
    name: '',
    category: 'Packaging',
    description: '',
    price: '',
    moq: '',
    availability: 'In Stock',
    locations: 'Global',
    specifications: '',
  })
  const [newServ, setNewServ] = useState({
    name: '',
    category: 'Consulting',
    description: '',
    pricing: '',
    serviceArea: 'Global',
    availability: 'Immediate',
    experience: '5+ years',
    portfolio: '',
  })

  // Country Search State (Step 7)
  const [countrySearch, setCountrySearch] = useState('')

  const showToast = (msg) => {
    setToastMessage(msg)
    setToastVisible(true)
  }

  const handleNextStep = () => {
    if (onboardingStep < 9) {
      setOnboardingStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    } else {
      // Step 9 Complete -> Navigate to Celebration Success Screen
      setOnboardingCompleted(true)
      navigate('/owner/onboarding/success')
    }
  }

  const handlePrevStep = () => {
    if (onboardingStep > 1) {
      setOnboardingStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const toggleArrayItem = (array, setArray, item) => {
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item))
    } else {
      setArray([...array, item])
    }
  }

  const offerOptions = [
    'Products', 'Services', 'Manufacturing', 'Distribution', 'Technology',
    'Consulting', 'Expertise', 'Investment', 'Partnership', 'Logistics', 'Other'
  ]

  const lookingForOptions = [
    'Buyers', 'Suppliers', 'Distributors', 'Manufacturers', 'Customers',
    'Investors', 'Business Partners', 'Professionals', 'Consultants',
    'Technology Partners', 'Logistics Partners', 'International Partners', 'Employees', 'Other'
  ]

  const goalOptions = [
    'Increase Sales', 'Find Customers', 'Find Suppliers', 'Find Distributors',
    'Enter New Markets', 'Raise Investment', 'Find Business Partners', 'Improve Operations',
    'Launch a New Product', 'Hire Talent', 'Build Brand Awareness', 'Expand Internationally', 'Other'
  ]

  const businessTypeOptions = [
    'Startup', 'Small Business', 'Medium Business', 'Enterprise',
    'Manufacturer', 'Distributor', 'Retailer', 'Service Business', 'Technology Company', 'Other'
  ]

  return (
    <div className="owner-onboarding-wrapper">
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />

      <div className="onboarding-card">
        {/* Progress Indicator */}
        <div className="onboarding-progress-bar-container">
          <div className="progress-info">
            <span>Step {onboardingStep} of 8</span>
            <span>{Math.round((onboardingStep / 9) * 100)}% Complete</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${(onboardingStep / 9) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: OWNER PROFILE */}
        {onboardingStep === 1 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">Let's get to know you.</h2>
              <p className="onboarding-subtitle">Tell us about the person behind the business.</p>
            </div>

            <div className="owner-form-grid">
              <div>
                <label className="owner-input-label">Profile Photo</label>
                <div className="photo-upload-wrapper">
                  {ownerProfile.avatarUrl ? (
                    <div className="avatar-preview-container">
                      <img
                        src={ownerProfile.avatarUrl}
                        alt="Profile Preview"
                        className="avatar-preview-img"
                      />
                      <div className="avatar-preview-actions">
                        <label className="upload-image-btn" style={{ cursor: 'pointer' }}>
                          <Camera size={14} />
                          <span>Upload Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleProfilePhotoUpload}
                          />
                        </label>
                        <button
                          type="button"
                          className="remove-image-btn"
                          onClick={() => setOwnerProfile({ ...ownerProfile, avatarUrl: '' })}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="photo-upload-box">
                      <div className="upload-icon-circle">
                        <Upload size={22} color="#0066ff" />
                      </div>
                      <div className="upload-box-text">
                        <span className="upload-main-text">Upload Image</span>
                        <span className="upload-sub-text">PNG, JPG or WEBP (Max 5MB)</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleProfilePhotoUpload}
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Full Name</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={ownerProfile.fullName}
                    onChange={(e) => setOwnerProfile({ ...ownerProfile, fullName: e.target.value })}
                    placeholder="e.g. Vignesh V L"
                  />
                </div>
                <div>
                  <label className="owner-input-label">Professional Title</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={ownerProfile.title}
                    onChange={(e) => setOwnerProfile({ ...ownerProfile, title: e.target.value })}
                    placeholder="e.g. Founder & CEO"
                  />
                </div>
              </div>

              <div>
                <label className="owner-input-label">Short Bio</label>
                <textarea
                  className="owner-input-field owner-textarea-field"
                  value={ownerProfile.bio}
                  onChange={(e) => setOwnerProfile({ ...ownerProfile, bio: e.target.value })}
                  placeholder="Building technology solutions for modern businesses..."
                />
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Country</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={ownerProfile.country}
                    onChange={(e) => setOwnerProfile({ ...ownerProfile, country: e.target.value })}
                    placeholder="e.g. India"
                  />
                </div>
                <div>
                  <label className="owner-input-label">City</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={ownerProfile.city}
                    onChange={(e) => setOwnerProfile({ ...ownerProfile, city: e.target.value })}
                    placeholder="e.g. Bengaluru"
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Languages</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={ownerProfile.languages}
                    onChange={(e) => setOwnerProfile({ ...ownerProfile, languages: e.target.value })}
                    placeholder="e.g. English, Hindi"
                  />
                </div>
                <div>
                  <label className="owner-input-label">Years of Experience</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={ownerProfile.experienceYears}
                    onChange={(e) => setOwnerProfile({ ...ownerProfile, experienceYears: e.target.value })}
                    placeholder="e.g. 8+"
                  />
                </div>
              </div>
            </div>

            <div className="onboarding-btn-row">
              <span />
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: BUSINESS PROFILE */}
        {onboardingStep === 2 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">Tell us about your business.</h2>
              <p className="onboarding-subtitle">This helps HynaBiz understand your business.</p>
            </div>

            <div className="owner-form-grid">
              <div>
                <label className="owner-input-label">Business Logo</label>
                <div className="photo-upload-wrapper">
                  {businessProfile.logoUrl ? (
                    <div className="avatar-preview-container">
                      <img
                        src={businessProfile.logoUrl}
                        alt="Business Logo Preview"
                        className="logo-preview-img"
                      />
                      <div className="avatar-preview-actions">
                        <label className="upload-image-btn" style={{ cursor: 'pointer' }}>
                          <Camera size={14} />
                          <span>Upload Logo</span>
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleBusinessLogoUpload}
                          />
                        </label>
                        <button
                          type="button"
                          className="remove-image-btn"
                          onClick={() => setBusinessProfile({ ...businessProfile, logoUrl: '' })}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="photo-upload-box">
                      <div className="upload-icon-circle">
                        <Upload size={22} color="#0066ff" />
                      </div>
                      <div className="upload-box-text">
                        <span className="upload-main-text">Upload Logo</span>
                        <span className="upload-sub-text">PNG, JPG or WEBP (Max 5MB)</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleBusinessLogoUpload}
                      />
                    </label>
                  )}
                </div>
              </div>
              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Business Name</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={businessProfile.name}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, name: e.target.value })}
                    placeholder="e.g. EcoPack Solutions Ltd."
                  />
                </div>
                <div>
                  <label className="owner-input-label">Website</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={businessProfile.website}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, website: e.target.value })}
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div>
                <label className="owner-input-label">Business Description</label>
                <textarea
                  className="owner-input-field owner-textarea-field"
                  value={businessProfile.description}
                  onChange={(e) => setBusinessProfile({ ...businessProfile, description: e.target.value })}
                  placeholder="Describe what your business manufactures or provides..."
                />
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Industry</label>
                  <select
                    className="owner-input-field"
                    value={businessProfile.industry}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, industry: e.target.value })}
                  >
                    {INDUSTRY_OPTIONS.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="owner-input-label">Business Type</label>
                  <select
                    className="owner-input-field"
                    value={businessProfile.businessType}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, businessType: e.target.value })}
                  >
                    {businessTypeOptions.map((bt) => (
                      <option key={bt} value={bt}>{bt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Founded Year</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={businessProfile.foundedYear}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, foundedYear: e.target.value })}
                    placeholder="e.g. 2019"
                  />
                </div>
                <div>
                  <label className="owner-input-label">Business Size</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={businessProfile.businessSize}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, businessSize: e.target.value })}
                    placeholder="e.g. 50-200 Employees"
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div>
                  <label className="owner-input-label">Country</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={businessProfile.country}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, country: e.target.value })}
                    placeholder="e.g. India"
                  />
                </div>
                <div>
                  <label className="owner-input-label">City</label>
                  <input
                    type="text"
                    className="owner-input-field"
                    value={businessProfile.city}
                    onChange={(e) => setBusinessProfile({ ...businessProfile, city: e.target.value })}
                    placeholder="e.g. Bengaluru"
                  />
                </div>
              </div>
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PRODUCTS & SERVICES */}
        {onboardingStep === 3 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">What does your business provide?</h2>
              <p className="onboarding-subtitle">Add the products or services you want people to discover.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
              {/* PRODUCTS SECTION */}
              <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '20px', padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    PRODUCTS ({products.length})
                  </h3>
                  <button
                    type="button"
                    className="btn-primary-owner"
                    style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                    onClick={() => setShowAddProductModal(true)}
                  >
                    <Plus size={16} />
                    <span>+ Add Product</span>
                  </button>
                </div>

                {products.length === 0 ? (
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>No products added yet.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {products.map((prod) => (
                      <div
                        key={prod.id}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '14px',
                          padding: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>{prod.name}</div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{prod.category} • {prod.price}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => deleteProduct(prod.id)}
                          style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SERVICES SECTION */}
              <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '20px', padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    SERVICES ({services.length})
                  </h3>
                  <button
                    type="button"
                    className="btn-primary-owner"
                    style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                    onClick={() => setShowAddServiceModal(true)}
                  >
                    <Plus size={16} />
                    <span>+ Add Service</span>
                  </button>
                </div>

                {services.length === 0 ? (
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>No services added yet.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {services.map((serv) => (
                      <div
                        key={serv.id}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '14px',
                          padding: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>{serv.name}</div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{serv.category} • {serv.pricing}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => deleteService(serv.id)}
                          style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: WHAT CAN YOU OFFER? */}
        {onboardingStep === 4 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">What can you bring to the HynaBiz network?</h2>
              <p className="onboarding-subtitle">Select everything your business can offer.</p>
            </div>

            <div className="select-cards-grid">
              {offerOptions.map((opt) => {
                const isSelected = whatCanOffer.includes(opt)
                return (
                  <div
                    key={opt}
                    className={`select-card ${isSelected ? 'active' : ''}`}
                    onClick={() => toggleArrayItem(whatCanOffer, setWhatCanOffer, opt)}
                  >
                    <div className="select-card-icon">
                      {isSelected ? <Check size={16} /> : <Plus size={16} />}
                    </div>
                    <span className="select-card-label">{opt}</span>
                  </div>
                )
              })}
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: WHAT ARE YOU LOOKING FOR? */}
        {onboardingStep === 5 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">What are you looking for?</h2>
              <p className="onboarding-subtitle">HynaBiz will use this to find relevant opportunities.</p>
            </div>

            <div className="select-cards-grid">
              {lookingForOptions.map((opt) => {
                const isSelected = whatLookingFor.includes(opt)
                return (
                  <div
                    key={opt}
                    className={`select-card ${isSelected ? 'active' : ''}`}
                    onClick={() => toggleArrayItem(whatLookingFor, setWhatLookingFor, opt)}
                  >
                    <div className="select-card-icon">
                      {isSelected ? <Check size={16} /> : <Plus size={16} />}
                    </div>
                    <span className="select-card-label">{opt}</span>
                  </div>
                )
              })}
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: BUSINESS GOALS */}
        {onboardingStep === 6 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">What do you want to achieve?</h2>
              <p className="onboarding-subtitle">Choose your current business goals.</p>
            </div>

            <div className="select-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
              {goalOptions.map((opt) => {
                const isSelected = businessGoals.includes(opt)
                return (
                  <div
                    key={opt}
                    className={`select-card ${isSelected ? 'active' : ''}`}
                    onClick={() => toggleArrayItem(businessGoals, setBusinessGoals, opt)}
                  >
                    <div className="select-card-icon">
                      {isSelected ? <Check size={16} /> : <Plus size={16} />}
                    </div>
                    <span className="select-card-label">{opt}</span>
                  </div>
                )
              })}
            </div>

            <div style={{ marginTop: '16px', marginBottom: '24px' }}>
              <label className="owner-input-label">Tell us more about your goal (Optional)</label>
              <input
                type="text"
                className="owner-input-field"
                value={goalDetailText}
                onChange={(e) => setGoalDetailText(e.target.value)}
                placeholder="e.g. I want to expand my packaging business into the UAE."
              />
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 7: TARGET MARKETS */}
        {onboardingStep === 7 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">Where do you want to grow?</h2>
              <p className="onboarding-subtitle">Choose the markets where you want to build business relationships.</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label className="owner-input-label">Market Scope</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {['Local', 'National', 'International', 'Global'].map((scope) => (
                  <button
                    key={scope}
                    type="button"
                    className={`select-card ${marketScope === scope ? 'active' : ''}`}
                    style={{ padding: '10px' }}
                    onClick={() => setMarketScope(scope)}
                  >
                    <span className="select-card-label">{scope}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label className="owner-input-label">Select Target Countries</label>
              <input
                type="text"
                className="owner-input-field"
                placeholder="Search country..."
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
                style={{ marginBottom: '12px' }}
              />

              <div className="select-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
                {COUNTRY_OPTIONS.filter((c) => c.toLowerCase().includes(countrySearch.toLowerCase())).map((c) => {
                  const isSelected = targetCountries.includes(c)
                  return (
                    <div
                      key={c}
                      className={`select-card ${isSelected ? 'active' : ''}`}
                      onClick={() => toggleArrayItem(targetCountries, setTargetCountries, c)}
                    >
                      <div className="select-card-icon">
                        {isSelected ? <Check size={16} /> : <Plus size={16} />}
                      </div>
                      <span className="select-card-label">{c}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 8: BUSINESS INTENT (AI NLP Analysis) */}
        {onboardingStep === 8 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">What are you trying to achieve right now?</h2>
              <p className="onboarding-subtitle">Tell HynaBiz in your own words. Our AI will understand your business intent.</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <textarea
                className="owner-input-field owner-textarea-field"
                style={{ minHeight: '110px', fontSize: '0.94rem' }}
                value={businessIntentText}
                onChange={(e) => setBusinessIntentText(e.target.value)}
                placeholder="Example: I manufacture eco-friendly packaging and I'm looking for distributors in Dubai."
              />
            </div>

            {/* AI Analysis Preview Box */}
            <div className="ai-intent-preview-card">
              <div className="ai-intent-header">
                <Sparkles size={20} color="#00d2ff" />
                <span>Hyna AI understands:</span>
              </div>
              <div className="ai-intent-grid">
                <div className="ai-intent-item">
                  <div className="ai-intent-label">Business Need</div>
                  <div className="ai-intent-value">{aiIntentAnalysis.need}</div>
                </div>
                <div className="ai-intent-item">
                  <div className="ai-intent-label">Industry</div>
                  <div className="ai-intent-value">{aiIntentAnalysis.industry}</div>
                </div>
                <div className="ai-intent-item">
                  <div className="ai-intent-label">Target Market</div>
                  <div className="ai-intent-value">{aiIntentAnalysis.targetMarket}</div>
                </div>
                <div className="ai-intent-item">
                  <div className="ai-intent-label">Intent Confidence</div>
                  <div className="ai-intent-value" style={{ color: '#10b981' }}>{aiIntentAnalysis.intentLevel}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '14px', marginBottom: 0 }}>
                Did we understand you correctly?
              </p>
            </div>

            <div className="onboarding-btn-row" style={{ marginTop: '24px' }}>
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Edit Text
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Yes, Continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 9: VERIFICATION */}
        {onboardingStep === 9 && (
          <div>
            <div className="onboarding-header">
              <h2 className="onboarding-title">Build trust with verification.</h2>
              <p className="onboarding-subtitle">Verified businesses create stronger connections and higher AI compatibility match scores.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                { key: 'email', label: 'Email Verification', status: verification.email },
                { key: 'phone', label: 'Phone Verification', status: verification.phone },
                { key: 'business', label: 'Business Identity Check', status: verification.business },
                { key: 'website', label: 'Website Domain Check', status: verification.website },
                { key: 'registration', label: 'Government Business Registration', status: verification.registration },
              ].map((v) => (
                <div
                  key={v.key}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={22} color={v.status === 'Verified' ? '#10b981' : '#f59e0b'} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>{v.label}</span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      background: v.status === 'Verified' ? '#d1fae5' : '#fef3c7',
                      color: v.status === 'Verified' ? '#065f46' : '#92400e',
                    }}
                  >
                    {v.status}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', marginBottom: '20px' }}>
              More verification can increase trust and visibility across HynaBiz network.
            </p>

            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={handlePrevStep}>
                Back
              </button>
              <button type="button" className="btn-primary-owner" onClick={handleNextStep}>
                <span>Complete Profile</span>
                <Check size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ADD PRODUCT MODAL */}
      {showAddProductModal && (
        <div className="modal-overlay-owner" onClick={() => setShowAddProductModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>Add Product</h3>
            <div className="owner-form-grid">
              <input
                type="text"
                placeholder="Product Name"
                className="owner-input-field"
                value={newProd.name}
                onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category (e.g. Packaging)"
                className="owner-input-field"
                value={newProd.category}
                onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
              />
              <textarea
                placeholder="Product Description"
                className="owner-input-field owner-textarea-field"
                value={newProd.description}
                onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Price / Price Range (e.g. $0.45 / unit)"
                className="owner-input-field"
                value={newProd.price}
                onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
              />
            </div>
            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={() => setShowAddProductModal(false)}>Cancel</button>
              <button
                type="button"
                className="btn-primary-owner"
                onClick={() => {
                  if (newProd.name) {
                    addProduct(newProd)
                    setShowAddProductModal(false)
                    showToast('Product added successfully!')
                  }
                }}
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD SERVICE MODAL */}
      {showAddServiceModal && (
        <div className="modal-overlay-owner" onClick={() => setShowAddServiceModal(false)}>
          <div className="modal-card-owner" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>Add Service</h3>
            <div className="owner-form-grid">
              <input
                type="text"
                placeholder="Service Name"
                className="owner-input-field"
                value={newServ.name}
                onChange={(e) => setNewServ({ ...newServ, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category (e.g. Design & Engineering)"
                className="owner-input-field"
                value={newServ.category}
                onChange={(e) => setNewServ({ ...newServ, category: e.target.value })}
              />
              <textarea
                placeholder="Service Description"
                className="owner-input-field owner-textarea-field"
                value={newServ.description}
                onChange={(e) => setNewServ({ ...newServ, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Pricing Structure"
                className="owner-input-field"
                value={newServ.pricing}
                onChange={(e) => setNewServ({ ...newServ, pricing: e.target.value })}
              />
            </div>
            <div className="onboarding-btn-row">
              <button type="button" className="btn-secondary-owner" onClick={() => setShowAddServiceModal(false)}>Cancel</button>
              <button
                type="button"
                className="btn-primary-owner"
                onClick={() => {
                  if (newServ.name) {
                    addService(newServ)
                    setShowAddServiceModal(false)
                    showToast('Service added successfully!')
                  }
                }}
              >
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
