import React from 'react';

export const Logo: React.FC = () => {
  return (
    <svg className="h-10 w-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="24" cy="24" r="20" fill="#ffffff" stroke="#333333" strokeWidth="2" />
      <circle cx="24" cy="24" r="16" fill="transparent" stroke="#333333" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="3" fill="#333333" />
      <line x1="24" y1="5" x2="24" y2="11" stroke="#333333" strokeWidth="2" />
      <line x1="24" y1="37" x2="24" y2="43" stroke="#333333" strokeWidth="2" />
      <line x1="5" y1="24" x2="11" y2="24" stroke="#333333" strokeWidth="2" />
      <line x1="37" y1="24" x2="43" y2="24" stroke="#333333" strokeWidth="2" />
      <line x1="12" y1="12" x2="16" y2="16" stroke="#333333" strokeWidth="2" />
      <line x1="32" y1="32" x2="36" y2="36" stroke="#333333" strokeWidth="2" />
      <line x1="12" y1="36" x2="16" y2="32" stroke="#333333" strokeWidth="2" />
      <line x1="32" y1="16" x2="36" y2="12" stroke="#333333" strokeWidth="2" />
    </svg>
  );
};
