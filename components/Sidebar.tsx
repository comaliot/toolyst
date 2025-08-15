'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'All Tools', href: '/' },
  { name: 'Productivity', href: '/category/productivity' },
  { name: 'Design', href: '/category/design' },
  { name: 'Development', href: '/category/development' },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed hidden w-64 p-6 bg-black border-r border-gray-700 md:static md:block">
        <h2 className="mb-6 text-2xl font-bold text-white">Toolyst</h2>
        <nav>
          <ul>
            {categories.map(category => (
              <li key={category.name} className="mb-3">
                <Link
                  href={category.href}
                  className="text-lg font-medium text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Dropdown Menu */}
      <div className="fixed z-50 md:hidden top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-12 h-12 text-white bg-black border-gray-700 rounded-lg hover:bg-gray-800"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 mr-2 text-white bg-black border-gray-700 rounded-lg"
            align="end"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categories.map(category => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link
                    href={category.href}
                    className="w-full px-4 py-2 text-gray-300 transition-colors duration-200 hover:text-white hover:bg-gray-800"
                  >
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </motion.div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
