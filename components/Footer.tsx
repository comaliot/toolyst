import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Footer() {
  return (
    <footer className="p-6 bg-black border-t border-gray-500">
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1" className="border-gray-500">
          <AccordionTrigger className="text-white hover:text-gray-300">
            Dummy Section 1
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Dummy text for SEO. Replace later.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-500">
          <AccordionTrigger className="text-white hover:text-gray-300">
            Dummy Section 2
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Dummy text for SEO. Replace later.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="mt-4 text-center text-gray-500">
        © {new Date().getFullYear()} Toolyst. All rights reserved.
      </p>
    </footer>
  );
}
