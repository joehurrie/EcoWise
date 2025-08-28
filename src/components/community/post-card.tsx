import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';

interface PostCardProps {
  author: string;
  avatarFallback: string;
  time: string;
  category: string;
  title: string;
  content: string;
  tags?: string[];
  images?: string[];
  likes: number;
  comments: number;
  verified?: boolean;
}

export function PostCard({
  author,
  avatarFallback,
  time,
  category,
  title,
  content,
  tags,
  images,
  likes,
  comments,
  verified,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-200 post-card">
      <div className="flex items-start mb-3">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarFallback className="bg-emerald-100 text-emerald-800">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">
            {author}{' '}
            {verified && (
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full ml-1">
                Verified Reviewer
              </span>
            )}
          </p>
          <p className="text-xs text-gray-500">
            {time} • <span className="text-emerald-600">{category}</span>
          </p>
        </div>
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{content}</p>
      {images && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Post image"
              width={500}
              height={500}
              className="rounded-lg h-24 w-full object-cover"
            />
          ))}
        </div>
      )}
      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="impact-tag text-xs bg-emerald-50 text-emerald-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center text-gray-500 hover:text-emerald-600">
            <Heart className="mr-1 h-4 w-4" /> {likes}
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center text-gray-500 hover:text-emerald-600">
            <MessageCircle className="mr-1 h-4 w-4" /> {comments}
          </Button>
          <Button variant="ghost" size="icon" className="flex items-center text-gray-500 hover:text-emerald-600">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-emerald-600">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
