'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Share2, Link as LinkIcon, Mail, ExternalLink } from 'lucide-react';
import { IconFacebook, IconTwitter, IconInstagram } from '@/components/icons';

const Tag = ({ children, className }: { children: React.ReactNode, className: string }) => (
    <span className={`tag ${className}`}>{children}</span>
);

export function ShareProduct() {
    return (
        <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Share2 className="text-purple-600 mr-2" /> Share This Product
                </h2>
                <p className="text-gray-700 mb-4">Help others make sustainable choices by sharing this product's impact.</p>
                
                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <Image src="https://picsum.photos/800/800?random=1" alt="Product" width={200} height={200} className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-full md:w-3/4 md:pl-4">
                            <h3 className="font-bold text-lg mb-1">Organic Lavender Shampoo Bar</h3>
                            <div className="flex items-center mb-2">
                                <div className="sustainability-badge badge-Aplus mr-2 !w-12 !h-12 !text-base">A+</div>
                                <span className="text-sm text-gray-600">Sustainability Rating</span>
                            </div>
                            <p className="text-gray-700 mb-3 text-sm">Plastic-free shampoo bar that saves 120g CO₂ and 5 liters water per use compared to conventional shampoo.</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                <Tag className="tag-plastic-free">Plastic-free</Tag>
                                <Tag className="tag-organic">Organic</Tag>
                                <Tag className="tag-eco">Vegan</Tag>
                            </div>
                            <Button variant="link" className="text-purple-600 hover:text-purple-800 text-sm p-0 h-auto">
                                <ExternalLink className="mr-1 h-4 w-4" /> View on EcoScan
                            </Button>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <IconFacebook className="mr-2 h-5 w-5" /> Share
                    </Button>
                    <Button className="bg-blue-400 hover:bg-blue-500 text-white">
                        <IconTwitter className="mr-2 h-5 w-5" /> Tweet
                    </Button>
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                        <IconInstagram className="mr-2 h-5 w-5" /> Share
                    </Button>
                    <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                        <Mail className="mr-2 h-5 w-5" /> Email
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <LinkIcon className="mr-2 h-5 w-5" /> Copy Link
                    </Button>
                </div>
            </div>
        </section>
    );
}
