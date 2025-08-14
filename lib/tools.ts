export type Tool = {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
};

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Notion',
    category: 'Productivity',
    description: 'All-in-one workspace for notes, tasks, and projects.',
    url: 'https://notion.so',
  },
  {
    id: '2',
    name: 'Figma',
    category: 'Design',
    description: 'Collaborative design tool for UI/UX.',
    url: 'https://figma.com',
  },
  {
    id: '3',
    name: 'VS Code',
    category: 'Development',
    description: 'Source-code editor with support for debugging.',
    url: 'https://code.visualstudio.com',
  },
];
