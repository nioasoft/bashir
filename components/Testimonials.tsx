import React from 'react';

// Define the testimonial data type
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location?: string;
}

// Sample testimonial data with anonymous names
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'אבי ג.',
    rating: 5,
    comment: 'השירות היה מצוין, התוצאה עלתה על כל הציפיות. העבודה הייתה מקצועית והתוצאה הסופית מדהימה.',
    location: 'שכונת כלניות, ב״ש'
  },
  {
    id: 2,
    name: 'דנה כ.',
    rating: 5,
    comment: 'צוות מדהים, זמינים לכל שאלה ונתנו פתרון יצירתי לבעיה שלא הצלחנו לפתור הרבה זמן. ממליצה בחום!',
    location: 'רמות, ירושלים'
  },
  {
    id: 3,
    name: 'רועי מ.',
    rating: 5,
    comment: 'שירות מהיר ומקצועי. המחיר היה הוגן והעבודה בוצעה בצורה יסודית ונקייה. בהחלט אשתמש בשירות שוב.',
    location: 'תל אביב'
  },
  {
    id: 4,
    name: 'מיכל ל.',
    rating: 5,
    comment: 'הופתעתי לטובה מהיחס האישי והאכפתיות. הרגשתי שיש על מי לסמוך לאורך כל הדרך. עבודה ברמה גבוהה מאוד.',
    location: 'הרצליה'
  },
  {
    id: 5,
    name: 'יונתן א.',
    rating: 4,
    comment: 'עבודה טובה מאוד, עמדו בזמנים וסיפקו את הסחורה. היו כמה שינויים קטנים שביקשתי ותוקנו מיד.',
    location: 'ראשון לציון'
  },
  {
    id: 6,
    name: 'שרה ב.',
    rating: 5,
    comment: 'פשוט תענוג לעבוד עם אנשי מקצוע כאלה. יודעים את העבודה, אדיבים והתוצאה מדברת בעד עצמה.',
    location: 'חיפה'
  }
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">המלצות של לקוחות</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-stone-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-stone-600 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="bg-stone-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="mr-4">
                  <h3 className="font-semibold text-stone-800">{testimonial.name}</h3>
                  <p className="text-sm text-stone-500">{testimonial.location || 'לקוח מותאם אישית'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
