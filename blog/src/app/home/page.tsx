'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const texts = ['Web Development', 'Tech Insights', 'Tutorials', 'Design Tips'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to BlogSite</h1>
        <p className="text-xl text-gray-600">
          Explore the world of{' '}
          <span className="text-blue-600 font-semibold transition-all duration-500">
            {texts[currentIndex]}
          </span>
        </p>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Discover articles, tutorials, and insights curated by developers for developers.
        </p>
        <div className="mt-6">
          <Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Explore Blog
          </Link>
        </div>
      </section>

      {/* Latest Posts Preview (Static Mockup) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Post Title {post}</h3>
              <p className="text-sm text-gray-600 mb-3">
                A short description about the blog post content that grabs the reader's attention...
              </p>
              <Link href={`/blog/post-${post}`} className="text-blue-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Want to stay updated?</h2>
        <p className="text-gray-600 mb-4">Subscribe to get the latest articles directly to your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
