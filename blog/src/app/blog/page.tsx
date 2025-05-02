'use client';

import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'The Power of Consistent Writing',
    image: 'https://source.unsplash.com/600x400/?writing,notebook',
    excerpt: 'Discover how daily writing improves clarity, creativity, and confidence.',
  },
  {
    title: 'Tech Trends 2025',
    image: 'https://source.unsplash.com/600x400/?technology',
    excerpt: 'Stay ahead with insights into the newest technologies shaping our future.',
  },
  {
    title: 'Mindful Morning Routines',
    image: 'https://source.unsplash.com/600x400/?morning,meditation',
    excerpt: 'Start your day with intention and balance using these mindful practices.',
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-indigo-700 mb-12 tracking-tight"
        >
          Latest Blog Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-[1.03] relative overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  Read More
                </button>
              </div>

              {/* Glow & Blur on Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 backdrop-blur-md transition duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
