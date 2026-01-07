import React from 'react';

const FloatingChat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <button 
        onClick={() => console.log("Open Chat")}
        className="bg-black hover:bg-gray-900 text-white w-14 h-14 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        {/* Message Icon (SVG for zero dependencies) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>

        {/* Red Notification Dot */}
        <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-white"></span>
        
        {/* Tooltip Label */}
        <span className="absolute right-full mr-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Support Online
        </span>
      </button>
    </div>
  );
};

export default FloatingChat;