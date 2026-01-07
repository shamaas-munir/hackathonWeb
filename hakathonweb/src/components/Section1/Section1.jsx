import React from "react";

const Section1 = () => {
    const cards = [
        {
            id: 1,
            title: "Digital Product Funnels Blueprint",
            description:
                "10 proven funnels that turn your leads into customers using digital products.",
            button: "Copy proven funnels",
            image: "/images/Screen Shot 2026-01-07 at 2.44.03 PM.png"
        },
        {
            id: 2,
            title: "Online Business Master Plan",
            description:
                "Access a guide full of actionable steps and tips for growing your online business.",
            button: "Kickstart your business",
            image: "/images/Screen Shot 2026-01-07 at 2.44.32 PM.png"
        },
        {
            id: 3,
            title: "Digital Product Pricing Strategies",
            description:
                "This free guide reveals the exact pricing frameworks used by top online sellers.",
            button: "Get your pricing right",
            image: "/images/Screen Shot 2026-01-07 at 2.45.10 PM.png"
        },
    ];

    return (
        <section className="bg-[#0b0b0b] py-28 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between mb-24 gap-10">
                    <h2 className="text-5xl lg:text-6xl font-extrabold max-w-xl">
                        Get started with <span className="text-red-600">free resources</span>
                    </h2>
                    <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                        All designed to simplify your online business journey, no matter your experience level.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#1c1c1c] rounded-3xl p-10 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(220,38,38,0.25)] transition-all duration-300"
                        >
                            {/* Image placeholder */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-60 w-full object-contain rounded-2xl mb-10"
                            />


                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Button */}
                            <button className="mt-auto w-fit px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition">
                                {card.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section1;
