import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 border-t border-stone-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-stone-200">
          <Leaf className="w-6 h-6" />
          <span className="font-bold text-lg">בשיר סאלח - גינות ועצי נוי</span>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} כל הזכויות שמורות.
        </div>
        <div className="text-xs">
          www.bashier.shop | salah@bashier.shop
        </div>
      </div>
    </footer>
  );
};

export default Footer;