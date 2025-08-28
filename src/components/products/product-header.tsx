'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Minus,
  Plus,
  ShoppingCart,
  LineChart,
} from 'lucide-react';
import { ProductImageSlider } from './product-image-slider';

const Tag = ({ children, className }: { children: React.ReactNode, className: string }) => (
  <span className={`tag ${className}`}>{children}</span>
);

export function ProductHeader() {
  const [quantity, setQuantity] = useState(1);
  const [isTracked, setIsTracked] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="w-full md:w-1/2">
        <ProductImageSlider />
        <p className="text-sm text-gray-500 text-center mt-4">
          Slide to compare with traditional packaging
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm text-gray-500">
              Eco-Friendly Personal Care
            </span>
            <h1 className="text-3xl font-bold mb-2">
              Organic Lavender Shampoo Bar
            </h1>
            <p className="text-gray-600">
              By <Link href="#" className="text-green-600 hover:underline">GreenRoots</Link>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="sustainability-badge badge-Aplus mb-2">A+</div>
            <span className="text-xs text-gray-500">Sustainability</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            A plastic-free, vegan shampoo bar that cleanses and nourishes your
            hair with organic lavender oil and shea butter. Lasts up to 80
            washes (equivalent to 3 bottles of liquid shampoo).
          </p>

          <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <CheckCircle className="text-green-600 mr-2 h-5 w-5" />
              <span className="font-medium">Impact Preview</span>
            </div>
            <p className="text-sm">
              Choosing this product saves{' '}
              <span className="font-bold">120g of CO₂</span> and{' '}
              <span className="font-bold">5 liters of water</span> compared to
              conventional shampoo.
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-2xl font-bold">$12.99</span>
              <span className="text-sm text-gray-500 ml-1">(80 washes)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-gray-200 hover:bg-gray-300" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-gray-200 hover:bg-gray-300" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Tag className="tag-plastic-free">Plastic-free</Tag>
            <Tag className="tag-organic">Organic</Tag>
            <Tag className="tag-eco">Vegan</Tag>
            <Tag className="tag-local">Cruelty-free</Tag>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button
              variant={isTracked ? 'default' : 'outline'}
              className={`flex-1 ${isTracked ? 'bg-green-600 text-white border-green-600' : ''}`}
              onClick={() => setIsTracked(!isTracked)}
            >
              <LineChart className="mr-2 h-5 w-5" />
              {isTracked ? 'Tracking Product' : 'Track This Product'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
