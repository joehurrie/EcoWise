'use client';
import { ShoppingCart, Cloud, Droplets, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InYourCartNudge() {
    return (
        <section className="mb-12">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <ShoppingCart className="text-blue-600 mr-2" /> In Your Cart
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-2/3 mb-4 md:mb-0 md:pr-4">
                        <p className="text-gray-700 mb-2">You have <span className="font-bold">2 bottles of conventional shampoo</span> in your cart.</p>
                        <p className="font-medium">Switching to this shampoo bar would save:</p>
                        <div className="flex flex-wrap space-x-6 mt-3">
                            <div className="flex items-center">
                                <Cloud className="text-gray-500 mr-2 h-5 w-5" />
                                <span>240g CO₂</span>
                            </div>
                            <div className="flex items-center">
                                <Droplets className="text-gray-500 mr-2 h-5 w-5" />
                                <span>10 liters water</span>
                            </div>
                            <div className="flex items-center">
                                <Trash2 className="text-gray-500 mr-2 h-5 w-5" />
                                <span>2 plastic bottles</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap">
                            Compare Products
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
