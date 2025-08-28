'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FilterPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-2">
            <Input type="text" placeholder="Search brands..." className="w-full px-3 py-1 border border-gray-300 rounded text-sm mb-2" />
        </div>
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2 p-2 bg-white border rounded-md shadow-lg">
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
            </Accordion>
        </div>
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="impact">
                    <AccordionTrigger>Impact Type</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2 p-2 bg-white border rounded-md shadow-lg">
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
            </Accordion>
        </div>
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="certifications">
                    <AccordionTrigger>Certifications</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2 p-2 bg-white border rounded-md shadow-lg">
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
            </Accordion>
        </div>
        
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <Button variant="outline">Reset All</Button>
        <Button className="bg-green-600 text-white hover:bg-green-700">Apply Filters</Button>
      </div>
    </div>
  );
}
