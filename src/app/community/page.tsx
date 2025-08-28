import { WelcomeBanner } from '@/components/community/welcome-banner';
import { CommunityFeed } from '@/components/community/community-feed';
import { SubmitProduct } from '@/components/community/submit-product';
import { QuickPoll } from '@/components/community/quick-poll';
import { UpcomingEvents } from '@/components/community/upcoming-events';
import { TopContributors } from '@/components/community/top-contributors';
import { DiscussionBoards } from '@/components/community/discussion-boards';

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CommunityFeed />
          <SubmitProduct />
        </div>
        <div className="space-y-6">
          <QuickPoll />
          <UpcomingEvents />
          <TopContributors />
          <DiscussionBoards />
        </div>
      </div>
    </div>
  );
}
