
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface FileUploadProps {
  onFileUpload: (text: string) => void;
  isLoading?: boolean;
}

const FileUpload: FC<FileUploadProps> = ({ onFileUpload, isLoading = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      // Process file content
      console.log('File content loaded');
    };
    reader.readAsText(file);
  };

  const processUpload = () => {
    if (!selectedFile) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      onFileUpload(text);
    };
    reader.readAsText(selectedFile);
  };
  
  return (
    <Card className={`p-6 border-2 border-dashed transition-colors ${dragActive ? 'border-legal-gold bg-legal-lightgold/10' : 'border-gray-300'}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}>
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-legal-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
        
        <div className="text-center">
          <p className="text-lg font-medium">Drag & drop your legal document here</p>
          <p className="text-sm text-gray-500 mt-1">Supports .txt, .pdf, .docx files</p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">or</p>
          <label className="cursor-pointer bg-legal-navy text-white px-4 py-2 rounded-md hover:bg-legal-navy/90 transition-colors">
            Browse files
            <Input
              type="file"
              accept=".txt,.pdf,.docx"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
        
        {selectedFile && (
          <div className="w-full mt-4">
            <p className="text-sm text-gray-700 mb-2">Selected file: <span className="font-medium">{selectedFile.name}</span></p>
            <Button 
              className="w-full bg-legal-gold hover:bg-legal-gold/90 text-white"
              onClick={processUpload}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Analyze Document'}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FileUpload;
