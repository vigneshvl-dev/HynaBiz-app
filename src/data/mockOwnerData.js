// Supabase-Ready Mock Data Store for HynaBiz Owner Module Platform

export const INITIAL_OWNER_PROFILE = {
  id: 'owner-usr-01',
  fullName: 'Vignesh V L',
  title: 'Founder & CEO',
  bio: 'Building technology and sustainable packaging solutions for modern businesses worldwide.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  country: 'India',
  city: 'Bengaluru',
  languages: 'English, Tamil, Hindi',
  experienceYears: '8+',
  email: 'vignesh@hynastudio.com',
  phone: '+91 98765 43210',
  linkedin: 'linkedin.com/in/vigneshvl',
  website: 'https://hynastudio.com',
  skills: ['SaaS Development', 'B2B Growth', 'Global Supply Chain', 'Brand Strategy'],
  verifiedStatus: 'Verified Owner',
}

export const INITIAL_BUSINESS_PROFILE = {
  id: 'biz-01',
  name: 'EcoPack Solutions Ltd.',
  logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  industry: 'Packaging & Manufacturing',
  category: 'Sustainable Materials',
  businessType: 'Manufacturer',
  description: 'Manufacturer of biodegradable packaging, eco mailers, and sustainable industrial corrugated boxes.',
  foundedYear: '2019',
  businessSize: '50-200 Employees',
  country: 'India',
  city: 'Bengaluru',
  website: 'https://ecopacksolutions.com',
  gstNumber: '29ABCDE1234F1Z5',
  registrationNumber: 'CIN-U74999KA2019PTC123456',
  verificationStatus: 'Verified Business',
}

export const DASHBOARD_OVERVIEW_METRICS = {
  newMatches: 12,
  newLeads: 8,
  newMessages: 5,
  upcomingMeetings: 3,
  activeDeals: 4,
  pendingQuotes: 3,
  completedDealsCount: 27,
  profileViews: 1420,
  reputationRating: 4.8,
}

export const MOCK_REQUIREMENTS = [
  {
    id: 'req-01',
    type: 'Distributor',
    title: 'Looking for Commercial Clothing & Textiles Distributor',
    product: 'Biodegradable Garment Packaging & Hangers',
    location: 'Kerala, India',
    volume: '500+ units/month',
    budget: '$10,000 - $25,000 / mo',
    partnershipType: 'Long Term Exclusive',
    timeline: 'Within 30 Days',
    intentLevel: 'High (94% Confidence)',
    description: 'We require an established regional distributor with active retail and fashion brand distribution networks across Cochin, Trivandrum, and Calicut.',
    publishedDate: '2 days ago',
  },
  {
    id: 'req-02',
    type: 'Buyer',
    title: 'Seeking Bulk Raw PLA Polymer Resin Suppliers',
    product: 'Compostable PLA Resin Grains',
    location: 'Global / APAC',
    volume: '20 Metric Tons / quarter',
    budget: '$50,000+',
    partnershipType: 'Quarterly Contract',
    timeline: 'Immediate',
    intentLevel: 'High',
    description: 'Direct manufacturer inquiry for certified ASTM D6400 raw PLA resin for packaging blown film production.',
    publishedDate: '5 days ago',
  }
]

export const MOCK_OFFERS = [
  {
    id: 'off-01',
    title: '100% Biodegradable E-Commerce Courier Mailers',
    category: 'Packaging Products',
    description: 'Compostable poly mailers made from cornstarch (PBAT+PLA). Custom branding & size printing available.',
    pricing: '$0.12 - $0.35 / unit',
    moq: '1,000 Units',
    capacity: '500,000 Units / month',
    availability: 'Immediate In Stock',
    location: 'India & Export Global',
    targetIndustries: ['E-Commerce', 'Fashion', 'Retail Logistics'],
  },
  {
    id: 'off-02',
    title: 'Custom B2B Sustainable Packaging Design & Prototyping',
    category: 'Consulting & Engineering',
    description: 'Complete structural design, drop testing, and eco-material audit for consumer brand packaging.',
    pricing: '$1,500 / Project',
    moq: '1 Project',
    capacity: '10 Design Runs / month',
    availability: 'Available',
    location: 'Global Remote',
    targetIndustries: ['Electronics', 'Cosmetics', 'Food & Beverage'],
  }
]

