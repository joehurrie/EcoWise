import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, MoveRight } from 'lucide-react';

const products = [
  {
    name: 'Organic Kenyan Coffee',
    rating: '4.8 ★',
    description: 'Fair trade, organic, carbon neutral',
    price: 'KES 450',
    image: 'https://images.unsplash.com/photo-1583947581924-a6d225df0c9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hint: 'organic coffee',
  },
  {
    name: 'Bamboo Toothbrush',
    rating: '4.6 ★',
    description: 'Biodegradable, plastic-free packaging',
    price: 'KES 200',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hint: 'bamboo toothbrush',
  },
  {
    name: 'Stainless Steel Bottle',
    rating: '4.9 ★',
    description: 'BPA-free, made from recycled materials',
    price: 'KES 1,200',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hint: 'steel bottle',
  },
  {
    name: 'Organic Lavender Soap',
    rating: '4.7 ★',
    description: 'Handmade, chemical-free, vegan',
    price: 'KES 350',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hint: 'lavender soap',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#333333]">
            Featured Sustainable Products
          </h2>
          <Link href="/products" className="text-[#4CAF50] hover:text-green-600 font-medium flex items-center">
            View all
            <MoveRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-xl shadow-md overflow-hidden product-card transition duration-300">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={634}
                  height={423}
                  className="w-full h-48 object-cover"
                  data-ai-hint={product.hint}
                />
                <div className="absolute top-2 right-2 bg-[#A6E22E] text-[#15332A] px-2 py-1 rounded-md text-xs font-bold">
                  {product.rating}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-lg text-[#333333]">{product.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">ECO</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#333333]">{product.price}</span>
                  <Button variant="ghost" size="icon" className="text-[#4CAF50] hover:text-green-600">
                    <Plus />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
