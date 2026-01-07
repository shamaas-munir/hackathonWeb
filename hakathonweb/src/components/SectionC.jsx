import React from 'react';
import { motion } from 'framer-motion';
import { Play, MessageCircle } from 'lucide-react';

const SectionC = () => {
  const trustItems = [
    { text: "Used by 20,000+ creators" },
    { text: "4.9/5 average rating" },
    { text: "$5M+ in customer sales" },
    { text: "Featured on Product Hunt" },
    { text: "1000+ ready-to-sell products" },
    { text: "Trusted by top marketers" },
    { text: "White-label & resell rights" },
    { text: "Instant download access" },
  ];

  return (
    <section className="bg-white py-20 rounded-t-[3rem] -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Full-Width Video Section with Autoplay */}
        <div className="max-w-5xl mx-auto mb-24 px-4">
          <div className="relative group">
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-gray-100 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full z-10"
                /* Updated URL with autoplay=1 and mute=1 */
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&rel=0&modestbranding=1" 
                title="Explainer Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] -z-10"></div>
          </div>
        </div>

        {/* Feature Cards Grid - Spanning 2 Rows for Specific Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* Small Card */}
          <div className="bg-gray-100 rounded-[2rem] p-8 text-left border border-gray-200/50">
            <h3 className="text-xl font-bold mb-4">Demanded Content</h3>
            <p className="text-gray-600 text-sm">Best-selling topics that people really buy. Based on market research.</p>
          </div>

          {/* LARGE CARD: Private Label Rights (Height of 2) */}
          <div className="md:row-span-2 bg-red-600 rounded-[2.5rem] p-10 text-left text-white relative overflow-hidden flex flex-col justify-between shadow-xl shadow-red-200">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Private Label Rights</h3>
              <p className="text-red-50 text-lg leading-relaxed">
                Fully rebrand, edit, and use as you want. Without any restrictions or hidden royalties.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-700 rounded-full -translate-x-4 translate-y-12 opacity-40"></div>
          </div>

          {/* LARGE CARD: 1000+ Products (Height of 2) */}
          <div className="md:row-span-2 bg-black rounded-[2.5rem] p-10 text-left text-white flex flex-col justify-between shadow-xl shadow-gray-300">
            <div>
              <h3 className="text-3xl font-bold mb-6">1000+ Digital Products</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Almost unlimited selection of content in one of the biggest libraries out there. Updated weekly.
              </p>
            </div>
            <div className="h-2 w-12 bg-red-600 rounded-full mt-8"></div>
          </div>

          {/* Small Card */}
          <div className="bg-gray-100 rounded-[2rem] p-8 text-left border border-gray-200/50">
            <h3 className="text-xl font-bold mb-4">15 Media Formats</h3>
            <p className="text-gray-600 text-sm">Ebooks, Courses, Audios, Templates, Prompts, Notion Systems + more.</p>
          </div>

          {/* Small Card */}
          <div className="bg-gray-100 rounded-[2rem] p-8 text-left border border-gray-200/50">
            <h3 className="text-xl font-bold mb-4">Constantly Updated</h3>
            <p className="text-gray-600 text-sm">We add 20 new products every week to meet the latest trends.</p>
          </div>

          {/* Small Card */}
          <div className="bg-gray-100 rounded-[2rem] p-8 text-left border border-gray-200/50">
            <h3 className="text-xl font-bold mb-4">Created by Experts</h3>
            <p className="text-gray-600 text-sm">Each product is made in-house by our team. World-class standards.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SectionC;