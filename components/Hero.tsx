import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.webp" 
          alt="Bashir Salah Garden Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
          בשיר סאלח<br/>
          <span className="text-accent text-3xl md:text-5xl">גינות ועצי נוי</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md text-stone-100 font-light">
          מתכננים, בונים ומעצבים את גינת החלומות שלכם.
          חברה גדולה ומובילה עם צוות מקצועי ומנוסה של 30 עובדים.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
             צור קשר עכשיו
            <Phone className="w-5 h-5" />
          </a>
          <a 
            href="#gallery" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
          >
            לגלריית העבודות
            <ArrowLeft className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;