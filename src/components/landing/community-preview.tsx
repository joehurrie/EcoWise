import Image from 'next/image';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const communityPosts = [
  {
    name: 'Sarah K.',
    location: 'Nairobi',
    time: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hint: 'woman portrait',
    content:
      '"Switched to bamboo toothbrushes thanks to EcoWise and my dentist noticed the difference! Plus, no more plastic waste in my bathroom."',
    likes: 24,
    comments: 5,
  },
  {
    name: 'James M.',
    location: 'Mombasa',
    time: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hint: 'man portrait',
    content:
      '"Found amazing local brands through the EcoWise community that I never knew existed. Supporting Kenyan businesses while being eco-friendly is a win-win!"',
    likes: 42,
    comments: 8,
  },
];

export function CommunityPreview() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-6 text-[#333333]">
          Join Our Sustainability Community
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Connect with like-minded individuals, share tips, and discover new ways to live sustainably in Kenya.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityPosts.map((post) => (
            <div key={post.name} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={post.avatar}
                  alt={post.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-ai-hint={post.hint}
                />
                <div>
                  <h4 className="font-bold text-[#333333]">{post.name}</h4>
                  <p className="text-sm text-gray-500">
                    {post.location}, {post.time}
                  </p>
                </div>
              </div>
              <p className="mb-4">{post.content}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <span className="flex items-center text-gray-500">
                    <ThumbsUp className="h-5 w-5 mr-1" /> {post.likes}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <MessageSquare className="h-5 w-5 mr-1" /> {post.comments}
                  </span>
                </div>
                <Button variant="link" className="text-[#4CAF50] hover:text-green-600 text-sm font-medium">
                  Reply
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition inline-flex items-center">
            Join the Community
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
