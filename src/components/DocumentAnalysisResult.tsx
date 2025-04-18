
import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Entity {
  text: string;
  type: string;
  start: number;
  end: number;
}

interface DocumentAnalysisResultProps {
  documentText: string;
  entities: Entity[];
  keyPhrases: string[];
  sentiment: { positive: number; negative: number; neutral: number };
}

const DocumentAnalysisResult: FC<DocumentAnalysisResultProps> = ({
  documentText,
  entities,
  keyPhrases,
  sentiment
}) => {
  // Group entities by type
  const entityTypes = [...new Set(entities.map(entity => entity.type))];
  
  // Mock function to get entity color based on type
  const getEntityColor = (type: string) => {
    const colors: Record<string, string> = {
      'PERSON': 'bg-blue-100 text-blue-800',
      'ORG': 'bg-green-100 text-green-800',
      'DATE': 'bg-purple-100 text-purple-800',
      'LAW': 'bg-legal-gold text-white',
      'CASE': 'bg-legal-navy text-white',
      'COURT': 'bg-legal-charcoal text-white',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  // Calculate sentiment score
  const sentimentScore = sentiment.positive - sentiment.negative;
  const getSentimentColor = () => {
    if (sentimentScore > 0.2) return 'text-green-500';
    if (sentimentScore < -0.2) return 'text-red-500';
    return 'text-yellow-500';
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-legal-lightgray">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Legal Entities</TabsTrigger>
          <TabsTrigger value="fulltext">Full Text</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Document Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <span className={`text-2xl font-bold ${getSentimentColor()}`}>
                    {sentimentScore.toFixed(2)}
                  </span>
                  <div className="ml-4 h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-legal-gold" style={{ width: `${(sentiment.positive * 100).toFixed(0)}%` }}></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Negative</span>
                  <span>Positive</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Document Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Word Count</span>
                  <span className="font-medium">{documentText.split(/\s+/).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Legal Entities</span>
                  <span className="font-medium">{entities.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Key Phrases</span>
                  <span className="font-medium">{keyPhrases.length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Document Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-legal-navy">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  </div>
                  <span className="mt-2 font-medium text-legal-navy">Legal Brief</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Key Legal Phrases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {keyPhrases.map((phrase, i) => (
                  <Badge key={i} className="bg-legal-navy text-white hover:bg-legal-navy/90">
                    {phrase}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="entities" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Legal Entities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {entityTypes.map(type => (
                  <div key={type} className="space-y-2">
                    <h3 className="font-medium text-gray-700">{type}</h3>
                    <div className="flex flex-wrap gap-2">
                      {entities
                        .filter(entity => entity.type === type)
                        .map((entity, i) => (
                          <Badge key={i} className={getEntityColor(type)}>
                            {entity.text}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="fulltext" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Document Text</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-50 rounded-md text-left max-h-96 overflow-y-auto">
                <p className="whitespace-pre-line">{documentText}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentAnalysisResult;
