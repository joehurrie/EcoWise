import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const contributors = [
  {
    name: 'Alex T.',
    role: 'Most Helpful Reviewer',
    points: 1240,
    avatarFallback: 'A',
    color: 'amber',
  },
  {
    name: 'Sarah L.',
    role: 'Top Tip Sharer',
    points: 987,
    avatarFallback: 'S',
    color: 'purple',
  },
  {
    name: 'David K.',
    role: 'EcoWise Scout',
    points: 756,
    avatarFallback: 'D',
    color: 'blue',
  },
];

export function TopContributors() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-5">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Top Contributors
      </h2>

      <div className="mb-4 space-y-3">
        {contributors.map((contributor) => (
          <div key={contributor.name} className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback
                className={`bg-${contributor.color}-100 text-${contributor.color}-800`}
              >
                {contributor.avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{contributor.name}</p>
              <p className="text-xs text-gray-500">{contributor.role}</p>
            </div>
            <Badge
              variant="secondary"
              className={`ml-auto bg-${contributor.color}-100 text-${contributor.color}-800`}
            >
              {contributor.points} pts
            </Badge>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-sm"
        >
          View Leaderboard
        </Button>
      </div>
    </section>
  );
}
