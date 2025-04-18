
import { FC, useState } from 'react';
import LegalHeader from '@/components/LegalHeader';
import FileUpload from '@/components/FileUpload';
import CasePrediction from '@/components/CasePrediction';

interface PredictionResult {
  outcome: string;
  probability: number;
  factors: Array<{
    name: string;
    impact: number;
    description: string;
  }>;
  similarCases: Array<{
    title: string;
    outcome: string;
    similarity: number;
    year: number;
  }>;
}

const CasePredictionPage: FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  const handleFileUpload = (text: string) => {
    setIsProcessing(true);
    
    // Mock API call - in a real app, this would be an actual ML prediction service
    setTimeout(() => {
      // Generate mock prediction results
      const mockPrediction: PredictionResult = {
        outcome: "Likely to Rule in Favor",
        probability: 0.78,
        factors: [
          {
            name: "Precedent Cases",
            impact: 0.65,
            description: "Strong precedent supports the plaintiff's position in similar cases"
          },
          {
            name: "Statutory Interpretation",
            impact: 0.42,
            description: "The plain language of the statute favors the plaintiff's reading"
          },
          {
            name: "Procedural Issues",
            impact: -0.25,
            description: "Some procedural defects may weaken the plaintiff's position"
          },
          {
            name: "Evidence Quality",
            impact: 0.35,
            description: "Documentary evidence appears strong and credible"
          },
          {
            name: "Legal Reasoning",
            impact: 0.51,
            description: "The legal argument follows established principles of interpretation"
          }
        ],
        similarCases: [
          {
            title: "Johnson v. Smith",
            outcome: "Ruled in Favor",
            similarity: 0.87,
            year: 2020
          },
          {
            title: "Williams v. County Board",
            outcome: "Ruled in Favor",
            similarity: 0.76,
            year: 2018
          },
          {
            title: "Davis v. State",
            outcome: "Ruled Against",
            similarity: 0.65,
            year: 2021
          },
          {
            title: "Henderson v. Corporation",
            outcome: "Ruled in Favor",
            similarity: 0.58,
            year: 2019
          }
        ]
      };
      
      setPredictionResult(mockPrediction);
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <LegalHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-legal-navy mb-6">Case Outcome Prediction</h1>
        
        {!predictionResult ? (
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6">
              Upload a legal brief or case document to get an AI-powered prediction of the likely outcome and key factors.
            </p>
            <FileUpload onFileUpload={handleFileUpload} isLoading={isProcessing} />
          </div>
        ) : (
          <CasePrediction prediction={predictionResult} />
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

export default CasePredictionPage;
