'use client';

import { Tool } from '@/lib/tools';
import { motion } from 'framer-motion';

export default function ToolPageContent({ tool }: { tool: Tool }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: tool.category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '100',
    },
  };

  return (
    <main className="min-h-screen p-8 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <motion.article
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4 text-4xl font-bold text-white">{tool.name}</h1>
        <p className="mb-6 text-lg text-gray-300">{tool.description}</p>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 mb-8 font-medium text-black transition-colors duration-200 bg-white rounded-lg hover:bg-gray-200"
        >
          Visit Tool
        </a>
        <section className="p-6 mb-6 bg-gray-900 border border-gray-700 rounded-lg card-shadow">
          <h2 className="mb-4 text-2xl font-semibold text-white">Pros</h2>
          <ul className="pl-6 text-gray-300 list-disc">
            {tool.pros.map((pro, index) => (
              <li key={index} className="mb-2">
                {pro}
              </li>
            ))}
          </ul>
        </section>
        <section className="p-6 bg-gray-900 border border-gray-700 rounded-lg card-shadow">
          <h2 className="mb-4 text-2xl font-semibold text-white">Cons</h2>
          <ul className="pl-6 text-gray-300 list-disc">
            {tool.cons.map((con, index) => (
              <li key={index} className="mb-2">
                {con}
              </li>
            ))}
          </ul>
        </section>
      </motion.article>
    </main>
  );
}
