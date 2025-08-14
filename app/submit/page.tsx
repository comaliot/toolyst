'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function SubmitTool() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    url: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission (e.g., API call)
    console.log('Submitted:', formData);
    alert('Tool submitted! (This is a placeholder)');
  };

  return (
    <main className="min-h-screen p-6 bg-black">
      <h2 className="mb-4 text-2xl font-bold text-white">Submit a Tool</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-6 mx-auto space-y-4 border border-gray-500 rounded-lg"
      >
        <div>
          <label htmlFor="name" className="text-white">
            Tool Name
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="text-white bg-black border-gray-500"
            placeholder="Enter tool name"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="text-white">
            Category
          </label>
          <Input
            id="category"
            value={formData.category}
            onChange={e =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="text-white bg-black border-gray-500"
            placeholder="e.g., Productivity"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="text-white">
            Description
          </label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={e =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="text-white bg-black border-gray-500"
            placeholder="Describe the tool"
            required
          />
        </div>
        <div>
          <label htmlFor="url" className="text-white">
            Tool URL
          </label>
          <Input
            id="url"
            type="url"
            value={formData.url}
            onChange={e => setFormData({ ...formData, url: e.target.value })}
            className="text-white bg-black border-gray-500"
            placeholder="https://example.com"
            required
          />
        </div>
        <Button type="submit" className="text-black bg-white hover:bg-gray-200">
          Submit Tool
        </Button>
      </form>
    </main>
  );
}
