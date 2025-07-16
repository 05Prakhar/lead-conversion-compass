import { Lead, DataSource } from '../types/lead';

export const mockDataSources: DataSource[] = [
  {
    id: '1',
    name: 'Salesforce CRM',
    type: 'crm',
    icon: '🏢',
    connected: false,
    description: 'Connect your Salesforce CRM to import lead data'
  },
  {
    id: '2',
    name: 'Google Analytics',
    type: 'analytics',
    icon: '📊',
    connected: false,
    description: 'Integrate Google Analytics for web behavior insights'
  },
  {
    id: '3',
    name: 'Meta Analytics',
    type: 'social',
    icon: '📘',
    connected: false,
    description: 'Connect Meta (Facebook) Analytics for social media data'
  },
  {
    id: '4',
    name: 'HubSpot CRM',
    type: 'crm',
    icon: '🎯',
    connected: false,
    description: 'Import lead data from HubSpot CRM'
  },
  {
    id: '5',
    name: 'LinkedIn Analytics',
    type: 'social',
    icon: '💼',
    connected: false,
    description: 'Connect LinkedIn for B2B lead insights'
  },
  {
    id: '6',
    name: 'Mailchimp',
    type: 'analytics',
    icon: '📧',
    connected: false,
    description: 'Import email marketing data and engagement metrics'
  }
];

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    phone: '+1-555-0123',
    email: 'john.smith@email.com',
    dateOfInteraction: '2024-01-15',
    stageInFunnel: 'interest',
    courseInterestedIn: 'Data Science Bootcamp',
    conversionScore: 85,
    conversionPercentage: 78,
    preferredChannel: 'email',
    draftContent: 'Hi John, I hope you\'re doing well! I wanted to follow up on your interest in our Data Science Bootcamp. Based on your background in marketing analytics, I think you\'d really benefit from our specialized track that focuses on marketing data analysis.',
    dynamicPrice: 2499,
    recommendedLearningPath: ['Python Fundamentals', 'Statistics for Data Science', 'Machine Learning Basics', 'Data Visualization']
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    phone: '+1-555-0456',
    email: 'sarah.johnson@email.com',
    dateOfInteraction: '2024-01-18',
    stageInFunnel: 'evaluation',
    courseInterestedIn: 'Full Stack Web Development',
    conversionScore: 92,
    conversionPercentage: 88,
    preferredChannel: 'phone',
    draftContent: 'Hi Sarah, Thank you for your interest in our Full Stack Web Development program! I\'d love to schedule a quick call to discuss how our curriculum aligns with your career goals in frontend development.',
    dynamicPrice: 1899,
    recommendedLearningPath: ['HTML/CSS Fundamentals', 'JavaScript Mastery', 'React Development', 'Node.js Backend', 'Database Design']
  },
  {
    id: '3',
    name: 'Michael Chen',
    phone: '+1-555-0789',
    email: 'michael.chen@email.com',
    dateOfInteraction: '2024-01-20',
    stageInFunnel: 'consideration',
    courseInterestedIn: 'AI & Machine Learning',
    conversionScore: 73,
    conversionPercentage: 65,
    preferredChannel: 'whatsapp',
    draftContent: 'Hi Michael, I noticed you\'ve been exploring our AI & Machine Learning program. Given your engineering background, I think you\'d find our hands-on approach particularly engaging. Would you like to see some sample projects from our graduates?',
    dynamicPrice: 3299,
    recommendedLearningPath: ['Python Advanced', 'Linear Algebra', 'Deep Learning', 'Computer Vision', 'Natural Language Processing']
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    phone: '+1-555-0321',
    email: 'emily.rodriguez@email.com',
    dateOfInteraction: '2024-01-22',
    stageInFunnel: 'awareness',
    courseInterestedIn: 'Digital Marketing',
    conversionScore: 56,
    conversionPercentage: 45,
    preferredChannel: 'email',
    draftContent: 'Hi Emily, I see you\'ve shown interest in digital marketing. Our program covers everything from social media strategy to data-driven marketing analytics. Would you like to learn more about our curriculum?',
    dynamicPrice: 1599,
    recommendedLearningPath: ['Marketing Fundamentals', 'Social Media Strategy', 'SEO & SEM', 'Analytics & Reporting', 'Content Marketing']
  },
  {
    id: '5',
    name: 'David Wilson',
    phone: '+1-555-0654',
    email: 'david.wilson@email.com',
    dateOfInteraction: '2024-01-25',
    stageInFunnel: 'intent',
    courseInterestedIn: 'Cybersecurity',
    conversionScore: 88,
    conversionPercentage: 82,
    preferredChannel: 'phone',
    draftContent: 'Hi David, Great to see your interest in cybersecurity! With your IT background, you\'re well-positioned to excel in our program. I\'d love to discuss the certification paths available and how they align with your career goals.',
    dynamicPrice: 2799,
    recommendedLearningPath: ['Network Security', 'Ethical Hacking', 'Risk Management', 'Incident Response', 'Compliance & Governance']
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    phone: '+1-555-0987',
    email: 'lisa.thompson@email.com',
    dateOfInteraction: '2024-01-28',
    stageInFunnel: 'evaluation',
    courseInterestedIn: 'UX/UI Design',
    conversionScore: 79,
    conversionPercentage: 71,
    preferredChannel: 'email',
    draftContent: 'Hi Lisa, Thank you for your interest in our UX/UI Design program! I\'d love to show you some of the amazing portfolio projects our students have created. Would you like to schedule a portfolio review session?',
    dynamicPrice: 2199,
    recommendedLearningPath: ['Design Fundamentals', 'User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing']
  }
];

export const getFunnelStages = (currentStage: string) => {
  const stages = ['awareness', 'interest', 'consideration', 'intent', 'evaluation', 'purchase'];
  const currentIndex = stages.indexOf(currentStage);
  
  return stages.map((stage, index) => ({
    stage: stage.charAt(0).toUpperCase() + stage.slice(1),
    percentage: index <= currentIndex ? 100 : 0,
    status: index < currentIndex ? 'completed' : index === currentIndex ? 'current' : 'upcoming'
  }));
};