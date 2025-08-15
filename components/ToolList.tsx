'use client';

import { tools, Tool } from '@/lib/tools';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ToolList() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');

  const filteredTools =
    selectedCategory === 'All Tools'
      ? tools
      : tools.filter(tool => tool.category === selectedCategory);

  const categories = [
    'All Tools',
    ...new Set(tools.map(tool => tool.category)),
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredTools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: tool.name,
        description: tool.description,
        url: tool.url,
        image: tool.imageUrl,
        applicationCategory: tool.category,
      },
    })),
  };

  return (
    <main className="min-h-screen p-8 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <h2 className="mb-6 text-3xl font-bold text-white">Tools</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`${
              selectedCategory === category
                ? 'bg-white text-black hover:bg-white hover:text-black'
                : 'bg-black border-gray-700 text-white hover:bg-gray-800 hover:text-white'
            } transition-colors duration-200 rounded-lg px-4 py-2`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map(tool => (
          <motion.div
            key={tool.id}
            className="p-6 overflow-hidden bg-gray-900 border border-gray-700 rounded-lg card-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: filteredTools.indexOf(tool) * 0.1,
            }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={tool.imageUrl}
                alt={`${tool.name} homepage screenshot`}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={filteredTools.indexOf(tool) < 3}
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {tool.name}
            </h3>
            <p className="mb-4 text-gray-300 line-clamp-2">
              {tool.description}
            </p>
            <div className="flex gap-3">
              <Link
                href={`/tool/${tool.slug}`}
                className="font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
              >
                View Details
              </Link>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
              >
                Visit Tool
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
