import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plug, CheckCircle } from 'lucide-react';
import { mockDataSources } from '@/data/mockData';
import { DataSource } from '@/types/lead';

const DataSources = () => {
  const [dataSources, setDataSources] = useState<DataSource[]>(mockDataSources);
  const navigate = useNavigate();

  const handleConnect = (id: string) => {
    setDataSources(prev => 
      prev.map(source => 
        source.id === id ? { ...source, connected: true } : source
      )
    );
  };

  const handlePreview = () => {
    navigate('/preview');
  };

  const connectedCount = dataSources.filter(source => source.connected).length;
  const canPreview = connectedCount > 0;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Connect Data Sources</h1>
          <p className="text-muted-foreground text-lg">
            Connect your data sources to start analyzing leads and predicting conversion rates
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Badge variant={connectedCount > 0 ? "default" : "secondary"}>
              {connectedCount} of {dataSources.length} connected
            </Badge>
          </div>
        </div>

        {/* Data Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dataSources.map((source) => (
            <Card key={source.id} className="border-border hover:shadow-soft transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{source.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{source.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {source.type.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  {source.connected && (
                    <CheckCircle className="h-5 w-5 text-success" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {source.description}
                </CardDescription>
                <Button 
                  onClick={() => handleConnect(source.id)}
                  disabled={source.connected}
                  className="w-full"
                  variant={source.connected ? "outline" : "default"}
                >
                  {source.connected ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Connected
                    </>
                  ) : (
                    <>
                      <Plug className="h-4 w-4 mr-2" />
                      Connect
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Button */}
        <div className="text-center">
          <Button 
            onClick={handlePreview}
            disabled={!canPreview}
            size="lg"
            className="px-8"
          >
            Preview Data
          </Button>
          {!canPreview && (
            <p className="text-muted-foreground mt-2">
              Connect at least one data source to preview leads
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSources;