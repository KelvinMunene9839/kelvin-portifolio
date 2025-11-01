import React, { useState } from 'react';
import { portfolioItems } from '../data/portifolio';

const categories = ['All', 'Mobile App'];

const Portfolio = () => {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selected);

  return (
    <section id="portfolio" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-50 mb-4 animate-fade-in">Portfolio</h2>
        <p className="text-center text-dark-400 text-lg mb-16 animate-slide-up">My recent projects and work</p>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selected === cat
                  ? 'bg-primary-600 text-dark-50 shadow-lg'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="card p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-dark-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dark-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-dark-400 mb-4 leading-relaxed">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full border border-primary-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200 group-hover:translate-x-1 transform"
              >
                View on GitHub
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
