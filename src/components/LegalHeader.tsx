
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const LegalHeader: FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-legal-navy p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-legal-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1v22M4 4h16M4 20h16M8 9l3 3M8 12l3-3M13 9l3 3M13 12l-3-3"></path>
          </svg>
          <h1 className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-legal-lightgold">Legal</span>Lens
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-legal-lightgold transition-colors cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="hover:text-legal-lightgold transition-colors cursor-pointer" onClick={() => navigate('/document-analysis')}>Document Analysis</li>
            <li className="hover:text-legal-lightgold transition-colors cursor-pointer" onClick={() => navigate('/case-prediction')}>Case Prediction</li>
            <li className="hover:text-legal-lightgold transition-colors cursor-pointer" onClick={() => navigate('/similar-cases')}>Similar Cases</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LegalHeader;
