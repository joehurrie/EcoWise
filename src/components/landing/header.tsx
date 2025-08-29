'use client';

import Link from 'next/link';
import { EcoWiseLogo, MenuIcon } from '@/components/icons';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#15332A] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <EcoWiseLogo className="h-8 w-8 text-[#A6E22E]" />
          <h1 className="font-headline text-2xl font-bold lowercase">ecowise</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-[#A6E22E] transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-[#A6E22E] transition">
            Products
          </Link>
          <Link href="/dashboard" className="hover:text-[#A6E22E] transition">
            Impact
          </Link>
          <Link href="/community" className="hover:text-[#A6E22E] transition">
            Community
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        )}
      >
        <nav className="flex flex-col space-y-4 items-center">
          <Link href="/" className="hover:text-[#A6E22E] transition" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="hover:text-[#A6E22E] transition" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link href="/dashboard" className="hover:text-[#A6E22E] transition" onClick={() => setIsMenuOpen(false)}>
            Impact
          </Link>
          <Link href="/community" className="hover:text-[#A6E22E] transition" onClick={() => setIsMenuOpen(false)}>
            Community
          </Link>
        </nav>
      </div>
    </header>
  );
}
