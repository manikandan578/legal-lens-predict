
import { FC, useState } from 'react';
import LegalHeader from '@/components/LegalHeader';
import SimilarCaseFinder from '@/components/SimilarCaseFinder';

interface Case {
  id: string;
  title: string;
  court: string;
  date: string;
  outcome: string;
  summary: string;
  similarity: number;
}

const SimilarCasesPage: FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Case[]>([]);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    
    // Mock API call - in a real app, this would be an actual search service
    setTimeout(() => {
      // Generate mock search results
      const mockResults: Case[] = [
        {
          id: '1',
          title: 'Brown v. Board of Education',
          court: 'Supreme Court',
          date: 'May 17, 1954',
          outcome: 'Ruled in Favor',
          summary: 'Landmark decision of the U.S. Supreme Court in which the Court ruled that U.S. state laws establishing racial segregation in public schools are unconstitutional, even if the segregated schools are otherwise equal in quality.',
          similarity: 0.92
        },
        {
          id: '2',
          title: 'Plessy v. Ferguson',
          court: 'Supreme Court',
          date: 'May 18, 1896',
          outcome: 'Ruled Against',
          summary: 'U.S. Supreme Court decision that upheld the constitutionality of racial segregation under the "separate but equal" doctrine. The case involved a Louisiana state law that required separate railway cars for blacks and whites.',
          similarity: 0.85
        },
        {
          id: '3',
          title: 'Sweatt v. Painter',
          court: 'Supreme Court',
          date: 'June 5, 1950',
          outcome: 'Ruled in Favor',
          summary: 'Challenge to the "separate but equal" doctrine of racial segregation established by the Supreme Court\'s Plessy v. Ferguson decision. The case involved a black man, Heman Marion Sweatt, who was refused admission to the School of Law of the University of Texas.',
          similarity: 0.78
        },
        {
          id: '4',
          title: 'McLaurin v. Oklahoma State Regents',
          court: 'Supreme Court',
          date: 'June 5, 1950',
          outcome: 'Ruled in Favor',
          summary: 'Supreme Court decision that held that a state university could not provide different treatment to a student solely because of their race, as doing so violated the Equal Protection Clause of the Fourteenth Amendment.',
          similarity: 0.76
        },
        {
          id: '5',
          title: 'Sipuel v. Board of Regents of the University of Oklahoma',
          court: 'Supreme Court',
          date: 'January 12, 1948',
          outcome: 'Ruled in Favor',
          summary: 'The Supreme Court ruled unanimously that the state of Oklahoma must provide instruction for blacks equal to that of whites, requiring the admission of qualified black applicants to previously all-white state law schools.',
          similarity: 0.70
        },
      ];
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <LegalHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-legal-navy mb-6">Find Similar Cases</h1>
        
        <div className="mb-6">
          <p className="text-gray-700">
            Search for similar cases based on legal concepts, facts, or by citing a case. Our AI will find the most relevant precedents.
          </p>
        </div>
        
        <SimilarCaseFinder 
          onSearch={handleSearch}
          isLoading={isSearching}
          cases={searchResults}
        />
      </main>
      
      <footer className="bg-legal-navy text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 LegalLens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SimilarCasesPage;
