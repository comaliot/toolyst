import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Toolyst - Useful Online Tools',
  description:
    'Discover and share useful online tools, categorized for easy access.',
  openGraph: {
    title: 'Toolyst - Useful Online Tools',
    description:
      'Discover and share useful online tools, categorized for easy access.',
    url: 'https://toolyst.com', // Update with your domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <div className="flex flex-col min-h-screen md:flex-row">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
