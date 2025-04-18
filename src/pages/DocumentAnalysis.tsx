
import { FC, useState } from 'react';
import LegalHeader from '@/components/LegalHeader';
import FileUpload from '@/components/FileUpload';
import DocumentAnalysisResult from '@/components/DocumentAnalysisResult';

const DocumentAnalysis: FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [documentText, setDocumentText] = useState('');
  const [analysisResult, setAnalysisResult] = useState<{
    entities: Array<{ text: string; type: string; start: number; end: number }>;
    keyPhrases: string[];
    sentiment: { positive: number; negative: number; neutral: number };
  } | null>(null);

  const handleFileUpload = (text: string) => {
    setDocumentText(text);
    setIsAnalyzing(true);
    
    // Mock API call - in a real app, this would be an actual NLP service
    setTimeout(() => {
      // Generate mock analysis results
      const mockAnalysis = {
        entities: [
          { text: 'Smith v. Jones', type: 'CASE', start: 0, end: 0 },
          { text: 'John Smith', type: 'PERSON', start: 0, end: 0 },
          { text: 'Sarah Jones', type: 'PERSON', start: 0, end: 0 },
          { text: 'Supreme Court', type: 'COURT', start: 0, end: 0 },
          { text: 'First Amendment', type: 'LAW', start: 0, end: 0 },
          { text: 'March 10, 2022', type: 'DATE', start: 0, end: 0 },
          { text: 'Legal Aid Society', type: 'ORG', start: 0, end: 0 },
          { text: 'Fourth Circuit', type: 'COURT', start: 0, end: 0 },
          { text: 'Civil Rights Act', type: 'LAW', start: 0, end: 0 },
        ],
        keyPhrases: [
          'due process', 
          'reasonable doubt', 
          'preponderance of evidence', 
          'motion to dismiss', 
          'constitutional rights',
          'summary judgment',
          'habeas corpus'
        ],
        sentiment: {
          positive: 0.35,
          negative: 0.25,
          neutral: 0.40
        }
      };
      
      setAnalysisResult(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <LegalHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-legal-navy mb-6">Document Analysis</h1>
        
        {!analysisResult ? (
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6">
              Upload a legal document to analyze key legal entities, sentiment, and extract important information.
            </p>
            <FileUpload onFileUpload={handleFileUpload} isLoading={isAnalyzing} />
          </div>
        ) : (
          <DocumentAnalysisResult 
            documentText={documentText}
            entities={analysisResult.entities}
            keyPhrases={analysisResult.keyPhrases}
            sentiment={analysisResult.sentiment}
          />
        )}
      </main>
      
      <footer className="bg-legal-navy text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 LegalLens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DocumentAnalysis;