export const MOCK_DISCOVERY_BUSINESSES = [
  {
    id: 'biz-disc-01',
    name: 'Dubai Logistics & Distribution Co.',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    industry: 'Logistics & Supply Chain',
    type: 'Distributor',
    location: 'Dubai, UAE',
    description: 'Premier Middle East distribution logistics network with 150,000 sq ft warehousing across Dubai South & JAFZA.',
    offers: ['Warehousing', 'Regional Distribution', 'Customs Clearance'],
    needs: ['Eco-friendly Packaging', 'Biodegradable Mailers'],
    compatibilityScore: 94,
    verifiedStatus: 'Verified Business',
  },
  {
    id: 'biz-disc-02',
    name: 'Kerala Trade Partners & Retailing Network',
    logoUrl: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80',
    industry: 'Retail & Wholesale',
    type: 'Distributor',
    location: 'Kerala, India',
    description: 'Established distributor servicing over 450+ garment showrooms and retail outlets across South India.',
    offers: ['Showroom Distribution', 'Local Sales Force', 'Credit Facilities'],
    needs: ['Clothing Packaging', 'Eco-friendly Products'],
    compatibilityScore: 91,
    verifiedStatus: 'Verified Business',
  },
  {
    id: 'biz-disc-03',
    name: 'Nordic Packaging Hub AB',
    logoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
    industry: 'Packaging & Freight',
    type: 'Manufacturer',
    location: 'Stockholm, Sweden',
    description: 'Specialist in Scandinavian certified compostable materials and European freight packaging solutions.',
    offers: ['FSC Kraft Paper', 'Corrugated Boxes'],
    needs: ['International Partners', 'Asia Manufacturing Partners'],
    compatibilityScore: 88,
    verifiedStatus: 'Verified Business',
  }
]

export const MOCK_AI_RECOMMENDATIONS = [
  {
    id: 'ai-rec-01',
    businessName: 'XYZ Distributors UAE',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    type: 'Distributor',
    location: 'Dubai, UAE',
    compatibilityScore: 94,
    matchReasons: [
      'Active GCC distribution license for packaging materials',
      'Matches your target market expansion in UAE',
      'Verified capacity exceeding 100k units/month',
    ],
    summary: 'Seeking exclusive distribution rights for eco-friendly mailers in UAE.',
  },
  {
    id: 'ai-rec-02',
    businessName: 'ABC Retail Network India',
    logoUrl: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80',
    type: 'Buyer',
    location: 'Kerala, India',
    compatibilityScore: 91,
    matchReasons: [
      'Matches product category: Clothing & Garment packaging',
      'Location match: Kerala retail network',
      'High purchasing volume history',
    ],
    summary: 'Needs 500+ units/month compostable garment bags.',
  }
]

export const MOCK_WHO_CAN_HELP = [
  {
    id: 'help-01',
    author: 'Vignesh V L',
    company: 'EcoPack Solutions Ltd.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    question: 'I need someone who can help me export biodegradable packaging products to UAE. Looking for legal compliance & local logistics partners in Dubai.',
    category: 'Export & Logistics',
    location: 'Dubai, UAE',
    repliesCount: 4,
    timeAgo: '3 hours ago',
    replies: [
      {
        id: 'r1',
        name: 'Tariq Al-Mansoor',
        company: 'Dubai Trade Advisory',
        text: 'We handle ESMA packaging compliance and Dubai Customs clearance. Can set up a 5-minute meeting.',
        timeAgo: '1 hour ago',
      }
    ]
  },
  {
    id: 'help-02',
    author: 'Sarah Jenkins',
    company: 'BioTech Innovations',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    question: 'Looking for a certified lab in Asia for ASTM D6400 compostability testing & certification.',
    category: 'Testing & Compliance',
    location: 'Asia Pacific',
    repliesCount: 2,
    timeAgo: '1 day ago',
    replies: []
  }
]

export const MOCK_SPEED_NETWORKING_SESSIONS = [
  {
    id: 'speed-01',
    title: '5-Minute B2B Match: Sustainable Packaging & Distributors',
    participantName: 'Tariq Al-Mansoor',
    participantCompany: 'Dubai Logistics & Distribution Co.',
    participantRole: 'Managing Director',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    timeSlot: 'Today at 4:00 PM',
    status: 'Upcoming',
    flowSteps: ['Business Intro (1m)', 'Requirement Pitch (1m)', 'Opportunity Check (1.5m)', 'Connect & Follow up (1.5m)'],
  }
]

