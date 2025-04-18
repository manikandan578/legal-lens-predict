
import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PredictionResult {
  outcome: string;
  probability: number;
  factors: Array<{
    name: string;
    impact: number; // -1 to 1 where positive is favorable
    description: string;
  }>;
  similarCases?: Array<{
    title: string;
    outcome: string;
    similarity: number;
    year: number;
  }>;
}

interface CasePredictionProps {
  prediction: PredictionResult;
}

const CasePrediction: FC<CasePredictionProps> = ({ prediction }) => {
  const getImpactColor = (impact: number) => {
    if (impact > 0.3) return 'text-green-600';
    if (impact < -0.3) return 'text-red-600';
    return 'text-yellow-600';
  };

  const getImpactIcon = (impact: number) => {
    if (impact > 0.3) return '↑';
    if (impact < -0.3) return '↓';
    return '→';
  };

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-legal-gold shadow-lg">
        <CardHeader className="bg-legal-lightgray">
          <CardTitle className="text-xl text-legal-navy">Case Outcome Prediction</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="col-span-1 flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 mb-4">
                <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="text-3xl font-bold text-legal-navy">
                    {Math.round(prediction.probability * 100)}%
                  </div>
                </div>
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E9E9E9"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={prediction.probability > 0.5 ? "#C5A45C" : "#E9D8A6"}
                    strokeWidth="3"
                    strokeDasharray={`${prediction.probability * 100}, 100`}
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-legal-navy">{prediction.outcome}</h3>
                <p className="text-sm text-gray-500">Predicted Outcome</p>
              </div>
            </div>
            
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-legal-navy">Key Contributing Factors</h3>
              <div className="space-y-4">
                {prediction.factors.map((factor, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{factor.name}</span>
                      <span className={`font-semibold ${getImpactColor(factor.impact)}`}>
                        {getImpactIcon(factor.impact)} {Math.abs(factor.impact * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${factor.impact > 0 ? "bg-green-500" : factor.impact < 0 ? "bg-red-500" : "bg-yellow-500"}`}
                        style={{ width: `${50 + (factor.impact * 50)}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {prediction.similarCases && prediction.similarCases.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-legal-navy">Similar Precedent Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prediction.similarCases.map((simCase, i) => (
                  <Card key={i} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{simCase.title}</h4>
                          <p className="text-sm text-gray-500">
                            {simCase.year} • {simCase.outcome}
                          </p>
                        </div>
                        <Badge className="bg-legal-navy">
                          {(simCase.similarity * 100).toFixed(0)}% Similar
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const Badge: FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
};

export default CasePrediction;
