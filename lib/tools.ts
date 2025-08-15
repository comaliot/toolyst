export type Tool = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  pros: string[];
  cons: string[];
  imageUrl: string;
};

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'notion',
    name: 'Notion',
    category: 'Productivity',
    description: 'All-in-one workspace for notes, tasks, and projects.',
    url: 'https://notion.so',
    pros: [
      'Highly customizable workspace',
      'Great for team collaboration',
      'Integrates with many apps',
    ],
    cons: [
      'Can be overwhelming for new users',
      'Offline functionality is limited',
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Notion+Homepage',
  },
  {
    id: '2',
    slug: 'figma',
    name: 'Figma',
    category: 'Design',
    description: 'Collaborative design tool for UI/UX.',
    url: 'https://figma.com',
    pros: [
      'Real-time collaboration',
      'Cloud-based, accessible anywhere',
      'Extensive plugin ecosystem',
    ],
    cons: ['Requires stable internet', 'Learning curve for advanced features'],
    imageUrl: 'https://via.placeholder.com/300x200?text=Figma+Homepage',
  },
  {
    id: '3',
    slug: 'vscode',
    name: 'VS Code',
    category: 'Development',
    description: 'Source-code editor with support for debugging.',
    url: 'https://code.visualstudio.com',
    pros: [
      'Highly extensible with extensions',
      'Fast and lightweight',
      'Supports multiple languages',
    ],
    cons: [
      'Can be resource-heavy with many extensions',
      'Setup may require configuration',
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=VS+Code+Homepage',
  },
];
