# Career Growth Catalyst

An AI-powered, self-serve tool designed to re-engage and convert cold leads by providing immediate, personalized value through professional skill gap analysis and course recommendations.

## Overview

The Career Growth Catalyst is a sophisticated lead reactivation system that transforms dormant leads into enrolled students by diagnosing their professional skill gaps against current job market demands and presenting personalized learning solutions.

## Project Purpose

To reactivate cold leads (contacts who showed interest in career tracks over 90 days ago but have since gone dormant) by providing immediate value through:
- Personalized skill gap analysis
- Real-time job market alignment
- Tailored course recommendations
- Dynamic pricing and offers

## Funnel Design: From Dormant to Enrolled

### 1. Cold Lead: The Starting Point
- **Profile**: Contacts in CRM who showed interest in career tracks 90+ days ago
- **Status**: Dormant and disengaged
- **Mindset**: Likely forgotten brand value proposition

### 2. The Hook: Transition to Warm
- **AI Intervention**: Automated workflow identifies dormant leads
- **Personalized Email**: AI-generated hyper-personalized outreach
- **Value Proposition**: Free Career Growth Catalyst tool
- **CTA**: "Build Your Free Career Map"

### 3. Warm Lead: The "Aha!" Moment
- **Action**: Lead clicks link and accesses interactive tool
- **Mindset**: Curiosity piqued, actively re-engaging
- **Outcome**: Receiving personal benefit from brand interaction

### 4. The Conversion: The Seamless Solution
- **Action**: User receives skill gap diagnosis and actionable learning path
- **Mindset**: Empowered with knowledge, sees courses as logical next step
- **Result**: Clear path to career goals through our programs

## Key Features

### Core Tool Functionality

#### Step 1: Welcome & Re-Engagement
- Clean landing page with career objective confirmation
- **AI Integration**: CRM-pulled personalization (name, past interests)
- Option to update career objectives

#### Step 2: AI-Powered Skill Gap Analysis
- Interactive diagnostic interface
- **AI Integration**: Real-time job portal scraping for current skill requirements
- Dynamic skill list generation for specific roles (e.g., Data Scientist in India)

#### Step 3: Personalized Report & Conversion
- Instant transformation to personalized career report
- **AI Integration**: Salary data analysis for skill gap monetization
- Visual learning path with direct CTA: "Unlock Module 1 for Free"

## Advanced AI Integrations

### 1. Predictive Lead Scoring and Prioritization
- **Function**: Pre-email AI analysis of cold lead backlog
- **Scoring**: Reactivation Probability Score (RPS) 1-100
- **Criteria**: Original lead source, job title, past engagement
- **Application**: 
  - High RPS (>75): Priority + human follow-up flagging
  - Low RPS: Long-term nurturing track
- **Impact**: Optimized resource allocation and funnel efficiency

### 2. Dynamic Pricing and Personalized Offers
- **Function**: Real-time offer optimization at conversion point
- **Criteria**: RPS score + tool engagement level
- **Applications**:
  - High engagement + high RPS: Time-sensitive 15% discount
  - Single skill focus: Bundled package offers
  - Standard leads: Regular pricing
- **Impact**: Revenue maximization without blanket discounts

### 3. Predictive Learning Path Recommendations
- **Function**: AI-powered course sequence optimization
- **Analysis**: Successful student paths + current job market demands
- **Output**: Visual "Personalized Learning Roadmap"
- **Display**: Clear sequence from foundation → specialization → capstone
- **Impact**: Positions courses as structured career mastery journey

### 4. AI-Powered Content Curation
- **Function**: Content library scanning and tagging
- **Applications**:
  - Hook email: Relevant case study P.S.
  - Report page: "Your Curated Resources" section
  - Targeted blog posts and videos for specific skill gaps
- **Impact**: Establishes expertise, builds trust, facilitates conversion

## Technical Architecture

### Frontend Components
- **Data Sources Integration**: CRM, Google Analytics, Meta Analytics connectivity
- **Lead Preview**: Tabular lead management with filtering
- **Conversion Scoring**: Predictive analytics dashboard
- **Lead Details**: Individual lead conversion funnel visualization

### Backend Integrations
- **CRM Integration**: Lead data synchronization
- **Job Market API**: Real-time skill demand scraping
- **AI Models**: 
  - Lead scoring algorithms
  - Content recommendation engine
  - Pricing optimization
  - Learning path generation

### Key Technologies
- React + TypeScript
- Tailwind CSS
- Real-time data processing
- AI/ML integration APIs
- CRM connectors

## Getting Started

### Prerequisites
- Node.js & npm
- CRM integration credentials
- AI service API keys

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd career-growth-catalyst

# Install dependencies
npm install

# Start development server
npm run dev
```

### Configuration
1. Configure CRM integration in data sources
2. Set up AI service credentials
3. Configure job market data scraping APIs
4. Set up email automation workflows

## Usage Flow

1. **Admin Setup**: Connect data sources (CRM, Analytics)
2. **Lead Identification**: AI identifies cold leads for reactivation
3. **Email Campaign**: Automated personalized outreach
4. **Tool Engagement**: Leads interact with Career Growth Catalyst
5. **Conversion Tracking**: Monitor lead progression through funnel
6. **Analytics**: Track conversion rates and optimize campaigns

## Success Metrics

- **Reactivation Rate**: % of cold leads who engage with tool
- **Conversion Rate**: % of tool users who enroll in courses
- **Revenue Impact**: Incremental revenue from reactivated leads
- **Engagement Quality**: Time spent on tool, completion rates
- **Lead Scoring Accuracy**: RPS prediction success rate

## Future Enhancements

- Advanced ML models for better lead scoring
- Integration with additional job market data sources
- A/B testing framework for email templates
- Mobile app version of the tool
- Integration with video conferencing for sales calls

## Project Link
https://lead-conversion-compass.lovable.app/

## Contributing

Please read our contribution guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.
