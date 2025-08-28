import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle } from 'lucide-react';

const posts = [
  {
    id: 1,
    user: {
      name: 'EcoWarrior Jane',
      avatar: 'https://picsum.photos/100/100?random=1',
      fallback: 'EW',
    },
    time: '2 hours ago',
    content: "Just found an amazing brand of toothpaste tablets that come in a refillable glass jar! So excited to cut down on plastic tubes. Has anyone else tried them?",
    likes: 15,
    comments: 4,
  },
  {
    id: 2,
    user: {
      name: 'Sustainable Sam',
      avatar: 'https://picsum.photos/100/100?random=2',
      fallback: 'SS',
    },
    time: '1 day ago',
    content: "I've been struggling to find a good, plastic-free alternative for coffee pods. The report on my usual brand was a real eye-opener. Any recommendations?",
    likes: 8,
    comments: 12,
  },
  {
    id: 3,
    user: {
      name: 'Green Thumb Gina',
      avatar: 'https://picsum.photos/100/100?random=3',
      fallback: 'GG',
    },
    time: '3 days ago',
    content: "My personal dashboard shows I've saved over 50kg of CO₂ this month just by switching my laundry detergent and using colder water. Small changes really do add up!",
    likes: 42,
    comments: 9,
  },
];

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-headline tracking-tight">Community Hub</h1>
        <p className="text-lg text-muted-foreground">
          Share tips, ask questions, and connect with fellow eco-conscious consumers.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://picsum.photos/100" data-ai-hint="profile avatar"/>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="font-semibold">What's on your mind?</p>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Share a sustainable tip or ask a question..." />
        </CardContent>
        <CardFooter>
          <Button className="ml-auto bg-accent text-accent-foreground hover:bg-accent/90">Post</Button>
        </CardFooter>
      </Card>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.user.avatar} data-ai-hint="profile avatar" />
                  <AvatarFallback>{post.user.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{post.content}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
