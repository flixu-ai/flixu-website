import React, { useState } from 'react';
import { Sparkles, X, Check } from 'lucide-react';

export default function TranslationComparator() {
  const [activeEngine, setActiveEngine] = useState('deepl'); // 'deepl' | 'google'

  const engineData = {
    google: {
      name: 'Google Translate',
      translation: `„Cuando alguien dice <span class="bg-red-100 text-red-800 px-1 rounded line-through decoration-red-400">ahí es donde está enterrado el perro</span>, sabemos que hay un problema oculto... Nuestro chef les servirá un crujiente Wiener Schnitzel y esponjosas <span class="bg-red-100 text-red-800 px-1 rounded line-through decoration-red-400">albóndigas de albaricoque</span>...“`,
      errors: [
        { title: "Literal Idioms", desc: "Translates \"that's the crux of the matter\" literally into \"that's where the dog is buried\", confusing LATAM readers." },
        { title: "Culinary Errors", desc: "Translates \"Marillenknödel\" (sweet apricot dumplings) as \"apricot meatballs\"." },
        { title: "Cultural Context", desc: "Reduces the unique Austrian \"Heurigen\" to a generic \"wine tavern\"." }
      ]
    },
    deepl: {
      name: 'DeepL Translator',
      translation: `„Cuando alguien dice <span class="bg-red-100 text-red-800 px-1 rounded line-through decoration-red-400">da liegt der Hund begraben</span>, sabemos que hay un problema oculto... Nuestro chef les servirá un crujiente escalope vienés y esponjosas <span class="bg-red-100 text-red-800 px-1 rounded line-through decoration-red-400">bolas de albaricoque</span>...“`,
      errors: [
        { title: "Untranslated Idioms", desc: "Fails to recognize the German proverb and leaves it completely untranslated in the Spanish output." },
        { title: "Culinary Errors", desc: "Translates the dessert \"Marillenknödel\" literally as \"apricot balls\", losing the culinary essence." },
        { title: "Missed Cultural Terms", desc: "Leaves Austrian terms like \"Heurigen\", \"Sturm\" and \"Mahlzeit\" untranslated without explanation." }
      ]
    }
  };

  const currentData = engineData[activeEngine];

  return (
    <div className="border border-stone-200 rounded-lg overflow-hidden bg-white shadow-xl w-full mx-auto relative group">
      
      {/* Header Tabs */}
      <div className="flex border-b border-stone-200 bg-stone-50 justify-between items-center sm:pr-0 overflow-x-auto">
        <div className="flex">
          <button 
            onClick={() => setActiveEngine('deepl')}
            className={`px-6 py-4 text-sm font-bold transition-all ${activeEngine === 'deepl' ? 'bg-white text-stone-900 border-r border-stone-200 shadow-[0_2px_0_0_rgba(0,0,0,0.05)_relative] z-10' : 'text-stone-500 hover:text-stone-700 hover:bg-stone-50 border-r border-transparent'}`}
          >
            DeepL
          </button>
          <button 
            onClick={() => setActiveEngine('google')}
            className={`px-6 py-4 text-sm font-bold transition-all ${activeEngine === 'google' ? 'bg-white text-stone-900 border-x border-stone-200 shadow-[0_2px_0_0_rgba(0,0,0,0.05)_relative] z-10' : 'text-stone-500 hover:text-stone-700 hover:bg-stone-50 border-x border-transparent'}`}
          >
            Google Translate
          </button>
        </div>
        <div className="px-6 py-4 text-sm font-bold text-orange-700 bg-orange-50/50 border-l border-orange-100 flex items-center gap-2 whitespace-nowrap">
          <Sparkles className="w-4 h-4" /> 
          <span>Flixu Context Engine</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
        {/* Left Side (Raw API) */}
        <div className="p-8 relative bg-stone-50">
            <span className="absolute top-6 right-6 text-[10px] font-mono uppercase bg-red-100 text-red-700 px-2 py-1 rounded inline-flex items-center gap-1"><X className="w-3 h-3" /> Context Blind</span>
            
            <div className="mb-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">Original Text (Austrian German)</div>
              <p className="text-sm text-stone-500 italic border-l-2 border-stone-200 pl-3">„Wenn jemand sagt 'da liegt der Hund begraben', wissen wir, dass es um ein verborgenes Problem geht... Unser Küchenchef serviert Ihnen knuspriges Wiener Schnitzel und flaumige Marillenknödel...“</p>
            </div>

            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">{currentData.name} (Spanish)</div>
            <p 
              className="text-stone-600 leading-relaxed text-sm animate-fade-in" 
              key={`${activeEngine}-text`}
              dangerouslySetInnerHTML={{ __html: currentData.translation }} 
            />

            <div className="mt-6 space-y-2 animate-fade-in" key={`${activeEngine}-errors`}>
              {currentData.errors.map((error, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-500">
                  <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" /> 
                  <span><strong>{error.title}:</strong> {error.desc}</span>
                </div>
              ))}
            </div>
        </div>
        
        {/* Right Side (Flixu) */}
        <div className="p-8 relative bg-white">
            <span className="absolute top-6 right-6 text-[10px] font-mono uppercase bg-green-100 text-green-700 px-2 py-1 rounded inline-flex items-center gap-1"><Check className="w-3 h-3" /> Culturally Aware</span>
            
            <div className="mb-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">Context Injected</div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-1 rounded-sm font-mono">Target: LATAM</span>
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-1 rounded-sm font-mono">Domain: Gastronomy</span>
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-1 rounded-sm font-mono">Glossary: Austrian Cuisine</span>
              </div>
            </div>

            <div className="text-[10px] font-mono uppercase tracking-widest text-orange-700 mb-2">Flixu Output (Spanish)</div>
            <p className="text-stone-900 leading-relaxed text-sm font-medium">
              „Cuando alguien dice <span className="bg-orange-100 text-orange-900 px-1 rounded">ahí está el meollo del asunto</span>, sabemos que se trata de un problema oculto... Nuestro chef les servirá un crujiente Wiener Schnitzel y esponjosos <span className="bg-orange-100 text-orange-900 px-1 rounded">Marillenknödel</span>...“
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-2 text-xs text-stone-600"><Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" /> <span><strong>Dynamic Adaptation:</strong> Detects the Austrian idiom and replaces it with the correct localized LATAM equivalent.</span></div>
              <div className="flex items-start gap-2 text-xs text-stone-600"><Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" /> <span><strong>Domain Dictionary:</strong> Recognizes "Marillenknödel" via glossary as a protected culinary term, preserving the cultural authenticity.</span></div>
            </div>
        </div>
      </div>
    </div>
  );
}