export const MOCK_CONNECTIONS = [
  {
    id: 'conn-01',
    businessName: 'Dubai Logistics & Distribution Co.',
    contactName: 'Tariq Al-Mansoor',
    title: 'Managing Director',
    industry: 'Logistics & Supply Chain',
    location: 'Dubai, UAE',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    status: 'Connected',
    compatibilityScore: 94,
    connectedDate: '3 days ago',
  },
  {
    id: 'conn-02',
    businessName: 'Nordic Packaging Hub AB',
    contactName: 'Freja Lindqvist',
    title: 'Head of Procurement',
    industry: 'Packaging & Freight',
    location: 'Stockholm, Sweden',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    logoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
    status: 'Pending Approval',
    compatibilityScore: 88,
    connectedDate: '1 day ago',
  }
]

export const MOCK_INTRODUCTIONS = [
  {
    id: 'intro-01',
    fromBusiness: 'EcoPack Solutions Ltd.',
    toBusiness: 'Dubai Logistics & Distribution Co.',
    reason: 'Business A needs a UAE distributor, Business B is looking for eco mailers to distribute.',
    status: 'Recommended by Hyna AI',
    suggestedMessage: 'Hi Tariq, Hyna AI identified high commercial synergy between EcoPack Solutions (biodegradable packaging) and Dubai Logistics Distribution network in UAE.',
  }
]

export const MOCK_LEADS_CRM = [
  {
    id: 'lead-01',
    companyName: 'Dubai Distribution Co.',
    contactPerson: 'Tariq Al-Mansoor',
    requirement: 'Exclusive Regional UAE Distribution',
    estimatedValue: '$75,000',
    stage: 'Negotiation',
    source: 'Hyna AI Match',
    lastContact: 'Yesterday',
    nextFollowUp: 'Tomorrow 10:00 AM',
    notes: 'Requested sample batch shipment to JAFZA warehouse before contract signing.',
  },
  {
    id: 'lead-02',
    companyName: 'Kerala Garment Retailing Group',
    contactPerson: 'Karthik Menon',
    requirement: '500+ units/month Garment Mailers',
    estimatedValue: '$18,000',
    stage: 'Quotation',
    source: 'My Requirements Post',
    lastContact: '2 days ago',
    nextFollowUp: 'Sep 2, 2026',
    notes: 'Quotation QT-2026-089 sent via Hyna Quotation generator.',
  },
  {
    id: 'lead-03',
    companyName: 'Singapore BioTech Ventures',
    contactPerson: 'Chen Wei',
    requirement: 'Series A Equity Growth Investment',
    estimatedValue: '$500,000',
    stage: 'Discussion',
    source: 'Investor Match',
    lastContact: '4 days ago',
    nextFollowUp: 'Sep 5, 2026',
    notes: 'Shared pitch deck and 3-year financial projections.',
  }
]

export const MOCK_MESSAGES = [
  {
    id: 'chat-01',
    contactName: 'Tariq Al-Mansoor',
    businessName: 'Dubai Logistics & Distribution Co.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    lastActive: 'Online',
    messages: [
      { id: 'm1', sender: 'them', text: 'Hello Vignesh! We reviewed your EcoPack mailers catalog. We are interested in exclusive distribution across Dubai & Sharjah.', time: '10:30 AM' },
      { id: 'm2', sender: 'me', text: 'Hi Tariq! Thank you. We can support custom sizes and ASTM D6400 certified compostable material for your network.', time: '10:32 AM' },
      { id: 'm3', sender: 'them', text: 'Excellent. Can you send over a formal quotation for an initial order of 50,000 units?', time: '10:35 AM' },
    ]
  }
]

export const MOCK_MEETINGS = [
  {
    id: 'meet-01',
    purpose: '5-Minute Business Speed Match',
    personName: 'Tariq Al-Mansoor',
    businessName: 'Dubai Logistics & Distribution Co.',
    date: 'Aug 30, 2026',
    time: '4:00 PM GST',
    meetingLink: 'https://hynabiz.com/meet/speed-01',
    type: 'Video Match',
    status: 'Confirmed',
  },
  {
    id: 'meet-02',
    purpose: 'Quotation & Terms Negotiation Call',
    personName: 'Karthik Menon',
    businessName: 'Kerala Garment Retailing Group',
    date: 'Sep 2, 2026',
    time: '2:30 PM IST',
    meetingLink: 'https://hynabiz.com/meet/terms-02',
    type: 'Buyer Meeting',
    status: 'Scheduled',
  }
]

