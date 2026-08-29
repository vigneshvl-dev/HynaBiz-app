export const INITIAL_OWNER_PROFILE = {
  fullName: 'Vignesh V L',
  title: 'Founder & CEO',
  bio: 'Building technology and sustainable packaging solutions for modern businesses worldwide.',
  country: 'India',
  city: 'Bengaluru',
  languages: 'English, Tamil, Hindi',
  experienceYears: '8+',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
}

export const INITIAL_BUSINESS_PROFILE = {
  name: 'EcoPack Solutions Ltd.',
  logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
  description: 'Leading manufacturer of eco-friendly, biodegradable packaging solutions for global enterprise supply chains.',
  industry: 'Packaging & Manufacturing',
  businessType: 'Manufacturer',
  foundedYear: '2019',
  businessSize: '50-200 Employees',
  country: 'India',
  city: 'Bengaluru',
  website: 'https://ecopacksolutions.com',
}

export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Eco-Friendly Biodegradable Mailers',
    category: 'Packaging',
    description: 'Plant-based water-resistant mailer bags designed for e-commerce brands.',
    price: '$0.45 - $0.85 / unit',
    moq: '5,000 units',
    availability: 'In Stock',
    locations: 'Global shipping (India, UAE, USA, Europe)',
    specifications: '100% compostable, 80 micron thickness, custom brand print ready',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-2',
    name: 'Heavy-Duty Recyclable Shipping Boxes',
    category: 'Packaging',
    description: 'Double-walled corrugated shipping containers built for industrial freight.',
    price: '$1.20 - $2.50 / unit',
    moq: '1,000 units',
    availability: 'Made to order (7 days lead time)',
    locations: 'Worldwide',
    specifications: 'FSC certified Kraft paper, 32 ECT strength rating',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
  }
]

export const INITIAL_SERVICES = [
  {
    id: 'serv-1',
    name: 'Custom Sustainable Packaging Design',
    category: 'Design & Engineering',
    description: 'End-to-end packaging structural engineering and branding design services.',
    pricing: 'Custom Quote / Project',
    serviceArea: 'Global (Remote & On-site consulting)',
    availability: 'Immediate capacity',
    experience: '6+ years in sustainable materials',
    portfolio: 'Over 120+ successful brand product launches',
  }
]

export const MOCK_OPPORTUNITIES = [
  {
    id: 'opp-1',
    businessName: 'Dubai Logistics & Distribution Co.',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    industry: 'Logistics & Distribution',
    location: 'Dubai, UAE',
    compatibilityScore: 94,
    matchReasons: [
      'Your industry matches packaging & logistics needs',
      'They actively require eco-friendly packaging suppliers',
      'Your target market includes Dubai, UAE',
      'Both businesses hold verified company credentials'
    ],
    summary: 'Seeking exclusive Middle East distribution rights for biodegradable packaging materials.',
    status: 'Recommended',
    intentLevel: 'High',
    lastActive: '2 hours ago',
  },
  {
    id: 'opp-2',
    businessName: 'Apex Green Retail Group',
    logoUrl: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80',
    industry: 'Retail & Consumer Goods',
    location: 'London, UK',
    compatibilityScore: 89,
    matchReasons: [
      'High demand for certified compostable e-commerce mailers',
      'Looking to replace single-use plastic across 450 stores',
      'Budget aligned with your volume tier pricing'
    ],
    summary: 'RFP issued for annual supply contract of 2M eco mailer units.',
    status: 'In Discussion',
    intentLevel: 'High',
    lastActive: 'Yesterday',
  },
  {
    id: 'opp-3',
    businessName: 'Singapore BioTech Ventures',
    logoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
    industry: 'Venture Capital & Investment',
    location: 'Singapore',
    compatibilityScore: 86,
    matchReasons: [
      'Active ESG fund deploying Series A growth capital',
      'Matches your revenue stage & expansion targets'
    ],
    summary: 'Strategic growth investment and South-East Asia market entry support.',
    status: 'New',
    intentLevel: 'Medium',
    lastActive: '3 days ago',
  }
]

