'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const texts = ['Web Development', 'Tech Insights', 'Tutorials', 'Design Tips'];

  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const categories = [
    { title: 'Frontend', description: 'React, Next.js, Tailwind CSS', href: '/categories/frontend' },
    { title: 'Backend', description: 'Node.js, APIs, Databases', href: '/categories/backend' },
    { title: 'DevOps', description: 'CI/CD, Docker, Infrastructure', href: '/categories/devops' },
    { title: 'UI/UX', description: 'Design Systems, Accessibility', href: '/categories/ui-ux' },
    { title: 'Career', description: 'Interviews, Freelancing, Remote Work', href: '/categories/career' },
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to BlogSite</h1>
        <p className="text-xl text-gray-600">
          Explore the world of{' '}
          <span className="text-blue-600 font-semibold border-r-2 border-blue-600 animate-pulse">
            {displayedText}
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

      {/* Categories Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
              <Link href={cat.href} className="text-blue-600 hover:underline text-sm">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 p-8 rounded-xl">
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