export const MOCK_PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Biodegradable Courier Mailers (Size M)',
    category: 'Eco Packaging',
    description: 'Certified 100% home-compostable courier bags made from PLA & cornstarch.',
    price: '$0.24 / unit',
    moq: '1,000 Units',
    availability: 'In Stock',
    locations: 'Global Export',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prod-02',
    name: 'Heavy-Duty Corrugated Kraft Shipping Boxes',
    category: 'Industrial Packaging',
    description: '3-ply & 5-ply recyclable shipping boxes for industrial freight packaging.',
    price: '$0.85 / box',
    moq: '500 Boxes',
    availability: 'In Stock',
    locations: 'India & Middle East',
    imageUrl: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=400&q=80',
  }
]

export const MOCK_SERVICES = [
  {
    id: 'serv-01',
    name: 'Sustainable Packaging Design & Prototyping',
    category: 'Engineering & Consulting',
    description: 'Structural packaging engineering, eco-material auditing, and prototype sample creation.',
    pricing: '$1,500 / Design Project',
    serviceArea: 'Global Remote',
    experience: '8+ Years',
  }
]

export const MOCK_MARKETPLACE_ITEMS = [
  {
    id: 'mkt-01',
    title: 'Compostable Garment Packaging Bags (Bulk B2B)',
    supplier: 'EcoPack Solutions Ltd.',
    category: 'Packaging',
    price: '$0.18 - $0.32',
    moq: '2,000 Units',
    verifiedSupplier: true,
    rating: 4.8,
  },
  {
    id: 'mkt-02',
    title: 'FSC Certified Craft Paper Rolls',
    supplier: 'Nordic Packaging Hub AB',
    category: 'Raw Materials',
    price: '$450 / Ton',
    moq: '5 Tons',
    verifiedSupplier: true,
    rating: 4.9,
  }
]

export const MOCK_QUOTATIONS = [
  {
    id: 'quote-01',
    quotationNumber: 'QT-2026-089',
    customerName: 'Dubai Logistics & Distribution Co.',
    contactPerson: 'Tariq Al-Mansoor',
    date: 'Aug 29, 2026',
    validUntil: 'Sep 28, 2026',
    items: [
      { description: 'Biodegradable Poly Mailers Size M (50k units)', qty: 50000, unitPrice: 0.22, total: 11000 },
      { description: 'Custom Brand Printing & Setup Fee', qty: 1, unitPrice: 500, total: 500 },
    ],
    subtotal: 11500,
    tax: 575,
    shippingFee: 1200,
    totalAmount: 13275,
    status: 'Sent / Pending Approval',
  }
]

export const MOCK_DEALS = [
  {
    id: 'deal-01',
    title: 'Exclusive GCC Packaging Distribution Agreement',
    partnerName: 'Dubai Logistics & Distribution Co.',
    dealValue: '$75,000',
    stage: 'Quotation Approved / Agreement Draft',
    paymentStatus: '50% Advance Pending',
    expectedClosing: 'Sep 10, 2026',
  },
  {
    id: 'deal-02',
    title: 'South India Garment Mailers Supply Contract',
    partnerName: 'Kerala Garment Retailing Group',
    dealValue: '$18,000',
    stage: 'Completed',
    paymentStatus: 'Paid ($18,000)',
    expectedClosing: 'Aug 20, 2026',
  }
]

export const MOCK_PAYMENTS = [
  {
    id: 'pay-01',
    transactionId: 'TXN-8849201',
    fromCustomer: 'Kerala Garment Retailing Group',
    amount: '$18,000',
    invoiceNumber: 'INV-2026-044',
    date: 'Aug 20, 2026',
    method: 'B2B Wire Transfer / Escrow',
    status: 'Completed',
  },
  {
    id: 'pay-02',
    transactionId: 'TXN-9938102',
    fromCustomer: 'Dubai Logistics & Distribution Co.',
    amount: '$6,637.50',
    invoiceNumber: 'INV-2026-051',
    date: 'Aug 30, 2026',
    method: 'Bank Transfer (50% Advance)',
    status: 'Pending',
  }
]

