import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, MoveRight } from 'lucide-react';

const products = [
  {
    name: 'Organic Kenyan Tea',
    rating: '4.8 ★',
    description: 'Fair trade, organic,localy made, carbon neutral',
    price: 'KES 450',
    image: 'https://i.pinimg.com/1200x/28/e9/f1/28e9f1ef7fe1401c46c94d3535427e3a.jpg',
    hint: 'organic coffee',
  },
  {
    name: 'Solar Lamp',
    rating: '4.6 ★',
    description: 'Clean Energy, recycled materials',
    price: 'KES 2,000',
    image: 'https://i.pinimg.com/1200x/70/6c/ab/706cab25182d6760115c844507da481d.jpg',
    hint: 'disposable straws',
  },
  {
    name: 'Recycled glass Bottles',
    rating: '4.9 ★',
    description: 'BPA-free, made from recycled materials',
    price: 'KES 1,200',
    image: 'https://i.pinimg.com/736x/45/f5/fb/45f5fb1f2491cb0cb639bd2945462ae0.jpg',
    hint: 'glass bottle',
  },
  {
    name: 'Organic Lavender Soap',
    rating: '4.7 ★',
    description: 'Handmade, chemical-free, vegan',
    price: 'KES 350',
    image: 'https://i.pinimg.com/1200x/db/a9/d3/dba9d35f9d8119b2af988b5c6753a006.jpg',
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
