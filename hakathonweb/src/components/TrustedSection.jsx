import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TrustedSection = () => {
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

  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Triplicate items for seamless looping in both directions
  const scrollingItems = [...trustItems, ...trustItems, ...trustItems];

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      // Measure width of ONE complete set (first 8 items)
      let singleSetWidth = 0;
      for (let i = 0; i < trustItems.length; i++) {
        const child = containerRef.current.children[i];
        if (child) {
          singleSetWidth += child.offsetWidth;
        }
      }
      // Add gaps: there are (n-1) gaps per set
      const gapCount = trustItems.length - 1;
      const gapWidth = 48; // gap-12 = 3rem = 48px
      singleSetWidth += gapCount * gapWidth;

      setScrollWidth(singleSetWidth); // Positive value for left → right movement
    }
  }, []);

  return (
    <section className="bg-white py-20 rounded-t-3xl -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-wider text-sm font-medium mb-12">
          Trusted by top creators and marketers worldwide
        </p>

        {/* Infinite Scrolling - Left to Right */}
        <div className="relative overflow-hidden mb-16">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          <motion.div
            ref={containerRef}
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{ x: scrollWidth ? [ -scrollWidth, 0 ] : 0 }} 
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {scrollingItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 text-lg font-semibold text-gray-700"
              >
                <span className="inline-block px-6">• {item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mb-20">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            Discover Master Library
          </button>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Sell or use market-ready <br />
            <span className="text-red-600">products under your name</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Skip the research, writing, designing, or costly outsourcing. 
            Start using done-for-you content to grow your sales, audience, 
            and authority in no time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;