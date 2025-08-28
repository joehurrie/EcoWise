'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Building, Info } from 'lucide-react';

const certifications = [
  { src: '/placeholder.svg', alt: 'Fairtrade Certified' },
  { src: '/placeholder.svg', alt: 'Cruelty Free' },
  { src: '/placeholder.svg', alt: 'ISO Certified' },
  { src: '/placeholder.svg', alt: 'KEBS Certified' },
]

export function BrandTransparency() {
  return (
    <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <Building className="text-blue-600 mr-2" /> Brand Transparency
            </h2>
            
            <div className="mb-6">
                <h3 className="font-medium mb-2">GreenRoots Sustainability Pledge</h3>
                <p className="text-gray-700 mb-4">"We commit to carbon-neutral operations by 2025, 100% plastic-free packaging, and ethical sourcing for all ingredients. Our products are always vegan and cruelty-free."</p>
                
                <div className="flex flex-wrap items-center mb-6">
                  {certifications.map(cert => (
                    <Image key={cert.alt} src={cert.src} alt={cert.alt} width={80} height={80} className="certification-badge" />
                  ))}
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                <div className="flex items-start">
                    <Info className="text-yellow-500 mt-1 mr-2 h-5 w-5" />
                    <div>
                        <h3 className="font-medium mb-1">Supply Chain Disclosure</h3>
                        <p className="text-sm text-gray-700">This brand discloses 95% of its supply chain, including all primary ingredient sources. <Link href="#" className="text-blue-600 hover:underline">View full supply chain report</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
