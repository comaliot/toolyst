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
    url: 'https://toolyst.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toolyst - Useful Online Tools',
    description:
      'Discover and share useful online tools, categorized for easy access.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Toolyst',
    url: 'https://toolyst.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://toolyst.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <div className="flex flex-col min-h-screen pt-16 md:flex-row md:pt-0">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
