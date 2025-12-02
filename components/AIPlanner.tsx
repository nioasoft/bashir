import React, { useState } from 'react';
import { generateGardenImage, generateGardenAdvice } from '../services/geminiService';
import { Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';

const AIPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedTip, setGeneratedTip] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedTip(null);

    try {
      // Parallel execution for better UX
      const [imgData, advice] = await Promise.all([
        generateGardenImage(prompt),
        generateGardenAdvice(prompt)
      ]);

      if (imgData) {
        setGeneratedImage(imgData);
      } else {
        setError("לא הצלחנו לייצר תמונה, אנא נסה שנית.");
      }
      setGeneratedTip(advice);
      
    } catch (err) {
      setError("אירעה שגיאה בתקשורת עם השרת. אנא בדוק את החיבור שלך.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">מופעל על ידי Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">דמיין את גינת החלומות שלך</h2>
          <p className="text-stone-300 text-lg">
            תאר לנו את הגינה שאתה חולם עליה, והבינה המלאכותית שלנו תייצר עבורך הדמיה ויזואלית וטיפים מקצועיים באופן מיידי.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-stone-800/50 backdrop-blur-md p-6 rounded-2xl border border-stone-700 shadow-xl">
          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="לדוגמה: גינה טרופית עם מפל מים, עצי דקל ושביל אבנים..."
              className="flex-1 bg-stone-900/80 border border-stone-600 rounded-xl px-6 py-4 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <button
              type="submit"
              disabled={loading || !prompt}
              className="bg-gradient-to-r from-primary to-green-600 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {loading ? 'מייצר...' : 'צור הדמיה'}
            </button>
          </form>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6 text-center">
              {error}
            </div>
          )}

          {(generatedImage || generatedTip) && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div className="relative group">
                {generatedImage ? (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-stone-700">
                     <img 
                      src={generatedImage} 
                      alt="Generated Garden" 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                        AI Generated (WebP Optimized)
                    </div>
                  </div>
                ) : (
                   <div className="h-64 bg-stone-700 rounded-xl flex items-center justify-center">
                     <ImageIcon className="w-12 h-12 text-stone-500" />
                   </div>
                )}
              </div>

              <div className="flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-accent mb-4">החזון שלך</h3>
                 <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed text-stone-200">
                      "{generatedTip}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-sm text-stone-400">
                            * זוהי הדמיה ראשונית. הצוות שלנו בבשיר סאלח ישמח להפוך את התמונה הזו לתוכנית עבודה אמיתית.
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;