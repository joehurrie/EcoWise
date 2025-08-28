
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HomeIcon, Plus, Barcode } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero-section text-white py-12 px-6 flex items-center min-h-[calc(100vh-68px)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Make climate-conscious choices in your everyday shopping
          </h2>
          <p className="text-lg mb-8">
            Scan products to view sustainability scores, discover eco-friendly alternatives, and track your personal impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/scan">
              <Button className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition flex items-center justify-center">
                <HomeIcon className="h-5 w-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#333333] font-medium py-3 px-6 rounded-md transition flex items-center justify-center">
              <Plus className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-xl w-full max-w-sm">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1587854692152-e6aad73518b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Phone scanning product"
                width={300}
                height={200}
                className="rounded-xl w-full h-auto"
                data-ai-hint="phone scanning product"
              />
              <Link href="/scan" className="absolute -bottom-6 -right-6 bg-[#A6E22E] p-4 rounded-full scan-button hover:bg-accent/90 transition-all flex items-center gap-2 text-[#15332A] font-bold">
                <Barcode className="h-8 w-8" />
                <span className="text-lg pr-2">Scan</span>
              </Link>
            </div>
            <div className="mt-6 p-4">
              <h3 className="font-headline text-xl font-bold text-[#333333] mb-2">Scan any product</h3>
              <p className="text-gray-600">
                Get instant sustainability ratings for emissions, packaging, sourcing and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