export const MOCK_CONNECTIONS = [
  {
    id: 'conn-1',
    businessName: 'Dubai Distribution Co.',
    contactName: 'Tariq Al-Mansoor',
    title: 'Head of Global Procurement',
    industry: 'Distribution',
    location: 'Dubai, UAE',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    compatibilityScore: 94,
    status: 'Connected',
    reason: 'Looking for distribution partner in Dubai.',
    sharedInterests: ['Sustainable Freight', 'Middle East Expansion', 'B2B Trade'],
  },
  {
    id: 'conn-2',
    businessName: 'Nordic Packaging Hub',
    contactName: 'Freja Lindqvist',
    title: 'Supply Chain Director',
    industry: 'Packaging',
    location: 'Stockholm, Sweden',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    logoUrl: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80',
    compatibilityScore: 88,
    status: 'Pending',
    reason: 'Interested in joint EU distribution partnership.',
    sharedInterests: ['European Norm Certifications', 'Circular Economy'],
  }
]

export const MOCK_MISSIONS = [
  {
    id: 'mission-1',
    title: 'Enter UAE & Middle East Market',
    targetGoal: 'Find 3 qualified regional distributors and establish warehouse logistics in Dubai.',
    timeline: '90 Days',
    progress: 65,
    tasks: [
      { id: 't1', label: 'Research Middle East packaging compliance', completed: true },
      { id: 't2', label: 'Identify top regional distributor candidates', completed: true },
      { id: 't3', label: 'Initiate initial Hyna AI introductions', completed: true },
      { id: 't4', label: 'Schedule distributor pitch meetings', completed: false },
      { id: 't5', label: 'Finalize distribution contract and launch', completed: false },
    ]
  },
  {
    id: 'mission-2',
    title: 'Launch Next-Gen Compostable Product Line',
    targetGoal: 'Onboard 10 strategic retail buyers for pre-orders.',
    timeline: '60 Days',
    progress: 35,
    tasks: [
      { id: 't2-1', label: 'Complete ASTM D6400 lab testing', completed: true },
      { id: 't2-2', label: 'Publish product catalog on HynaBiz', completed: true },
      { id: 't2-3', label: 'Send AI targeted proposals to retail buyers', completed: false },
      { id: 't2-4', label: 'Close 10 retail pre-orders', completed: false },
    ]
  }
]

export const MOCK_REQUIREMENTS = [
  {
    id: 'req-1',
    title: 'Looking for Exclusive UAE Packaging Distributor',
    description: 'We are seeking an established regional distributor with cold-chain packaging warehousing in Dubai.',
    type: 'Distributor',
    industry: 'Packaging & Logistics',
    location: 'Dubai, UAE',
    budget: '$50,000 - $150,000 Initial Stock',
    timeline: '1–3 Months',
    intentLevel: 'High',
    publishedDate: '2 days ago',
  }
]

export const MOCK_MESSAGES = [
  {
    id: 'chat-1',
    businessName: 'Dubai Distribution Co.',
    contactName: 'Tariq Al-Mansoor',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    unread: 1,
    lastActive: '10:42 AM',
    messages: [
      { id: 'm1', sender: 'them', text: 'Hello Vignesh! We reviewed EcoPack Solutions profile on HynaBiz. We are very interested in distributing your biodegradable mailers in Dubai.', time: 'Yesterday 4:15 PM' },
      { id: 'm2', sender: 'me', text: 'Hi Tariq! Great to connect with you. We are currently looking for strong partners in the UAE to expand our distribution.', time: 'Yesterday 5:30 PM' },
      { id: 'm3', sender: 'them', text: 'Excellent! Could we schedule a 20-minute introductory meeting tomorrow to discuss order volumes and exclusivity terms?', time: '10:42 AM' },
    ]
  }
]

export const MOCK_MEETINGS = [
  {
    id: 'meet-1',
    businessName: 'Dubai Distribution Co.',
    personName: 'Tariq Al-Mansoor',
    date: 'Tomorrow, Aug 30, 2026',
    time: '2:30 PM GST (4:00 PM IST)',
    purpose: 'Distribution Partnership Alignment & Terms',
    opportunity: 'UAE Market Expansion',
    status: 'Upcoming',
    meetingLink: 'https://hynabiz.com/meet/room-dubai-ecopack',
  }
]

export const COUNTRY_OPTIONS = [
  'India', 'United Arab Emirates', 'United States', 'United Kingdom',
  'Germany', 'Singapore', 'Japan', 'Australia', 'Canada', 'France',
  'Saudi Arabia', 'Qatar', 'Netherlands', 'South Korea', 'Brazil'
]

export const INDUSTRY_OPTIONS = [
  'Technology', 'Manufacturing', 'Packaging & Freight', 'Retail', 'Healthcare',
  'Finance & Capital', 'Education', 'Logistics & Supply Chain', 'Construction',
  'Food & Beverage', 'Fashion & Apparel', 'Agriculture', 'Energy & GreenTech',
  'Real Estate', 'Professional Services', 'Other'
]
