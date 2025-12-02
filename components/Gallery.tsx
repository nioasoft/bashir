import React from 'react';

const Gallery: React.FC = () => {
  // רשימת תמונות קבועה ואיכותית שנבדקה.
  // המבנה הוא: תמונה ראשונה גדולה, ו-8 תמונות רגילות מסביב. סה"כ 9 תמונות שיוצרות מלבן מושלם.
  const images = [
    {
      url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop&fm=webp",
      title: "עיצוב גינות יוקרה",
      isLarge: true // התמונה הראשית
    },
    {
      url: "https://images.unsplash.com/photo-1598902168289-275827c99651?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "עצי זית עתיקים",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "פריחה צבעונית",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1558904541014-efa843a96f01?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "מדשאות ירוקות",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "פינות ישיבה ופרגולות",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1592483648228-b35146a4330c?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "גינות טרופיות",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "שבילי אבן",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "צמחייה ארצישראלית",
      isLarge: false
    },
    {
      url: "https://images.unsplash.com/photo-1628191011993-43508d53bb52?q=80&w=800&auto=format&fit=crop&fm=webp",
      title: "תאורת גן וערב",
      isLarge: false
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">גלריית עבודות והשראה</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            טעימה קטנה מהפרויקטים שלנו. אנו משתמשים בצמחים האיכותיים ביותר ובעצי נוי מרהיבים ליצירת המראה המושלם עבור הגינה שלכם.
          </p>
        </div>

        {/* Grid Layout: 3 Columns. Row height fixed to 250px. */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-xl shadow-md ${
                img.isLarge ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;