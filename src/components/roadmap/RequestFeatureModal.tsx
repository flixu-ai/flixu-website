import React, { useState } from 'react';

export default function RequestFeatureModal({ isOpen, onClose, onSubmitSuccess, dict }: { isOpen: boolean, onClose: () => void, onSubmitSuccess: (f: any) => void, dict: any }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/roadmap/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });
      const data = await res.json();
      
      if (data.success) {
        onSubmitSuccess(data.feature);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setTitle('');
          setDescription('');
          onClose();
        }, 2000);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {showSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h3 className="font-serif text-2xl text-stone-900 mb-2">{dict.success}</h3>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-3xl text-stone-900 mb-2">{dict.modalTitle}</h3>
            <p className="text-stone-500 mb-6 font-sans text-sm">{dict.modalDesc}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1 font-sans">{dict.titleLabel}</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder={dict.titlePlaceholder}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-sans"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1 font-sans">{dict.descLabel}</label>
                <textarea 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder={dict.descPlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-sans resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-stone-100">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="px-5 py-2.5 text-stone-500 font-medium hover:text-stone-900 transition-colors font-sans text-sm cursor-pointer"
                >
                  {dict.cancel}
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting || !title.trim()}
                  className="px-6 py-2.5 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 font-sans shadow-sm cursor-pointer"
                >
                  {isSubmitting ? '...' : dict.submit}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
