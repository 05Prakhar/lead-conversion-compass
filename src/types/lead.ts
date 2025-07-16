export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  dateOfInteraction: string;
  stageInFunnel: 'awareness' | 'interest' | 'consideration' | 'intent' | 'evaluation' | 'purchase';
  courseInterestedIn: string;
  conversionScore?: number;
  conversionPercentage?: number;
  preferredChannel?: 'email' | 'phone' | 'whatsapp' | 'sms';
  draftContent?: string;
  dynamicPrice?: number;
  recommendedLearningPath?: string[];
}

export interface DataSource {
  id: string;
  name: string;
  type: 'crm' | 'analytics' | 'social';
  icon: string;
  connected: boolean;
  description: string;
}

export interface ConversionFunnelStage {
  stage: string;
  percentage: number;
  status: 'completed' | 'current' | 'upcoming';
}