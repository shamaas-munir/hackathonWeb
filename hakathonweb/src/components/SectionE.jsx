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
  },
  {
    quote: "Highly recommended for entrepreneurs!",
    content: "The structure is amazing and the value for money is unbeatable. This is exactly what I needed.",
    name: "Sarah L.",
    location: "CANADA",
    img: "https://i.pravatar.cc/150?u=sarah"
  }
];

const SectionE = () => {
  return (
    <section className="bg-[#0f0f0f] py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        {/* Rated Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-5 py-2 mb-10">
          <div className="bg-[#e11d48] rounded-full p-1 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm font-medium">Rated 4.8/5 overall by our users</span>
        </div>

        <h2 className="text-5xl md:text-8xl font-bold text-[#8b8b8b] mb-16 tracking-tight">"Must have content"</h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <PlatformRating icon={<TrustpilotIcon />} platform="Trustpilot" score="4.8/5" />
          <PlatformRating icon={<FacebookIcon />} platform="Facebook" score="5.0/5" />
          <PlatformRating icon={<GoogleIcon />} platform="Google" score="4.5/5" />
        </div>
      </div>

      <div className="relative">
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={index} 
              /* CHANGED: min-w reduced by 50% from original */
              className="min-w-[175px] h-[350px] md:min-w-[225px] bg-[#232323] border border-white/5 rounded-[1.5rem] p-6 mx-3 flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#e11d48] w-8 h-8 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-serif mt-1">"</span>
                </div>
                {/* Scaled down text for smaller card */}
                <h3 className="text-gray-200 text-base font-semibold mb-3 leading-tight">
                  {item.quote}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-4">
                  {item.content}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover grayscale" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">{item.name}</span>
                  <span className="text-gray-500 text-[10px] tracking-wider font-bold uppercase">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

/* --- Helper Components stay same --- */
const PlatformRating = ({ icon, platform, score }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="mb-1">{icon}</div>
    <p className="text-gray-400 text-xs font-medium">{platform} {score}</p>
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#ffb400] text-sm">★</span>
      ))}
    </div>
  </div>
);

const TrustpilotIcon = () => (
  <svg className="w-8 h-8 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 9.45h-8.914L12 0l-3.086 9.45H0l7.217 5.242L4.432 24 12 18.758 19.568 24l-2.785-9.308L24 9.45z"/></svg>
);

const FacebookIcon = () => (
  <svg className="w-8 h-8 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const GoogleIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.494 12.275c0-.868-.077-1.703-.222-2.507H12v4.74h6.44c-.278 1.498-1.123 2.766-2.393 3.615v3.004h3.877c2.268-2.088 3.57-5.163 3.57-8.852z"/><path fill="#34A853" d="M12 24c3.24 0 5.957-1.075 7.942-2.915l-3.877-3.004c-1.076.72-2.453 1.146-4.065 1.146-3.126 0-5.772-2.112-6.717-4.95H1.304v3.103C3.28 21.36 7.373 24 12 24z"/><path fill="#FBBC05" d="M5.283 14.277c-.24-.72-.378-1.49-.378-2.277s.138-1.557.378-2.277V6.62H1.304c-.813 1.624-1.272 3.46-1.272 5.38s.459 3.756 1.272 5.38l3.979-3.103z"/><path fill="#EA4335" d="M12 4.773c1.762 0 3.344.606 4.586 1.793l3.44-3.44C17.953 1.164 15.237 0 12 0 7.373 0 3.28 2.64 1.304 6.62l3.979 3.103c.945-2.838 3.591-4.95 6.717-4.95z"/>
  </svg>
);

export default SectionE;