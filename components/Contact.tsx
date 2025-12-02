import React from 'react';
import { MapPin, Mail, Globe, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="p-10 md:p-16 md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-8">צור קשר</h2>
            <p className="mb-10 text-stone-100 text-lg">
              מוכנים להתחיל בפרויקט? בשיר והצוות מחכים לשמוע מכם ולהפוך את החלום למציאות.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">כתובת</h4>
                  <p className="text-stone-100">רחוב טמרה 1, טמרה</p>
                  <p className="text-stone-200 text-sm">מיקוד: 3081100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">מייל</h4>
                  <a href="mailto:salah@bashier.shop" className="text-stone-100 hover:text-white underline">
                    salah@bashier.shop
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">אתר</h4>
                  <a href="https://www.bashier.shop" className="text-stone-100 hover:text-white underline">
                    www.bashier.shop
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">טלפון</h4>
                  <a href="tel:0500000000" className="text-stone-100 hover:text-white">
                    *לחץ לחיוג*
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side (Simulated image for aesthetics) */}
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=800&auto=format&fit=crop&fm=webp" 
              alt="Garden location atmosphere" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;