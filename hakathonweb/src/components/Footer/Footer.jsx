import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center font-bold text-white">
              E
            </div>
            <h2 className="text-white font-semibold text-lg">ENTREPEDIA</h2>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Resources</li>
            <li>Free Resources</li>
            <li>Digital Tools Repository</li>
            <li>Digital Product Ideas</li>
            <li>Partner Program</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>

          <h3 className="text-white font-semibold mt-8 mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Master Library</li>
            <li>Custom Book Service</li>
            <li>Custom Digital Product</li>
            <li>PLR Digital Products</li>
          </ul>
        </div>

        {/* Platform & Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 mb-8">
            <li>Sign In</li>
            <li>Forgot password</li>
          </ul>

          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy & Cookie Policy</li>
            <li>Cookie Settings</li>
            <li>Private Label Rights</li>
            <li>Partner Terms</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-6">Socials</h3>
          <div className="flex flex-col gap-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaLinkedinIn].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition"
                >
                  <Icon className="text-white text-sm" />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-16">
        © {new Date().getFullYear()} Entrepedia. All rights reserved.
      </div>
    </footer>
  );
}
