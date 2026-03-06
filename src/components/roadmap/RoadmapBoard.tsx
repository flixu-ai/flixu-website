import React, { useState } from 'react';
import RoadmapCard from './RoadmapCard';
import RequestFeatureModal from './RequestFeatureModal';

type Feature = {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'launched' | 'requested';
  upvotes: number;
};

export default function RoadmapBoard({ initialFeatures, dict }: { initialFeatures: Feature[], dict: any }) {
  const [features, setFeatures] = useState(initialFeatures);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpvote = async (id: string) => {
    // Optimistic update
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, upvotes: f.upvotes + 1 } : f));
    
    // API Call
    try {
      await fetch('/api/roadmap/upvote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleNewFeature = (newFeature: Feature) => {
    setFeatures(prev => [newFeature, ...prev]);
  };

  const grouped = {
    launched: features.filter(f => f.status === 'launched').sort((a,b) => b.upvotes - a.upvotes),
    'in-progress': features.filter(f => f.status === 'in-progress').sort((a,b) => b.upvotes - a.upvotes),
    planned: features.filter(f => f.status === 'planned').sort((a,b) => b.upvotes - a.upvotes),
    requested: features.filter(f => f.status === 'requested').sort((a,b) => b.upvotes - a.upvotes),
  };

  const Column = ({ title, items, colorClass }: { title: string, items: Feature[], colorClass: string }) => (
    <div className="flex-1 min-w-[300px] flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-3 h-3 rounded-full ${colorClass}`}></span>
        <h3 className="font-serif text-2xl text-stone-900">{title}</h3>
        <span className="text-stone-400 text-sm ml-auto">{items.length}</span>
      </div>
      <div className="flex flex-col gap-4">
        {items.map(f => (
          <RoadmapCard key={f.id} feature={f} onUpvote={() => handleUpvote(f.id)} dict={dict} />
        ))}
        {items.length === 0 && (
          <div className="p-6 border border-dashed border-stone-200 rounded-2xl text-stone-400 text-center text-sm font-sans pt-8 pb-8">
            No features in this column.
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-12">
        <p className="text-stone-600 font-sans text-xl max-w-2xl">{dict.sub}</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition-colors cursor-pointer shadow-sm ml-4 whitespace-nowrap"
        >
          {dict.suggestFeature}
        </button>
      </div>

      {/* Grid wrapper for the 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <Column title={dict.badges['launched']} items={grouped.launched} colorClass="bg-green-500" />
        <Column title={dict.badges['in-progress']} items={grouped['in-progress']} colorClass="bg-orange-500" />
        <Column title={dict.badges['planned']} items={grouped.planned} colorClass="bg-blue-500" />
        <Column title={dict.badges['requested']} items={grouped.requested} colorClass="bg-stone-300" />
      </div>

      <RequestFeatureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmitSuccess={handleNewFeature}
        dict={dict}
      />
    </div>
  );
}
