'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FilterPanel() {
  return (
    <div className="filter-panel bg-white p-6 rounded-lg shadow-sm md:w-64 flex-shrink-0" id="filterPanel">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Filters</h3>
      </div>

      <Accordion type="multiple" defaultValue={['category', 'impact', 'certifications', 'brand']}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cat-food" /> <span>Food</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cat-fashion" /> <span>Fashion</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cat-home" /> <span>Home</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cat-tech" /> <span>Tech</span>
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="impact">
          <AccordionTrigger>Impact Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="impact-co2" /> <span>Low CO₂</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="impact-plastic" /> <span>Plastic-Free</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="impact-local" /> <span>Locally Produced</span>
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="certifications">
          <AccordionTrigger>Certifications</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cert-kebs" /> <span>KEBS</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cert-iso" /> <span>ISO</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cert-fairtrade" /> <span>Fairtrade</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="cert-organic" /> <span>Organic</span>
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <Input type="text" placeholder="Search brands..." className="w-full px-3 py-1 border border-gray-300 rounded text-sm mb-2" />
            <div className="max-h-40 overflow-y-auto space-y-2">
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="brand-mkopa" /> <span>M-KOPA Solar</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="brand-ecopost" /> <span>EcoPost</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="brand-greenthing" /> <span>GreenThing</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="brand-orchid" /> <span>Orchid Valley</span>
              </Label>
              <Label className="flex items-center space-x-2 font-normal">
                <Checkbox id="brand-chandaria" /> <span>Chandaria Industries</span>
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-6 space-y-2">
        <Button className="w-full bg-green-600 text-white hover:bg-green-700">Apply Filters</Button>
        <Button variant="outline" className="w-full">Reset All</Button>
      </div>
    </div>
  );
}
