import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Calculator, Mail, Phone, User } from 'lucide-react';
import { mockLeads } from '@/data/mockData';
import { Lead } from '@/types/lead';

const Preview = () => {
  const [leads] = useState<Lead[]>(mockLeads);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCalculateScore = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate('/conversion-scores');
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Calculating conversion scores...</p>
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
              onClick={() => navigate('/')}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Lead Data Preview</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Review your imported leads data before generating conversion scores
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Total Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{leads.length}</p>
              <p className="text-sm text-muted-foreground">Active leads in pipeline</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Mail className="h-5 w-5 text-info" />
                Email Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{leads.length}</p>
              <p className="text-sm text-muted-foreground">100% email coverage</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Phone className="h-5 w-5 text-success" />
                Phone Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{leads.length}</p>
              <p className="text-sm text-muted-foreground">100% phone coverage</p>
            </CardContent>
          </Card>
        </div>

        {/* Leads Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Leads Data</CardTitle>
            <CardDescription>
              All imported leads with their current information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Date of Interaction</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Course Interest</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.phone}</TableCell>
                    <TableCell>
                      {new Date(lead.dateOfInteraction).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStageColor(lead.stageInFunnel)}>
                        {lead.stageInFunnel}
                      </Badge>
                    </TableCell>
                    <TableCell>{lead.courseInterestedIn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Calculate Button */}
        <div className="text-center">
          <Button 
            onClick={handleCalculateScore}
            size="lg"
            className="px-8"
          >
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Conversion Scores
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;