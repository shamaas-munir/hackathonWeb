import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  // Tracking which menu is open
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    
    <nav className="w-full bg-black font-sans">
      {/* 1. Top Red Promo Banner */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#e11d48] text-white py-2 text-center text-sm font-medium">
        <span className="bg-black/20 px-3 py-0.5 rounded-full mr-2">Kickstart 2026 🔥</span>
        Save 70% on All Products
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between mt-9">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-[#e11d48] w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white italic">
            E
          </div>
          <span className="text-white font-bold tracking-tighter text-xl">
            ENTREPEDIA
          </span>
        </div>

        {/* Floating Menu Links */}
        <div className="hidden md:flex items-center bg-[#1a1a1a] border border-white/5 rounded-full px-2 py-1.5 shadow-2xl">
          <NavLink href="#" label="Home" />
          
          {/* Products Dropdown */}
          <NavDropdown 
            label="Products" 
            isOpen={activeMenu === 'products'} 
            onEnter={() => setActiveMenu('products')} 
            onLeave={() => setActiveMenu(null)}
          >
            <div className="flex gap-8">
              <MenuSection 
                title="Master Library" 
                badge="Save 70%" 
                description="1000+ digital products to resell or rebrand."
                links={["Explore Products", "Pricing", "Latest Drops"]}
              />
              <MenuSection 
                title="Tools" 
                description="AI powered tools for creators."
                links={["Product Ideator", "PDF Rebrander", "Title Generator"]}
              />
            </div>
          </NavDropdown>

          {/* Services Dropdown */}
          <NavDropdown 
            label="Services" 
            isOpen={activeMenu === 'services'} 
            onEnter={() => setActiveMenu('services')} 
            onLeave={() => setActiveMenu(null)}
          >
            <div className="flex gap-8">
              <MenuSection 
                title="Done-For-You" 
                description="We build your digital empire."
                links={["Custom Course Creation", "Funnel Building", "Email Marketing"]}
              />
              <MenuSection 
                title="Strategy" 
                description="Expert guidance for growth."
                links={["1-on-1 Consulting", "Brand Audit"]}
              />
            </div>
          </NavDropdown>

          {/* Resources Dropdown */}
          <NavDropdown 
            label="Resources" 
            isOpen={activeMenu === 'resources'} 
            onEnter={() => setActiveMenu('resources')} 
            onLeave={() => setActiveMenu(null)}
          >
            <div className="flex gap-8">
              <MenuSection 
                title="Learning" 
                description="Free knowledge to get started."
                links={["Blog", "Free Guides", "Video Tutorials"]}
              />
              <MenuSection 
                title="Community" 
                description="Join 20k+ creators."
                links={["Discord Server", "Success Stories"]}
              />
            </div>
          </NavDropdown>

          <NavLink href="#" label="About" />
        </div>

        {/* Right Side Action */}
        <button className="bg-[#1a1a1a] border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
          Sign in
        </button>
      </div>
    </nav>
  );
}

// --- Helper Components ---

function NavLink({ href, label }) {
  return (
    <a href={href} className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all text-sm font-medium">
      {label}
    </a>
  );
}

function NavDropdown({ label, isOpen, onEnter, onLeave, children }) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all text-sm font-medium">
        {label} <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[550px] z-[60]">
          <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 shadow-2xl">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function MenuSection({ title, badge, description, links }) {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-white font-semibold text-sm">{title}</h4>
        {badge && (
          <span className="bg-red-500/10 text-red-500 text-[10px] px-2 py-0.5 rounded-full border border-red-500/20">
            {badge}
          </span>
        )}
      </div>
      <p className="text-gray-500 text-[12px] leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-gray-400 hover:text-white block py-1 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}