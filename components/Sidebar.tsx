'use client'; // Required for client-side interactivity with shadcn components

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Menu } from 'lucide-react'; // Install lucide-react: `npm install lucide-react`

const categories = [
  { name: 'All Tools', href: '/' },
  { name: 'Productivity', href: '/category/productivity' },
  { name: 'Design', href: '/category/design' },
  { name: 'Development', href: '/category/development' },
];

export default function Sidebar() {
  return (
    <aside className="fixed hidden w-64 h-screen p-4 bg-black border-r border-gray-500 md:static md:block">
      <h2 className="mb-4 text-xl font-bold">Toolyst</h2>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.name} className="mb-2">
              <Link
                href={category.href}
                className="text-gray-300 transition-colors duration-200 hover:text-white"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown */}
      <div className="fixed md:hidden top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="text-white bg-black border-gray-500"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black border-gray-500">
            {categories.map(category => (
              <DropdownMenuItem key={category.name} asChild>
                <Link href={category.href} className="w-full">
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
