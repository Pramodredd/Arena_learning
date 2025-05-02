'use client';

export default function About() {
  return (
    <section className="min-h-screen px-4 py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-8">
          About BlogSite
        </h1>

        {/* Intro */}
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          BlogSite is your destination for insightful articles, thoughtful commentary, and practical resources 
          on tech, lifestyle, design, and more. We're building a creative space that encourages knowledge sharing 
          and storytelling.
        </p>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower individuals and communities by providing a platform for sharing experiences, insights, and innovations.
              We believe in the value of authentic voices and meaningful content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become a globally trusted hub for bloggers, creators, and curious minds — a place where ideas grow, 
              and people connect through stories that matter.
            </p>
          </div>
        </div>

        {/* Optional Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {['Alex', 'Priya', 'Zhang'].map((name, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-24 h-24 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600">
                  {name[0]}
                </div>
                <h3 className="text-lg font-medium text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">Co-Founder & Editor</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-center text-gray-600 text-md max-w-2xl mx-auto">
          Whether you're here to write, learn, or simply explore — we're glad you're with us. 
          Thank you for being part of our journey!
        </p>
      </div>
    </section>
  );
}
