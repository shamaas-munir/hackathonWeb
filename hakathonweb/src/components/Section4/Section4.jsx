import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

export default function Section00() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center my-20">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1  rounded-full bg-red-600 text-sm font-medium">
          Unlimited Business Library
        </div>
    <br />
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl my-10 font-extrabold leading-tight">
          Discover done-for-you <br />
          digital products you can
          <br/>
          <span className="text-red-600">sell or use in any way</span>
        </h1>
<br />
        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
          Imagine you have more than 1000 courses,
          <br/>
           books, templates, audios,
          and more. Your
          <br/>
           own digital library without limits.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-medium">
            Learn about Master Library
            <span className="w-6 h-6 flex items-center justify-center bg-black/30 rounded-full">
              <FaArrowRight size={12} />
            </span>
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-400">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src="https://via.placeholder.com/32"
                alt="user"
                className="w-8 h-8 rounded-full border border-[#0b0b0b]"
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar key={i} size={12} />
            ))}
          </div>
          <span>20,000+ creators</span>
        </div>

        {/* Image showcase */}
        <div className="mt-20 flex justify-center">
          <img
           src="/images/Screen Shot 2026-01-07 at 1.48.18 PM.png"
            alt="product showcase"
            className="max-w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
