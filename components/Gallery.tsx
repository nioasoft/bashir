import React from 'react';

const Gallery: React.FC = () => {
  // רשימת תמונות קבועה ואיכותית שנבדקה.
  // המבנה הוא: תמונה ראשונה גדולה, ו-8 תמונות רגילות מסביב. סה"כ 9 תמונות שיוצרות מלבן מושלם.
  const images = [
    {
      url: "/images/gallery-6.webp",
      title: "עיצוב גינות יוקרה",
      isLarge: true // התמונה הראשית
    },
    {
      url: "/images/gallery-1.webp",
      title: "גיזום ועיצוב עצים",
      isLarge: false
    },
    {
      url: "/images/gallery-7.webp",
      title: "פריחה צבעונית",
      isLarge: false
    },
    {
      url: "/images/gallery-2.webp",
      title: "דשא סינטטי איכותי",
      isLarge: false
    },
    {
      url: "/images/gallery-5.webp",
      title: "נטיעת עצים בוגרים",
      isLarge: false
    },
    {
      url: "/images/gallery-9.webp",
      title: "תאורת גן לילית",
      isLarge: false
    },
    {
      url: "/images/gallery-3.webp",
      title: "שבילי אבן ומדרך",
      isLarge: false
    },
    {
      url: "/images/gallery-8.webp",
      title: "צוות אחזקה מקצועי",
      isLarge: false
    },
    {
      url: "/images/gallery-4.webp",
      title: "מערכות השקיה מתקדמות",
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