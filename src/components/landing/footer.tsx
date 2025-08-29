import Link from 'next/link';
import { EcoWiseLogo, IconFacebook, IconInstagram, IconTwitter } from '@/components/icons';

export function Footer() {
  return (
    <footer className="bg-[#15332A] text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <EcoWiseLogo className="h-8 w-8 text-[#A6E22E]" />
              <h3 className="font-headline text-2xl font-bold lowercase">ecowise</h3>
            </div>
            <p className="text-gray-300 mb-4">Making sustainable shopping easy and accessible for everyone in Kenya.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                <IconFacebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                <IconInstagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                <IconTwitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Sustainability Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  KEBS Standards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Local Brands
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#A6E22E] transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Nairobi, Kenya</p>
              <p className="mb-2">info@ecowise.co.ke</p>
              <p>+254 700 123 456</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 ecowise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
