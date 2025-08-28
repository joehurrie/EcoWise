import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const discussions = [
  {
    title: 'Sustainable Fashion',
    newCount: 142,
    thread: 'Best second-hand shopping apps?',
  },
  { title: 'Green Tech', newCount: 87, thread: 'Solar panel experiences?' },
  {
    title: 'Zero Waste Living',
    newCount: 203,
    thread: 'Composting in apartments',
  },
  {
    title: 'Plant-Based Eating',
    newCount: 56,
    thread: 'Best vegan cheese alternatives?',
  },
];

export function DiscussionBoards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">Discussion Boards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          {discussions.map((discussion) => (
            <Link
              href="#"
              key={discussion.title}
              className="block hover:bg-gray-50 p-3 rounded-lg -mx-3"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm text-foreground">{discussion.title}</span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                  {discussion.newCount} new
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Thread: "{discussion.thread}"
              </p>
            </Link>
          ))}
        </div>

        <div className="relative">
          <Input
            type="text"
            placeholder="Ask the community..."
            className="w-full pl-10 pr-4 py-2 text-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <Button variant="link" className="w-full mt-4 text-primary">View All Boards</Button>
      </CardContent>
    </Card>
  );
}
