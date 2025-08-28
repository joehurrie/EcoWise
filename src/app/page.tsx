import { CommunityPreview } from '@/components/landing/community-preview';
import { Cta } from '@/components/landing/cta';
import { FeaturedProducts } from '@/components/landing/featured-products';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { HowItWorks } from '@/components/landing/how-it-works';
import { ImpactPreview } from '@/components/landing/impact-preview';
import { Stats } from '@/components/landing/stats';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <FeaturedProducts />
        <ImpactPreview />
        <CommunityPreview />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
