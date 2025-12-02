import React from 'react';
import { Users, Award, ShieldCheck, TreePine } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-primary mb-6 border-r-4 border-accent pr-4">
              נעים להכיר, בשיר סאלח
            </h2>
            <h3 className="text-xl font-semibold text-stone-700 mb-4">
              בונה ומעצב גינות ברמה הגבוהה ביותר
            </h3>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              בשיר סאלח הוא שם דבר בעולם הגינון והנוי. כחברה גדולה ומובילה בתחום, אנו מתמחים בלהפוך כל שטח חיצוני לפנינה ירוקה ומרהיבה.
              בשיר, יחד עם צוות המומחים שלו, מביא ניסיון עשיר, יצירתיות ואהבה אמיתית לטבע ולעיצוב.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              הכוח שלנו הוא באנשים שלנו. בחברתנו מועסקים 
              <span className="font-bold text-primary text-xl px-1">30 עובדים</span> 
              מקצועיים ומיומנים, המעניקים מעטפת שירות מלאה - משלב התכנון הראשוני ועד לשתילת העץ האחרון. 
              אנו מתעסקים בכל היבטי הגינון, גינות יופי ועצי נוי מיוחדים.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-stone-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">30 עובדים מקצועיים</h4>
                  <p className="text-sm text-stone-500">צוות גדול לביצוע מהיר ואיכותי</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-stone-100 p-2 rounded-lg">
                  <TreePine className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">עצי נוי ויופי</h4>
                  <p className="text-sm text-stone-500">התמחות בצמחייה ייחודית</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-stone-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">תכנון ועיצוב</h4>
                  <p className="text-sm text-stone-500">בהובלת בשיר סאלח</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-stone-100 p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">אמינות ושירות</h4>
                  <p className="text-sm text-stone-500">ליווי אישי לכל אורך הדרך</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1621982054215-680c4369a8b2?q=80&w=600&auto=format&fit=crop&fm=webp" 
                alt="עובד גינון מקצועי" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1592483648228-b35146a4330c?q=80&w=600&auto=format&fit=crop&fm=webp" 
                alt="גינות נוי" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;