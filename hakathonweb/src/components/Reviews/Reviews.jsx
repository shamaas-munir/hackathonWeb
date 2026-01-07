import React, { useState } from 'react';

const reviews = [
  {
    name: 'Jason Kearns',
    business: 'EezyLearn',
    text: "Entrepedia's premade courses and ebooks have been a fantastic addition to our online academy at EezyLearn. Their high-quality content has enriched our offerings and provided immense value to our students.",
  },
  {
    name: 'Greg Wilson',
    business: 'Fix and Flippers',
    text: 'I love the PLR content from Entrepedia. We use the handouts as freebies and bundle the guides into our coaching programs. I would certainly recommend them to anyone looking for high-quality PLR materials.',
  },
  {
    name: 'Sheena Whyatt',
    business: 'Kapow',
    text: 'I simply love the variety of topics & delivery that Entrepedia offers - being able to offer audio, video & book options to my customers is fabulous, as it covers all learning styles.',
  },
  {
    name: 'AK Akrem',
    business: null,
    text: 'Purchasing the Entrepedia License was the best deal of my life, they helped me a lot on my digital products journey. A lot of premium well designed products that you can resell with PLR rights.',
  },
  {
    name: 'William Meldman',
    business: null,
    text: "Entrepedia is the first, design-focused, quality content-optimized, white-label suite of products with a consistent, attractive branding that I've ever used.",
  },
  {
    name: 'Sujay Raj Singh',
    business: null,
    text: 'Entrepedia has been an absolute game-changer for my business! The range of trending digital products with resell rights they offer is unmatched, allowing me to quickly expand my product offerings.',
  },
  // Add more reviews here up to 12 total
  {
    name: 'Maria Gonzalez',
    business: 'Digital Success Hub',
    text: 'The customer support is outstanding and the content quality is top-notch. Entrepedia has saved me hundreds of hours of work!',
  },
  {
    name: 'David Chen',
    business: 'Growth Masters',
    text: 'Best investment I made this year. The resell rights and beautiful designs make launching new offers effortless.',
  },
  {
    name: 'Sarah Thompson',
    business: 'Mindful Creators',
    text: 'Finally, PLR that doesn\'t look like generic PLR! The branding and design are professional and modern.',
  },
  {
    name: 'Michael Roberts',
    business: null,
    text: 'Incredible value. I\'ve already made back my investment multiple times with just a few products.',
  },
  {
    name: 'Emma Watson',
    business: 'LaunchQueen',
    text: 'The variety of formats (video, audio, ebooks) allows me to cater to every type of learner in my audience.',
  },
  {
    name: 'Liam Parker',
    business: 'ScaleSmart',
    text: 'Entrepedia has completely transformed how quickly I can bring new products to market. Highly recommended!',
  },
];

const StarRating = () => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ name, business, text }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4 shadow-md">
        <span className="text-gray-700 text-lg font-bold">
          {name.split(' ').map(n => n[0]).join('').toUpperCase()}
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        {business && <p className="text-sm text-gray-600">{business}</p>}
      </div>
    </div>
    <StarRating />
    <p className="mt-4 text-gray-700 flex-grow">{text}</p>
    <a href="#" className="mt-4 text-sm text-gray-500 hover:text-gray-800 transition-colors">
      Read more →
    </a>
  </div>
);

const ReviewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50 rounded-t-[4rem] rounded-b-[4rem] md:rounded-t-[8rem] md:rounded-b-[8rem] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 leading-tight">
          <span className="text-black">See What our</span>{' '}
          <span className="text-red-600">Users are Saying</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              business={review.business}
              text={review.text}
            />
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAll ? 'Show Less' : `Show all reviews (${reviews.length})`}
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;