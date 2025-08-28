import { Star, StarHalf } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  author: string;
  avatarFallback: string;
  time: string;
  product: string;
  rating: number;
  review: string;
  tags: string[];
  verified?: boolean;
}

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 text-amber-400 fill-amber-400" />
      ))}
      {halfStar && <StarHalf className="h-4 w-4 text-amber-400 fill-amber-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-amber-400 fill-gray-200" />
      ))}
    </>
  );
};

export function ReviewCard({
  author,
  avatarFallback,
  time,
  product,
  rating,
  review,
  tags,
  verified,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex items-start mb-3">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarFallback
            className={cn(
              verified
                ? 'bg-purple-100 text-purple-800'
                : 'bg-blue-100 text-blue-800'
            )}
          >
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">
            {author}
            {verified && (
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full ml-1">
                Verified Reviewer
              </span>
            )}
          </p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex text-amber-400 mr-2">
          {renderStars(rating)}
        </div>
        <span className="font-medium text-sm">{product}</span>
      </div>
      <p className="text-gray-700 text-sm mb-3">{review}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="impact-tag text-xs bg-emerald-50 text-emerald-800 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
