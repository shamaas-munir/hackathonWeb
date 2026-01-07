// Section0.jsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { title: 'Research & Trend Analysis', icon: '📊' },
    { title: 'Structure & Content Writing', icon: '📝' },
    { title: 'Multistep AI Optimization', icon: '🤖' },
    { title: 'Editing & Source Check', icon: '🔍' },
    { title: 'Layouting & Formatting', icon: '✏️' },
    { title: 'Designing Cover & Mockup', icon: '📘' },
];

const benefits = [
    { text: 'Tailored 100% to your business goals', check: true },
    { text: 'Creation handled in house by real experts', check: true },
    { text: 'A-Z strategy, writing, editing, and designs', check: true },
    { text: 'Finished world-class asset in just 7 days', check: true },
];

export default function Section0() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Background subtle gradient glow */}
            <div className="absolute inset-0 bg-black via-transparent to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-6 py-3 bg-red-600/20 text-red-300 rounded-full text-sm font-medium border border-red-600/30">
                        Haven't found the right fit?
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-white">Get custom product Tailored</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                            to your brand in just 7 days
                        </span>
                        <br />
                        {/* <span className="text-red-500">in just 7 days</span> */}
                    </h1>

                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <p className="text-lg md:text-base text-[#8b8b8b] leading-relaxed">
                        We transform your idea into signature book without you writing a single word.
                    </p>
                    <p className="text-lg md:text-base text-[#8b8b8b] mt-2">
                        Completely custom-made asset that builds authority and generates revenue.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-32 relative"
                >
                    {/* Curved connecting lines (decorative SVG) */}
                    <svg className="absolute inset-x-0 top-24 pointer-events-none opacity-30" viewBox="0 0 1200 200">
                        <path
                            d="M100 100 Q300 0, 500 100 T900 100"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                        />
                        <path
                            d="M200 120 Q400 40, 600 120 T1000 120"
                            stroke="#6b7280"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 + 1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <p className="text-sm md:text-base text-gray-400 max-w-xs leading-tight">
                                {step.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Book Mockup + Benefits */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Central Book Stack Image Placeholder */}
                    <div className="flex justify-center items-end mb-20">
                        <div className="relative">
                            {/* Main Book */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-8 w-80 h-96 flex flex-col justify-between border border-gray-700 transform rotate-3 hover:rotate-6 transition-transform duration-700">
                                <div className="text-center">
                                    <p className="text-xs text-gray-500">2024</p>
                                    <h2 className="text-5xl font-bold mt-4">YOUR BOOK</h2>
                                    <p className="text-sm text-gray-400 mt-8 leading-relaxed">
                                        Your custom book description is here: it is completely yours without restrictions.
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold">
                                        O
                                    </div>
                                </div>
                            </div>

                            {/* Stacked books below */}
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 space-y-4">
                                <div className="bg-gray-800 w-72 h-20 rounded shadow-xl -rotate-6" />
                                <div className="bg-gray-900 w-72 h-20 rounded shadow-xl rotate-3" />
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-red-600/30">
                                    <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    {benefit.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}