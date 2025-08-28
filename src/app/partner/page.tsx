import { PartnerHeader } from '@/components/partner/partner-header';
import { ValuePropositions } from '@/components/partner/value-propositions';
import { ImpactDashboardPreview } from '@/components/partner/impact-dashboard-preview';
import { PartnerSpotlight } from '@/components/partner/partner-spotlight';
import { FinalCta } from '@/components/partner/final-cta';
import { Footer } from '@/components/landing/footer';

export default function PartnerPage() {
  return (
    <div className="bg-gray-50 text-gray-800 -m-8">
      <PartnerHeader />
      <main className="container mx-auto px-4 py-6">
        <ValuePropositions />
        <ImpactDashboardPreview />
        <PartnerSpotlight />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
