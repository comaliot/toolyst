'use client';

import { tools, Tool } from '@/lib/tools';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    '@ Милютин': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredTools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: tool.name,
        description: tool.description,
        url: tool.url,
        applicationCategory: tool.category,
      },
    })),
  };

  return (
    <main className="min-h-screen p-6 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <h2 className="mb-4 text-2xl font-bold text-white">Tools</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`${
              selectedCategory === category
                ? 'bg-white text-black'
                : 'bg-black border-gray-500 text-white'
            } hover:bg-gray-800 transition-colors duration-200`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map(tool => (
          <motion.div
            key={tool.id}
            className="p-4 border border-gray-500 rounded-lg hover:shadow-lg hover:border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: filteredTools.indexOf(tool) * 0.1,
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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
          </motion.div>
        ))}
      </div>
    </main>
  );
}
