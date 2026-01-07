import React from 'react';

const testimonials = [
  {
    quote: "I didn't expect the quality of the products",
    content: "Everything is visually polished, content-rich, and ready to sell. Just add your own logo.",
    name: "Edwin P.",
    location: "SINGAPORE",
    img: "https://i.pravatar.cc/150?u=edwin"
  },
  {
    quote: "I saved thousands of hours of creation.",
    content: "Now I can focus on changing the lives of others with information that not everybody has access to.",
    name: "Emily B.",
    location: "UNITED KINGDOM",
    img: "https://i.pravatar.cc/150?u=emily"
  },
  {
    quote: "It saved me so much time. A great find!",
    content: "I believe this package took off weeks of development time and boosted my results.",
    name: "James W.",
    location: "AUSTRALIA",
    img: "https://i.pravatar.cc/150?u=james"
  }
];

const SectionF = () => {
  return (
    <div className="bg-[#0f0f0f]">
      {/* 1. LIGHT HEADER SECTION - Rounded from bottom */}

      {/* 3. BENTO GRID SECTION (Visual Polish) */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GridCard title="Ready For Print" desc="Formatted and polished to look like a true best-seller d polished to look like a true best-seller d polished to look like a true best-seller v ." color="bg-[#232323]" />
          <GridCard title="EPUB & Kindle" desc="Professional formatting optimized for every device d polished to look like a true best-seller d polished to look like a true best-seller." color="bg-[#e11d48]" tall />
          <GridCard title="Produced by experts" desc="Created for maximum quality and brand alignment v d polished to look like a true best-seller." color="bg-[#232323]" />
          <GridCard title="Full Ownership" desc="You keep 100% rights and profits." color="bg-[#232323]" />
          <GridCard title="Satisfaction" desc="Guaranteed quality results d polished to look like a true best-seller d polished to look like a true best-seller." color="bg-[#e11d48]" />
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: scroll 40s linear infinite; width: max-content; }
      `}</style>
    </div>
  );
};

const Rating = ({ brand, score, color }) => (
  <div className="text-center">
    <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl" style={{ backgroundColor: color + '20', color: color }}>●</div>
    <p className="text-gray-400 text-xs font-medium mb-1">{brand} {score}</p>
    <div className="flex justify-center text-yellow-500 text-sm">★★★★★</div>
  </div>
);

const GridCard = ({ title, desc, color, tall }) => (
  <div className={`${color} ${tall ? 'md:row-span-2' : ''} p-8 rounded-[2.5rem] flex flex-col justify-center min-h-[250px]`}>
    <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default SectionF;