export const MOCK_REPUTATION = {
  rating: 4.8,
  totalReviews: 27,
  verificationBadges: ['Email Verified', 'Phone Verified', 'GST Registration Verified', 'Export License Verified'],
  completedDeals: 27,
  responseRate: '98% within 2 hours',
  reviews: [
    {
      id: 'rev-1',
      reviewerName: 'Karthik Menon',
      company: 'Kerala Garment Retailing Group',
      rating: 5.0,
      comment: 'Excellent biodegradable mailer quality and prompt delivery to Cochin warehouse. Highly reliable manufacturer!',
      date: '1 week ago',
    },
    {
      id: 'rev-2',
      reviewerName: 'Freja Lindqvist',
      company: 'Nordic Packaging Hub AB',
      rating: 4.6,
      comment: 'Great custom structural design engineering and compostability documentation.',
      date: '1 month ago',
    }
  ]
}

export const MOCK_ANALYTICS = {
  profileViewsMonthly: 1420,
  searchAppearances: 3850,
  matchesGenerated: 48,
  dealsConverted: 14,
  revenueGenerated: '$185,000',
  demandInsights: [
    { region: 'Dubai & UAE', growth: '+42% demand increase for eco mailers' },
    { region: 'Kerala & South India', growth: '+28% demand increase for retail garment packaging' }
  ]
}

export const MOCK_POSTS = [
  {
    id: 'post-01',
    author: 'Vignesh V L',
    company: 'EcoPack Solutions Ltd.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    type: 'Product Launch',
    content: 'We are thrilled to launch our next-gen ASTM D6400 home-compostable e-commerce mailers! Now available for bulk B2B distribution across APAC and Middle East.',
    likes: 34,
    comments: 8,
    timeAgo: '2 days ago',
  }
]

export const MOCK_TEAM_MEMBERS = [
  { id: 'tm-1', name: 'Vignesh V L', email: 'vignesh@hynastudio.com', role: 'Owner', status: 'Active' },
  { id: 'tm-2', name: 'Ananya Sharma', email: 'ananya@ecopack.com', role: 'Sales Manager', status: 'Active' },
  { id: 'tm-3', name: 'Rahul Verma', email: 'rahul@ecopack.com', role: 'Operations & Logistics', status: 'Active' },
]

export const MOCK_EXPANSION_PLANS = [
  {
    id: 'exp-1',
    targetMarket: 'Dubai, UAE',
    status: 'In Progress',
    recommendedSteps: [
      'Partner with Dubai Logistics & Distribution Co. (94% Match)',
      'Register for JAFZA free zone distribution clearance',
      'Publish UAE B2B Offer on Hyna Marketplace',
    ]
  }
]

export const MOCK_NOTIFICATIONS = [
  { id: 'n1', title: 'New AI Business Match', text: 'XYZ Distributors UAE matches 94% with your packaging offer.', time: '10m ago', read: false },
  { id: 'n2', title: 'New Lead Action', text: 'Tariq Al-Mansoor requested quotation for 50k units.', time: '1h ago', read: false },
  { id: 'n3', title: 'Payment Status Update', text: 'Invoice INV-2026-044 marked as Paid ($18,000).', time: '1d ago', read: true },
]

export const MOCK_SUBSCRIPTION = {
  currentPlan: 'Business Plan',
  price: '$199 / month',
  billingCycle: 'Monthly (Renews Sep 29, 2026)',
  features: [
    'Unlimited AI Business Matches',
    'Full B2B Lead CRM Pipeline',
    'B2B Quotation Generator & Invoicing',
    'Video Meetings & 5-Min Speed Matches',
    'Team Account Access (5 Members)',
    'Global Market Expansion Insights',
  ]
}

export const COUNTRY_OPTIONS = [
  'India', 'United Arab Emirates', 'United States', 'United Kingdom',
  'Singapore', 'Germany', 'Sweden', 'Australia', 'Japan', 'Saudi Arabia', 'Canada', 'France'
]

export const INDUSTRY_OPTIONS = [
  'Packaging & Manufacturing', 'Textiles & Apparel', 'E-Commerce & Logistics',
  'Finance & Capital', 'Technology & SaaS', 'Food & Beverage', 'Health & Pharmaceuticals'
]
