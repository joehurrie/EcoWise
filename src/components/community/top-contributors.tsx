import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const contributors = [
  {
    name: 'Alex T.',
    role: 'Most Helpful Reviewer',
    points: 1240,
    avatarFallback: 'A',
    color: 'bg-yellow-400',
  },
  {
    name: 'Sarah L.',
    role: 'Top Tip Sharer',
    points: 987,
    avatarFallback: 'S',
    color: 'bg-slate-400',
  },
  {
    name: 'David K.',
    role: 'EcoWise Scout',
    points: 756,
    avatarFallback: 'D',
    color: 'bg-orange-400',
  },
];

export function TopContributors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-4">
          {contributors.map((contributor, index) => (
            <div key={contributor.name} className="flex items-center gap-4">
              <div className="flex-shrink-0 font-bold w-5 text-center text-muted-foreground">{index + 1}</div>
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {contributor.avatarFallback}
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold text-foreground">{contributor.name}</p>
                <p className="text-xs text-muted-foreground">{contributor.role}</p>
              </div>
              <Badge
                variant="secondary"
                className="flex-shrink-0 bg-accent/30 text-primary font-bold"
              >
                {contributor.points} pts
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full text-primary border-primary/50 hover:bg-accent/20 hover:text-primary"
          >
            <Trophy className="mr-2" />
            View Leaderboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
