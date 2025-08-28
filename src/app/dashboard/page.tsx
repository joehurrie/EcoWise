import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { ImpactTracker } from '@/components/dashboard/impact-tracker';
import { EcoGoals } from '@/components/dashboard/eco-goals';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Insights } from '@/components/dashboard/insights';
import { EcoProfile } from '@/components/dashboard/eco-profile';
import { CommunityPulse } from '@/components/dashboard/community-pulse';
import { WhatIfSimulator } from '@/components/dashboard/what-if-simulator';
import { SuggestedActions } from '@/components/dashboard/suggested-actions';
import { DataPrivacy } from '@/components/dashboard/data-privacy';
import { Footer } from '@/components/landing/footer';

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 text-gray-800 -m-8">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6">
        <ImpactTracker />
        <EcoGoals />
        <RecentActivity />
        <Insights />
        <EcoProfile />
        <CommunityPulse />
        <WhatIfSimulator />
        <SuggestedActions />
        <DataPrivacy />
      </main>
      <Footer />
    </div>
  );
}
