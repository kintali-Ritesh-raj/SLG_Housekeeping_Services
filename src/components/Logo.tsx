import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full">
      <Sparkles size={24} className="text-white" />
    </div>
  );
};

export default Logo;