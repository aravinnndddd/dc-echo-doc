
import React from 'react';
import { COLORS } from '../constants';

interface EndpointCardProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
}

const EndpointCard: React.FC<EndpointCardProps> = ({ method, path, description }) => {
  const methodColor = method === 'GET' ? 'text-green-400' : 'text-blue-400';
  
  return (
    <div className="p-4 mb-4 rounded-lg bg-[#2b2d31] border-l-4 border-[#5865F2] hover:bg-[#35373c] transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <span className={`font-bold font-mono text-sm ${methodColor}`}>{method}</span>
        <span className="font-mono text-white text-sm bg-[#1e1f22] px-2 py-1 rounded">{path}</span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default EndpointCard;
