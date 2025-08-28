import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PostCard } from './post-card';
import { Button } from '@/components/ui/button';

export function CommunityFeed() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Community Feed</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px] text-sm">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="transport">Transport</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[150px] text-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="top-rated">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-4">
        <PostCard
          author="Maria S."
          avatarFallback="M"
          time="2 hours ago"
          category="Fashion"
          title="Sustainable denim brands that actually last!"
          content="After years of searching, I've found these amazing brands that use organic cotton and recycled materials. My favorite is Re/Done - their jeans are made from vintage Levi's and the quality is incredible!"
          tags={['Recycled Materials', 'Fair Trade', 'Organic Cotton']}
          likes={42}
          comments={8}
        />
        <PostCard
          author="Alex T."
          avatarFallback="A"
          verified
          time="5 hours ago"
          category="Home"
          title="Zero-waste kitchen swap that saved me money"
          content="I replaced all my plastic containers with glass jars and beeswax wraps. Initial investment was about $120 but I've saved over $300 in 6 months by buying bulk and reducing food waste. Here's how I did it..."
          images={[
            'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1583947581924-a6d1dfc529a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1550583720-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          ]}
          likes={87}
          comments={23}
        />
      </div>
      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Load More Posts
        </Button>
      </div>
    </section>
  );
}
