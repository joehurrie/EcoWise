
'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

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
    <Card className="transition-all duration-200 post-card overflow-hidden">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <Avatar className="h-11 w-11 mr-4">
            <AvatarFallback className="bg-primary/10 text-primary font-bold">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">
                  {author}
                  {verified && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Verified
                    </span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">{time}</p>
              </div>
              <Badge variant="outline" className="text-primary border-primary/50">
                {category}
              </Badge>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-bold font-headline mb-2 text-primary">
          {title}
        </h3>
        <p className="text-foreground/90 mb-4 text-sm">{content}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-accent/20 text-primary hover:bg-accent/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {images && (
        <div className="grid grid-cols-3 gap-px bg-border">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={src}
                alt="Post image"
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="bg-muted/50 p-2 px-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-muted-foreground hover:text-primary"
          >
            <Heart className="mr-2 h-4 w-4" /> {likes}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> {comments}
          </Button>
        </div>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
