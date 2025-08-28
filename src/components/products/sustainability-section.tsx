'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, CheckCircle, InfoCircle, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScoreBreakdown = ({ title, score }: { title: string, score: string }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-100">
        <div className="flex justify-between mb-2">
            <span className="font-medium">{title}</span>
            <span className="font-bold text-green-600">{score}</span>
        </div>
        <div className="impact-meter w-full mb-2"></div>
        <p className="text-sm text-gray-600">
            {title === 'Carbon Footprint' && '85% lower emissions than conventional shampoo due to local production and plastic-free packaging.'}
            {title === 'Packaging' && '100% plastic-free, compostable paper packaging with soy-based ink.'}
            {title === 'Sourcing Ethics' && 'Ingredients sourced from Fairtrade certified suppliers with living wage guarantees.'}
            {title === 'Recyclability' && 'Packaging is fully compostable in home compost systems within 8 weeks.'}
        </p>
    </div>
);


export function SustainabilitySection() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Leaf className="text-green-600 mr-2" /> Sustainability Score Breakdown
                </h2>
                
                <div className="flex items-center mb-6">
                    <div className="sustainability-badge badge-Aplus mr-4">A+</div>
                    <div>
                        <h3 className="font-medium">Excellent Sustainability Rating</h3>
                        <p className="text-sm text-gray-600">This product scores in the top 10% of similar items for environmental impact.</p>
                    </div>
                </div>

                <div className="mb-4">
                    <Button
                        id="breakdownToggle"
                        variant="ghost"
                        className="w-full flex justify-between items-center py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <span className="font-medium">View detailed breakdown</span>
                        <ChevronDown className={cn("transition-transform duration-300", isExpanded && 'rotate-180')} />
                    </Button>
                    <div className={cn("expandable-section bg-gray-50 rounded-b-lg overflow-hidden", isExpanded && "expanded")}>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ScoreBreakdown title="Carbon Footprint" score="A+" />
                                <Score-breakdown title="Packaging" score="A+" />
                                <Score-breakdown title="Sourcing Ethics" score="A" />
                                <Score-breakdown title="Recyclability" score="A" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-start">
                        <CheckCircle className="text-blue-500 mt-1 mr-2 h-5 w-5" />
                        <div>
                            <h3 className="font-medium mb-1">Verified by EcoWise</h3>
                            <p className="text-sm text-gray-700">Our team has independently verified all sustainability claims for this product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

