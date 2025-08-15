import { tools } from '@/lib/tools';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ToolPageContent from '@/components/ToolPageContent';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug.toLowerCase().trim();
  const tool = tools.find(tool => tool.slug.toLowerCase().trim() === slug);
  if (!tool) {
    console.log(`Metadata: No tool found for slug "${slug}"`);
    return { title: 'Tool Not Found' };
  }

  return {
    title: `${tool.name} - Toolyst`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - Toolyst`,
      description: tool.description,
      url: `https://toolyst.com/tool/${tool.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - Toolyst`,
      description: tool.description,
    },
  };
}

export default function ToolPage({ params }: Props) {
  const slug = params.slug.toLowerCase().trim();
  const tool = tools.find(tool => tool.slug.toLowerCase().trim() === slug);
  if (!tool) {
    console.log(`Page: No tool found for slug "${slug}"`);
    notFound();
  }

  return <ToolPageContent tool={tool} />;
}
