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
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-headline font-bold text-primary">Community Feed</h2>
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
      <div className="space-y-6">
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
            'https://i.pinimg.com/1200x/1f/e7/80/1fe780a2ec37c89c3ddd65bb82cb7106.jpg',
            'https://i.pinimg.com/736x/af/45/03/af4503bea312e0290d6ff1ba6a8be3ca.jpg',
            'https://i.pinimg.com/736x/a5/77/35/a57735be402ed0d5b91fde00fefa5cb2.jpg',
          ]}
          likes={87}
          comments={23}
        />
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" className="text-primary border-primary hover:bg-accent/20 hover:text-primary">
          Load More Posts
        </Button>
      </div>
    </section>
  );
}
