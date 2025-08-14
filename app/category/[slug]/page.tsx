'use client';

import { tools } from '@/lib/tools';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const validCategories = [
    ...new Set(tools.map(tool => tool.category.toLowerCase())),
  ];
  const slug = params.slug.toLowerCase();

  if (!validCategories.includes(slug)) {
    notFound(); // Returns 404 if category doesn't exist
  }

  const filteredTools = tools.filter(
    tool => tool.category.toLowerCase() === slug
  );

  return (
    <main className="min-h-screen p-6 bg-black">
      <h2 className="mb-4 text-2xl font-bold text-white capitalize">
        {slug} Tools
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.length > 0 ? (
          filteredTools.map(tool => (
            <div
              key={tool.id}
              className="p-4 transition-all duration-300 border border-gray-500 rounded-lg hover:shadow-lg hover:border-gray-300"
            >
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
              <p className="text-gray-300">{tool.description}</p>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 transition-colors duration-200 hover:text-blue-300"
              >
                Visit Tool
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No tools found in this category.</p>
        )}
      </div>
    </main>
  );
}
