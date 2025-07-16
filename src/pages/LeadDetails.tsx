import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Star, 
  Mail, 
  Phone, 
  MessageCircle, 
  Smartphone,
  DollarSign,
  BookOpen,
  TrendingUp,
  Target,
  Users,
  Clock
} from 'lucide-react';
import { mockLeads, getFunnelStages } from '@/data/mockData';
import { Lead } from '@/types/lead';

const LeadDetails = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState<Lead | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLeadDetails = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const foundLead = mockLeads.find(l => l.id === leadId);
      setLead(foundLead || null);
      setIsLoading(false);
    };

    loadLeadDetails();
  }, [leadId]);

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email': return <Mail className="h-4 w-4" />;
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'whatsapp': return <MessageCircle className="h-4 w-4" />;
      case 'sms': return <Smartphone className="h-4 w-4" />;
      default: return <Mail className="h-4 w-4" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-warning';
    return 'bg-destructive';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading lead details...</p>
        </div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Lead Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested lead could not be found.</p>
          <Button onClick={() => navigate('/conversion-scores')}>
            Back to Conversion Scores
          </Button>
        </div>
      </div>
    );
  }

  const funnelStages = getFunnelStages(lead.stageInFunnel);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/conversion-scores')}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{lead.name}</h1>
              <p className="text-muted-foreground">Lead conversion analysis</p>
            </div>
          </div>
        </div>

        {/* Lead Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Conversion Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-3xl font-bold ${getScoreColor(lead.conversionScore || 0)}`}>
                {lead.conversionScore}
              </p>
              <Progress 
                value={lead.conversionScore} 
                className="mt-2"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-info" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{lead.conversionPercentage}%</p>
              <p className="text-sm text-muted-foreground">Predicted likelihood</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-success" />
                Dynamic Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-success">${lead.dynamicPrice}</p>
              <p className="text-sm text-muted-foreground">Optimized pricing</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-warning" />
                Last Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-foreground">
                {new Date(lead.dateOfInteraction).toLocaleDateString()}
              </p>
              <p className="text-sm text-muted-foreground">Date of interaction</p>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Conversion Funnel
            </CardTitle>
            <CardDescription>
              Current stage: {lead.stageInFunnel}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelStages.map((stage, index) => (
                <div key={stage.stage} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium">{stage.stage}</div>
                  <div className="flex-1">
                    <Progress 
                      value={stage.percentage} 
                      className="h-3"
                    />
                  </div>
                  <div className="w-12 text-sm text-muted-foreground">
                    {stage.percentage}%
                  </div>
                  <Badge 
                    variant={
                      stage.status === 'completed' ? 'default' : 
                      stage.status === 'current' ? 'secondary' : 'outline'
                    }
                  >
                    {stage.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs for detailed information */}
        <Tabs defaultValue="communication" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Offers</TabsTrigger>
            <TabsTrigger value="learning">Learning Path</TabsTrigger>
          </TabsList>
          
          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getChannelIcon(lead.preferredChannel || 'email')}
                  Preferred Communication Channel
                </CardTitle>
                <CardDescription>
                  Recommended channel based on lead behavior analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="mb-4">
                  {lead.preferredChannel?.toUpperCase()}
                </Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Contact Information:</p>
                  <p className="text-sm text-muted-foreground">Email: {lead.email}</p>
                  <p className="text-sm text-muted-foreground">Phone: {lead.phone}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Draft Communication</CardTitle>
                <CardDescription>
                  AI-generated personalized message content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">{lead.draftContent}</p>
                </div>
                <Button className="mt-4">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Dynamic Pricing & Offers
                </CardTitle>
                <CardDescription>
                  Optimized pricing based on lead profile and behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Course Price</p>
                      <p className="text-sm text-muted-foreground">{lead.courseInterestedIn}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-success">${lead.dynamicPrice}</p>
                      <p className="text-sm text-muted-foreground">Personalized offer</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium text-success">Early Bird Discount</p>
                      <p className="text-sm text-muted-foreground">Save $200 if enrolled within 7 days</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium text-info">Payment Plan</p>
                      <p className="text-sm text-muted-foreground">3 monthly installments available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="learning">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recommended Learning Path
                </CardTitle>
                <CardDescription>
                  Personalized curriculum based on lead's background and goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lead.recommendedLearningPath?.map((module, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{module}</p>
                        <p className="text-sm text-muted-foreground">
                          Week {index + 1} • 2-3 hours/week
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeadDetails;