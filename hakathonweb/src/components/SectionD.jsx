import React from 'react';
import { motion } from 'framer-motion';
import { 
  Magnet, Users, MessageSquare, ShoppingBag, 
  Star, ShieldCheck, TrendingUp, Briefcase 
} from 'lucide-react';

const SectionD = () => {
  const resourceCards = [
    { title: "Offer as free leadmagnet", icon: <Magnet size={40} /> },
    { title: "Educate your audience", icon: <Users size={40} /> },
    { title: "Boost your community", icon: <MessageSquare size={40} /> },
    { title: "Sell as author on Amazon", icon: <ShoppingBag size={40} /> },
    { title: "Build your authority", icon: <Star size={40} /> },
    { title: "Increase trust in brand", icon: <ShieldCheck size={40} /> },
    { title: "Sell as your own product", icon: <TrendingUp size={40} /> },
    { title: "Expand product portfolio", icon: <Briefcase size={40} /> },
  ];

  return (
  
    <div className="bg-[#0f0f0f]"> 
      <section className="bg-white py-24  md:rounded-b-[4rem] relative z-10 overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Top Badge */}
          <div className="inline-block bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            You have complete freedom
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Unlimited options to
          </h2>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#e11d48] mb-16 tracking-tight">
            use the resources
          </h2>

          {/* Scrolling Cards Container */}
          <div className="relative w-full mb-20 overflow-hidden">
            {/* Fade Mask */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div 
              className="flex gap-6 w-max px-4"
              animate={{ x: [0, -resourceCards.length * 264] }} 
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...resourceCards, ...resourceCards, ...resourceCards].map((card, idx) => (
                <div 
                  key={idx}
                  className="w-[240px] h-[240px] flex-shrink-0 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="text-gray-800 mb-6">
                    {card.icon}
                  </div>
                  <p className="text-xl font-bold text-gray-800 leading-tight text-center">
                    {card.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Explore Button */}
          <button className="inline-flex items-center gap-4 bg-[#e11d48] text-white pl-2 pr-8 py-2 rounded-full hover:bg-red-700 transition-all group shadow-xl shadow-red-100">
            <div className="bg-black/20 p-3 rounded-full group-hover:bg-black/30 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </div>
            <span className="text-lg font-bold">Explore Master Library</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SectionD;