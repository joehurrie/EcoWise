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
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          <div className="space-y-8">
            <CommunityFeed />
            <SubmitProduct />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="space-y-6">
            <QuickPoll />
            <UpcomingEvents />
            <TopContributors />
            <DiscussionBoards />
          </div>
        </div>
      </div>
    </div>
  );
}
