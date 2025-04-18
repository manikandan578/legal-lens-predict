
import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Case {
  id: string;
  title: string;
  court: string;
  date: string;
  outcome: string;
  summary: string;
  similarity: number;
}

interface SimilarCaseFinderProps {
  onSearch?: (query: string) => void;
  isLoading?: boolean;
  cases?: Case[];
}

const SimilarCaseFinder: FC<SimilarCaseFinderProps> = ({
  onSearch,
  isLoading = false,
  cases = []
}) => {
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  const getOutcomeColor = (outcome: string) => {
    const lowerOutcome = outcome.toLowerCase();
    if (lowerOutcome.includes('favor') || lowerOutcome.includes('affirmed')) return 'bg-green-100 text-green-800';
    if (lowerOutcome.includes('against') || lowerOutcome.includes('reversed')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-legal-lightgray">
          <CardTitle className="text-xl text-legal-navy">Similar Case Finder</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Input
              placeholder="Search for legal concepts, facts, or cite a case..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleSearch} 
              disabled={isLoading}
              className="bg-legal-navy hover:bg-legal-navy/90"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>
          
          {cases.length > 0 && (
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="w-full bg-legal-lightgray mb-4">
                <TabsTrigger value="list" className="flex-1">List View</TabsTrigger>
                <TabsTrigger value="cards" className="flex-1">Card View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list">
                <div className="space-y-4">
                  {cases.map((c) => (
                    <div key={c.id} className="border border-gray-200 rounded-md overflow-hidden">
                      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-legal-lightgray">
                        <div>
                          <h3 className="font-medium">{c.title}</h3>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <span>{c.court}</span>
                            <span className="mx-2">•</span>
                            <span>{c.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getOutcomeColor(c.outcome)}>
                            {c.outcome}
                          </Badge>
                          <Badge className="bg-legal-gold text-white">
                            {(c.similarity * 100).toFixed(0)}% Match
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-700">{c.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cards">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cases.map((c) => (
                    <Card key={c.id} className="border border-gray-200 h-full">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base">{c.title}</CardTitle>
                          <Badge className="bg-legal-gold text-white">
                            {(c.similarity * 100).toFixed(0)}%
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <span>{c.court}</span>
                          <span className="mx-2">•</span>
                          <span>{c.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <Badge className={`mb-2 ${getOutcomeColor(c.outcome)}`}>
                          {c.outcome}
                        </Badge>
                        <p className="text-sm text-gray-700">{c.summary}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
          
          {!cases.length && !isLoading && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-legal-lightgray mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-legal-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">No cases found</h3>
              <p className="mt-1 text-sm text-gray-500">Try searching for legal concepts, facts, or citing a case.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SimilarCaseFinder;
