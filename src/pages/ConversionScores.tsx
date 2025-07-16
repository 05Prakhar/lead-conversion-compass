import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, TrendingUp, Star, AlertCircle } from 'lucide-react';
import { mockLeads } from '@/data/mockData';
import { Lead } from '@/types/lead';

const ConversionScores = () => {
  const [leads] = useState<Lead[]>(mockLeads);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLeadClick = async (leadId: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate(`/lead-details/${leadId}`);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <Star className="h-4 w-4 text-success" />;
    if (score >= 60) return <TrendingUp className="h-4 w-4 text-warning" />;
    return <AlertCircle className="h-4 w-4 text-destructive" />;
  };

  const getStageColor = (stage: string) => {
    const colors = {
      awareness: 'bg-muted text-muted-foreground',
      interest: 'bg-info/20 text-info',
      consideration: 'bg-warning/20 text-warning',
      intent: 'bg-success/20 text-success',
      evaluation: 'bg-primary/20 text-primary',
      purchase: 'bg-success text-success-foreground'
    };
    return colors[stage as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const averageScore = Math.round(leads.reduce((acc, lead) => acc + (lead.conversionScore || 0), 0) / leads.length);
  const highScoreLeads = leads.filter(lead => (lead.conversionScore || 0) >= 80).length;
  const lowScoreLeads = leads.filter(lead => (lead.conversionScore || 0) < 60).length;

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

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/preview')}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Conversion Scores</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            AI-powered conversion predictions for each lead
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{averageScore}</p>
              <p className="text-sm text-muted-foreground">Overall conversion potential</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-success" />
                High Score Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-success">{highScoreLeads}</p>
              <p className="text-sm text-muted-foreground">80+ conversion score</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Low Score Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-destructive">{lowScoreLeads}</p>
              <p className="text-sm text-muted-foreground">Below 60 conversion score</p>
            </CardContent>
          </Card>
        </div>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Conversion Scores</CardTitle>
            <CardDescription>
              Click on any lead to view detailed conversion insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Course Interest</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Conversion Score</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads
                  .sort((a, b) => (b.conversionScore || 0) - (a.conversionScore || 0))
                  .map((lead) => (
                  <TableRow 
                    key={lead.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleLeadClick(lead.id)}
                  >
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.courseInterestedIn}</TableCell>
                    <TableCell>
                      <Badge className={getStageColor(lead.stageInFunnel)}>
                        {lead.stageInFunnel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getScoreIcon(lead.conversionScore || 0)}
                        <span className={`font-bold ${getScoreColor(lead.conversionScore || 0)}`}>
                          {lead.conversionScore}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(lead.dateOfInteraction).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConversionScores;