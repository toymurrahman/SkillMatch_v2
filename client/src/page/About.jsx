import React from 'react';
import teampic from '../image/team.png';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-700">SkillMatch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering job seekers and recruiters through intelligent matching.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At SkillMatch, our goal is simple — to bridge the gap between talent and opportunity.
              We use smart algorithms and practical tools to make hiring and applying a seamless experience.
              Whether you're a recruiter looking to fill roles faster, or a candidate searching for your perfect fit, we’ve got your back.
            </p>
          </div>
          <img
            src={teampic}
            alt="Team collaboration"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 ">Smart Matching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We help recruiters find ideal candidates by analyzing skills, experience, and intent — not just resumes.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 ">User-Centric Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every feature is built with simplicity and speed in mind. No clutter. Just results.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize your data — it's yours, and we keep it safe with modern authentication and encryption practices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Join us in shaping the future of hiring</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Whether you're hiring or applying, SkillMatch is here to make your journey smoother and smarter.
          </p>
          <a
            href="/"
            className="inline-block bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
