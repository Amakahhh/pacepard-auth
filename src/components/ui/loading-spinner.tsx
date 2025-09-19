import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        className="w-full h-full animate-spin" 
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: '1.5s' }}
      >
        {/* Main curved line with dashes */}
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="#000000"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Secondary curved line */}
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="#000000"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 3"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Arrow indicators */}
        <path
          d="M28 16 L24 14 L24 18 Z"
          fill="#000000"
          opacity="0.8"
        />
        <path
          d="M22 16 L20 14 L20 18 Z"
          fill="#000000"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;

