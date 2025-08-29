'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Recycle, PlusCircle, Filter } from 'lucide-react';

const alternatives = [
  { name: 'Rosemary Mint Shampoo Bar', brand: 'By EarthKind', price: '$10.99', rating: 'A+', image: 'https://i.pinimg.com/736x/b7/93/2c/b7932c34c30cd9892bd335770e060e88.jpg', tags: ['Plastic-free', 'Locally made']},
  { name: 'Refillable Shampoo', brand: 'By EcoBath', price: '$14.99', rating: 'A', image: 'https://i.pinimg.com/1200x/c3/2a/fa/c32afaba5bde265017093ebebd1f425a.jpg', tags: ['Refillable', 'Organic']},
  { name: 'Aloe Vera Shampoo', brand: 'By Nature\'s Way', price: '$9.49', rating: 'B', image: 'https://i.pinimg.com/736x/78/8c/b4/788cb4bc473707c951a7d20555c2fd99.jpg', tags: ['Biodegradable', 'Recycled ']},
  { name: 'Charcoal Detox Bar', brand: 'By PureLife', price: '$11.99', rating: 'A+', image: 'https://i.pinimg.com/1200x/7a/59/47/7a5947722e8c2cdf142546518534d935.jpg', tags: ['Plastic-free', 'Organic', 'Zero waste']},
];

const Tag = ({ children, className }: { children: React.ReactNode, className: string }) => (
    <span className={`tag ${className}`}>{children}</span>
);

const AlternativeCard = ({ product }: { product: typeof alternatives[0] }) => (
    <div className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
            <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-40 object-cover" />
            <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">{product.rating}</div>
        </div>
        <div className="p-4">
            <h3 className="font-medium mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
            <div className="flex flex-wrap gap-1 mb-3">
                {product.tags.map(tag => {
                    let tagClass = '';
                    if(tag === 'Plastic-free' || tag === 'Recycled plastic' || tag === 'Zero waste') tagClass = 'tag-plastic-free';
                    if(tag === 'Locally made') tagClass = 'tag-local';
                    if(tag === 'Refillable' || tag === 'Biodegradable') tagClass = 'tag-eco';
                    if(tag === 'Organic') tagClass = 'tag-organic';
                    return <Tag key={tag} className={tagClass}>{tag}</Tag>
                })}
            </div>
            <div className="flex justify-between items-center">
                <span className="font-bold">{product.price}</span>
                <Button variant="ghost" size="icon">
                    <PlusCircle className="text-green-600" />
                </Button>
            </div>
        </div>
    </div>
);

export function AlternativesSection() {
    return (
        <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Recycle className="text-green-600 mr-2" /> Eco-Friendly Alternatives
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alternatives.map(alt => <AlternativeCard key={alt.name} product={alt} />)}
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Filter className="text-gray-500 h-5 w-5" />
                        <span className="text-sm font-medium">Filter alternatives:</span>
                    </div>
                    <div className="flex space-x-2 overflow-x-auto py-2">
                        <Button variant="ghost" className="whitespace-nowrap px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">All</Button>
                        <Button variant="ghost" className="whitespace-nowrap px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Under $10</Button>
                        <Button variant="ghost" className="whitespace-nowrap px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Plastic-free</Button>
                        <Button variant="ghost" className="whitespace-nowrap px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Local</Button>
                        <Button variant="ghost" className="whitespace-nowrap px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">A+ Rated</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
