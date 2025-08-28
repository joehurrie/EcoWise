'use client';

import { ProductHeader } from '@/components/products/product-header';
import { SustainabilitySection } from '@/components/products/sustainability-section';
import { BrandTransparency } from '@/components/products/brand-transparency';
import { AlternativesSection } from '@/components/products/alternatives-section';
import { CommunityInsights } from '@/components/products/community-insights';
import { InYourCartNudge } from '@/components/products/in-your-cart-nudge';
import { ShareProduct } from '@/components/products/share-product';

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProductHeader />
      <SustainabilitySection />
      <BrandTransparency />
      <AlternativesSection />
      <CommunityInsights />
      <InYourCartNudge />
      <ShareProduct />
    </main>
  );
}
