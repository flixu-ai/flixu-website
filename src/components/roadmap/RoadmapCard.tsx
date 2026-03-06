import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

type Feature = {
  id: string;
  title: string;
  description: string;
  status: string;
  upvotes: number;
};

export default function RoadmapCard({ feature, onUpvote, dict }: { feature: Feature, onUpvote: () => void, dict: any }) {
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) return; // Prevent double voting locally
    setUpvoted(true);
    onUpvote();
  };

  return (
    <div className="p-6 bg-white border border-stone-200/60 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="flex justify-between items-start gap-4">
        <h4 className="font-sans font-medium text-stone-900 leading-snug">{feature.title}</h4>
      </div>
      
      {feature.description && (
        <p className="text-stone-500 text-sm leading-relaxed font-sans">{feature.description}</p>
      )}
      
      <div className="mt-2 pt-4 border-t border-stone-100 flex justify-between items-center">
        <button
          onClick={handleUpvote}
          disabled={upvoted}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors font-sans cursor-pointer ${
            upvoted 
              ? 'bg-orange-50 text-orange-700 border border-orange-200' 
              : 'bg-stone-50 text-stone-600 border border-stone-200 hover:bg-stone-100'
          }`}
        >
          <ArrowUp size={14} className={upvoted ? 'text-orange-600' : 'text-stone-500'} />
          {feature.upvotes + (upvoted ? 1 : 0)} {upvoted ? dict.upvoted : dict.upvote}
        </button>
      </div>
    </div>
  );
}
