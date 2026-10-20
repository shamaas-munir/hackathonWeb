// Section4.jsx - Explore PLR Products with "See All" functionality

import React, { useState } from 'react';

const Section4 = () => {
    const [showAll, setShowAll] = useState(false);

    const products = [
        {
            id: 1,
            title: "Scale Your Business with Smart Chatbot",
            description: "Email course designed to help you provide guidance on using chatbots to save time, generate leads, and scale your business.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.15.44 PM.png" // Replace with real image URL later
        },
        {
            id: 2,
            title: "Preparing SOPs for Automation",
            description: "Checklist to guide your customers through preparing their SOPs for automation by organizing tasks.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.17.51 PM.png"
        },
        {
            id: 3,
            title: "The 5-Step AI Lesson Planning Process",
            description: "Guide to help teachers use AI tools to plan smarter lessons, save time, and improve teaching results with less effort.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.18.18 PM.png"
        },
        {
            id: 4,
            title: "Email Marketing Mastery Bundle",
            description: "Complete done-for-you email sequence templates for launching products, nurturing leads, and boosting sales.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.18.38 PM.png"
        },
        {
            id: 5,
            title: "Social Media Content Calendar 2026",
            description: "365-day plug-and-play content calendar with captions, hashtags, and post ideas for multiple niches.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.19.23 PM.png"
        },
        {
            id: 6,
            title: "Faceless YouTube Channel Starter Kit",
            description: "Scripts, thumbnails, and channel setup guide to launch profitable faceless channels fast.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.19.40 PM.png"
        },
        {
            id: 7,
            title: "Digital Product Launch Checklist",
            description: "Step-by-step checklist to successfully launch your digital product with maximum conversions.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.19.40 PM.png"
        },
        {
            id: 8,
            title: "Canva Template Pack for Coaches",
            description: "50+ customizable Canva templates for workbooks, lead magnets, and client deliverables.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.20.01 PM.png"
        },
        {
            id: 9,
            title: "Passive Income with Printables",
            description: "Guide + templates to create and sell printable planners, trackers, and journals on Etsy.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.18.18 PM.png"
        },
        {
            id: 10,
            title: "Mindset & Manifestation Journal Prompts",
            description: "180 powerful journal prompts for personal growth coaches to sell or use as lead magnets.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.18.02 PM.png"
        },
        {
            id: 11,
            title: "Instagram Reels Script Pack",
            description: "100 viral reel scripts for business, wellness, and lifestyle niches — ready to record.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.17.51 PM.png"
        },
        {
            id: 12,
            title: "Client Onboarding Automation Kit",
            description: "Emails, forms, and workflows to automate client onboarding and deliver premium experience.",
            image: "/hackathonWeb/images/Screen Shot 2026-01-07 at 2.18.18 PM.png"
        },
    ];

    const visibleProducts = showAll ? products : products.slice(0, 6);
    const handleToggle = () => {
        setShowAll(prev => !prev);

        if (showAll) {
            window.scrollTo({
                top: document.getElementById("plr-section").offsetTop - 100,
                behavior: "smooth",
            });
        }
    };


    return (
        <section id="plr-section" className="py-20 px-6 bg-white">

            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-2">
                    Explore PLR products
                </h2>
                <h3 className="text-5xl lg:text-6xl font-black text-red-600 mb-16">
                    from the library
                </h3>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-8">
                    <input
                        type="text"
                        placeholder="Find your next winning products"
                        className="w-full px-8 py-5 text-lg text-gray-700 bg-white border border-gray-200 rounded-full shadow-inner focus:outline-none focus:ring-4 focus:ring-red-100"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            🔍
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    <button className="px-8 py-3 text-white bg-gray-900 rounded-full font-semibold">
                        All Products
                    </button>
                    <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-semibold hover:bg-gray-50">
                        Ebooks
                    </button>
                    <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-semibold hover:bg-gray-50">
                        Audios
                    </button>
                    <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-semibold hover:bg-gray-50">
                        Guides
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {visibleProducts.map((product) => (
                        // Inside your grid → replace the card <div> with this:

                        <div
                            key={product.id}
                            className={`
                         group relative
                         bg-gray-50 rounded-3xl overflow-hidden
                         shadow-lg hover:shadow-2xl
                         transition-all duration-400 ease-out
                         hover:bg-gray-950
                        `}
                        >
                            {/* Image Area */}
                            <div
                                className={`
                        h-64 bg-gradient-to-br from-gray-900 to-black 
                        flex items-center justify-center p-6
                        transition-all duration-500
                        group-hover:brightness-110 group-hover:scale-[1.03]
                        `}
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={`
                         w-full h-full object-cover rounded-xl 
                         transition-transform duration-700
                         group-hover:scale-105
                        `}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10">
                                <h3
                                    className={`
                         text-2xl font-bold 
                         text-gray-900 
                         group-hover:text-white 
                         transition-colors duration-400
                         mb-4
                        `}
                                >
                                    {product.title}
                                </h3>

                                <p
                                    className={`
                             text-gray-600 leading-relaxed
                             group-hover:text-gray-200
                             transition-colors duration-400
      `}
                                >
                                    {product.description}
                                </p>
                            </div>

                            {/* Optional subtle overlay gradient on hover */}
                            <div
                                className={`
                            absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 pointer-events-none
    `}
                            />
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <button
                    onClick={handleToggle}
                    className="px-10 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-colors"
                >
                    {showAll ? "Show Less Products" : `See All Products (${products.length})`}
                </button>

            </div>
        </section>
    );
};

export default Section4;