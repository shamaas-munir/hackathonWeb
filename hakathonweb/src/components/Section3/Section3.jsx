// Section3.jsx - "Read our latest articles" section

import React from 'react';

const Section3 = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Read our latest articles
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          Stay updated with the latest trends, tips, and insights<br />
          in the digital information products industry.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Article 1 */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/Screen Shot 2026-01-07 at 2.08.30 PM.png"
              alt="Private Label Rights Courses"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Private Label Rights Courses: Scale Your Digital Business Fast
              </h3>
              <p className="text-gray-700">
                Discover how private label rights courses help you quickly create and monetize branded digital products with zero design skills.
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/hackathonWeb/images/Screen Shot 2026-01-07 at 2.08.43 PM.png"
              alt="Master Resell Rights Guide"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Guide to Products with Master Resell Rights
              </h3>
              <p className="text-gray-700">
                Discover how products with master resell rights can build your digital business. This guide explains how to find, sell, and scale MRR products.
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/hackathonWeb/images/Screen Shot 2026-01-07 at 2.08.56 PM.png"
              alt="Customer Retention Strategies"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                10 Proven Customer Retention Strategies for Small Business in 2026
              </h3>
              <p className="text-gray-700">
                Discover 10 actionable customer retention strategies for small business. Boost loyalty, reduce churn, and grow revenue with our expert guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;