import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lightbulb, BarChart, Leaf, Recycle, DollarSign, Trash2 } from 'lucide-react';

export function WhatIfSimulator() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">"What If" Simulator</h2>
      <Card className="p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
                <h3 className="font-bold text-lg mb-4">Predictive Impact Tool</h3>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <p className="font-medium"><Lightbulb className="inline-block text-accent mr-2" /> Switching to refillable soap saves 2 trees/month 🌲</p>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Select a change:</label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Switch all cleaning products to refillable" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cleaning">Switch all cleaning products to refillable</SelectItem>
                                <SelectItem value="meat-free">Go meat-free for 3 days/week</SelectItem>
                                <SelectItem value="bottles">Replace plastic bottles with reusable</SelectItem>
                                <SelectItem value="led">Switch to LED bulbs</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Timeframe:</label>
                        <div className="flex space-x-2">
                            <Button className="bg-accent text-primary font-medium">1 month</Button>
                            <Button variant="secondary">3 months</Button>
                            <Button variant="secondary">1 year</Button>
                        </div>
                    </div>
                    
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-3 rounded-md font-medium mt-4">
                        Calculate Impact
                    </Button>
                </div>
            </div>
            
            <div className="lg:w-1/2">
                <h3 className="font-bold text-lg mb-4">Potential Impact</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col justify-center">
                    <div className="text-center">
                        <BarChart className="text-4xl text-accent mb-4 mx-auto" />
                        <h4 className="font-bold text-lg mb-2">Scenario: Switch all cleaning products to refillable</h4>
                        <p className="text-gray-600 mb-6">Over 1 month, you could save:</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm font-medium flex items-center"><Leaf className="mr-1 h-4 w-4"/>CO₂ Reduction</p>
                                <p className="text-accent font-bold">3.5 kg</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <p className="text-sm font-medium flex items-center"><Recycle className="mr-1 h-4 w-4"/>Plastic Avoided</p>
                                <p className="text-accent font-bold">18 items</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                                <p className="text-sm font-medium flex items-center"><DollarSign className="mr-1 h-4 w-4"/>Money Saved</p>
                                <p className="text-accent font-bold">$25</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-sm font-medium flex items-center"><Trash2 className="mr-1 h-4 w-4"/>Waste Diverted</p>
                                <p className="text-accent font-bold">2.1 kg</p>
                            </div>
                        </div>
                        
                        <Button className="bg-accent text-primary px-6 py-2 rounded-md font-medium">
                            Save Scenario
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </Card>
    </section>
  );
}
