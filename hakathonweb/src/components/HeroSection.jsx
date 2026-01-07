import React from 'react';
import { Search, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const bookCovers = [
    { title: "Mindfulness Creators", image: "/images/book1.jpeg" },
    { title: "Password Manager Setup", image: "/images/book2.jpeg" },
    { title: "Interview Success Blueprint", image: "/images/book1.jpeg" },
    { title: "Atomic Execution", image: "/images/book2.jpeg" },
    { title: "The Flywheel Model", image: "/images/book1.jpeg" },
    { title: "Psychology of Selling", image: "/images/book2.jpeg" },
  ];

  // Double the array for seamless infinite looping
  const scrollingItems = [...bookCovers, ...bookCovers];

  return (
    
    <section className="relative bg-[#0a0a0a] pt-32 pb-20 overflow-hidden text-white font-sans">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Social Proof */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex -space-x-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black object-cover" 
                src={`/images/book${i}.jpeg`} 
                alt="creator avatar" 
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span>20 000+ creators</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Done-for-You Infoproducts <br />
          <span className="text-[#e11d48]">to Grow Your Business</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          You can instantly have your own ebooks, courses, and more to sell or 
          plug into your offers. Without high investments or months of creation.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-[#e11d48]" size={20} />
            <span className="font-medium">Pre-Made Products</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-[#e11d48]" size={20} />
            <span className="font-medium">Fully Custom Creation</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-16">
          <input 
            type="text" 
            placeholder="Find your next winning products" 
            className="w-full bg-white text-black py-4 px-6 rounded-full text-lg shadow-[0_0_40px_rgba(225,29,72,0.15)] outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e11d48] p-3 rounded-full hover:bg-red-700 transition-colors">
            <Search size={20} />
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-12">Browse 1000+ resources</p>

        {/* Infinite Animated Slider */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#0a0a0a] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#0a0a0a]" style={{ perspective: "1200px" }}>
          <motion.div 
            style={{ 
              rotateX: "25deg",
              transformStyle: "preserve-3d"
            }}
            className="flex gap-6 w-max"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {scrollingItems.map((book, idx) => (
              <div 
                key={idx}
                className="relative w-[150px] h-[240px] rounded-lg shadow-2xl overflow-hidden border border-white/10 transform hover:scale-105 transition-transform cursor-pointer"
              >
                {/* Book Cover Image */}
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Guide Book</p>
                    <p className="font-bold text-xs leading-tight uppercase italic">{book.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;