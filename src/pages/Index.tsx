
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LegalHeader from '@/components/LegalHeader';

const Index: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <LegalHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-legal-navy text-white py-16">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-legal-lightgold">Legal</span>Lens
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Advanced legal document analysis and case prediction using state-of-the-art NLP
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/document-analysis')}
                className="bg-legal-gold hover:bg-legal-gold/90 text-white px-6 py-2 text-lg"
              >
                Analyze Documents
              </Button>
              <Button 
                onClick={() => navigate('/case-prediction')}
                className="bg-white hover:bg-gray-100 text-legal-navy px-6 py-2 text-lg"
              >
                Predict Case Outcomes
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-legal-navy mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-legal-lightgray p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-legal-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-legal-navy">Document Analysis</h3>
                  <p className="text-gray-600">
                    Extract key legal entities, concepts, and sentiment from any legal document with advanced NLP.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-legal-lightgray p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-legal-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20V10"></path>
                      <path d="M18 20V4"></path>
                      <path d="M6 20v-6"></path>
                      <path d="M2 20h20"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-legal-navy">Case Prediction</h3>
                  <p className="text-gray-600">
                    Predict case outcomes with machine learning, identifying key factors that influence results.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-legal-lightgray p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-legal-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-legal-navy">Similar Case Finder</h3>
                  <p className="text-gray-600">
                    Find relevant precedents and similar cases to strengthen your legal arguments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-legal-lightgray py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-legal-navy mb-12">How It Works</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Steps */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-legal-gold transform -translate-x-1/2"></div>
                
                {/* Step 1 */}
                <div className="relative mb-12 md:mb-24">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                      <h3 className="text-xl font-bold text-legal-navy mb-2">Upload Your Documents</h3>
                      <p className="text-gray-600">
                        Upload legal briefs, contracts, cases, or any legal document in common formats including PDF, DOCX, and plain text.
                      </p>
                    </div>
                    <div className="md:absolute left-1/2 transform -translate-x-1/2 order-1 md:order-2 mb-4 md:mb-0">
                      <div className="bg-legal-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
                    </div>
                    <div className="flex-1 md:pl-8 order-3"></div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative mb-12 md:mb-24">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 order-2 md:order-1"></div>
                    <div className="md:absolute left-1/2 transform -translate-x-1/2 order-1 md:order-2 mb-4 md:mb-0">
                      <div className="bg-legal-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
                    </div>
                    <div className="flex-1 md:pl-8 order-3">
                      <h3 className="text-xl font-bold text-legal-navy mb-2">AI-Powered Analysis</h3>
                      <p className="text-gray-600">
                        Our advanced NLP algorithms analyze your documents, extracting key entities, sentiments, and legal concepts.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                      <h3 className="text-xl font-bold text-legal-navy mb-2">Get Actionable Insights</h3>
                      <p className="text-gray-600">
                        Receive detailed analysis, case outcome predictions, and similar case recommendations to inform your legal strategy.
                      </p>
                    </div>
                    <div className="md:absolute left-1/2 transform -translate-x-1/2 order-1 md:order-2 mb-4 md:mb-0">
                      <div className="bg-legal-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
                    </div>
                    <div className="flex-1 md:pl-8 order-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-legal-navy mb-8">Ready to Transform Your Legal Research?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Try LegalLens today and experience the power of AI-driven legal analysis.
            </p>
            <Button 
              onClick={() => navigate('/document-analysis')}
              className="bg-legal-navy hover:bg-legal-navy/90 text-white px-8 py-3 text-lg"
            >
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-legal-navy text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-legal-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22M4 4h16M4 20h16M8 9l3 3M8 12l3-3M13 9l3 3M13 12l-3-3"></path>
                </svg>
                <span className="text-lg font-bold tracking-tight">
                  <span className="text-legal-lightgold">Legal</span>Lens
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Advanced legal document analysis with AI</p>
            </div>
            
            <div className="text-sm text-gray-400">
              &copy; 2025 LegalLens. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
