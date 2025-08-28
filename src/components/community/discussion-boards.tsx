import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';

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
    <section className="bg-white rounded-xl shadow-sm p-5">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Discussion Boards
      </h2>

      <div className="space-y-3 mb-4">
        {discussions.map((discussion) => (
          <Link
            href="#"
            key={discussion.title}
            className="block hover:bg-gray-50 p-2 rounded-lg"
          >
            <div className="flex justify-between">
              <span className="font-medium text-sm">{discussion.title}</span>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                {discussion.newCount} new
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Thread: "{discussion.thread}"
            </p>
          </Link>
        ))}
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder="Ask the community..."
          className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
