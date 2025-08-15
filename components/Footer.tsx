import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Footer() {
  return (
    <footer className="p-8 bg-black border-t border-gray-700">
      <Accordion type="single" collapsible className="max-w-4xl mx-auto">
        <AccordionItem value="item-1" className="border-gray-700">
          <AccordionTrigger className="text-lg font-medium text-white hover:text-gray-300">
            Dummy Section 1
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Dummy text for SEO. Replace later.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-700">
          <AccordionTrigger className="text-lg font-medium text-white hover:text-gray-300">
            Dummy Section 2
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Dummy text for SEO. Replace later.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="mt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Toolyst. All rights reserved.
      </p>
    </footer>
  );
}
