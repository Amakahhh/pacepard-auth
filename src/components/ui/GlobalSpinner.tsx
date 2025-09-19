import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';

const GlobalSpinner: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999
      }}
    >
      <img 
        src="/images/spinner.gif" 
        alt="Loading..." 
        className="w-12 h-12"
      />
    </div>
  );
};

export default GlobalSpinner;

