import React from 'react';
import { Shovel, Droplets, Scissors, Flower, Sun, Ruler } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "הקמת גינות",
      description: "תכנון והקמה מאפס של גינות פרטיות וציבוריות בהתאמה אישית.",
      icon: <Shovel className="w-8 h-8 text-white" />
    },
    {
      title: "מערכות השקיה",
      description: "התקנת מערכות השקיה ממוחשבות וחסכוניות במים.",
      icon: <Droplets className="w-8 h-8 text-white" />
    },
    {
      title: "גיזום ועיצוב",
      description: "עיצוב עצים ושיחים, גיזום מקצועי ופיסול בצמחיה.",
      icon: <Scissors className="w-8 h-8 text-white" />
    },
    {
      title: "עצי נוי וצמחייה",
      description: "מבחר ענק של עצי נוי, עצי פרי ופרחים עונתיים.",
      icon: <Flower className="w-8 h-8 text-white" />
    },
    {
      title: "תאורת גן",
      description: "שילוב תאורה אומנותית להדגשת יופי הגינה בשעות הלילה.",
      icon: <Sun className="w-8 h-8 text-white" />
    },
    {
      title: "אדריכלות נוף",
      description: "ייעוץ ותכנון אדריכלי לניצול מיטבי של השטח.",
      icon: <Ruler className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="services" className="pt-12 pb-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">השירותים שלנו</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            אנו מספקים מעטפת מלאה של שירותים לגינה שלך, הכל תחת קורת גג אחת ומתוך מחויבות למצוינות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-primary group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;