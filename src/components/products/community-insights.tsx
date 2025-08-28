'use client';
import { Star, StarHalf, ThumbsUp, ThumbsDown, Flag, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ratings = [
    { stars: 5, percentage: 80, count: 102 },
    { stars: 4, percentage: 15, count: 19 },
    { stars: 3, percentage: 3, count: 4 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 1, count: 1 },
]

const reviews = [
    {
        name: 'Sarah K.',
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        stars: 5,
        time: '2 weeks ago',
        text: "This shampoo bar has completely transformed my hair! It lathers beautifully and leaves my hair soft and shiny. Plus, I love that I'm reducing plastic waste.",
        likes: 24,
        dislikes: 1,
        variant: 'positive',
    },
    {
        name: 'Michael T.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        stars: 5,
        time: '1 month ago',
        text: "Great product! It took about a week for my hair to adjust, but now it's healthier than ever. The lavender scent is relaxing and not overpowering.",
        tip: 'Store on a soap dish between uses to extend its life',
        likes: 18,
        dislikes: 0,
        variant: 'positive',
    },
    {
        name: 'Priya M.',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        stars: 4,
        time: '3 months ago',
        text: "Works well but takes some getting used to. My hair feels different than with liquid shampoo, but in a good way. Packaging could be more protective during shipping.",
        likes: 5,
        dislikes: 2,
        variant: 'neutral',
    }
]

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn('text-yellow-400 h-4 w-4', i < rating ? 'fill-yellow-400' : 'fill-transparent')} />
        ))}
    </div>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className={cn('review-card bg-white p-4 rounded-lg shadow-sm', review.variant)}>
        <div className="flex justify-between mb-2">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <Image src={review.avatar} alt="User" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <StarRating rating={review.stars} />
                </div>
            </div>
            <span className="text-sm text-gray-500">{review.time}</span>
        </div>
        <p className="text-gray-700 mb-2">{review.text}</p>
        {review.tip && (
            <div className="flex items-center space-x-2 mb-2">
                <span className="tag tag-eco">Tip: {review.tip}</span>
            </div>
        )}
        <div className="flex justify-between items-center">
            <div className="flex space-x-2">
                <Button variant="ghost" className="text-gray-500 hover:text-green-600 text-sm flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" /> {review.likes}
                </Button>
                <Button variant="ghost" className="text-gray-500 hover:text-red-600 text-sm flex items-center">
                    <ThumbsDown className="mr-1 h-4 w-4" /> {review.dislikes}
                </Button>
            </div>
            <Button variant="ghost" className="text-gray-500 hover:text-blue-600 text-sm">
                <Flag className="h-4 w-4" />
            </Button>
        </div>
    </div>
);

export function CommunityInsights() {
    return (
        <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Users className="text-purple-600 mr-2" /> Community Insights
                </h2>
                
                <div className="mb-6 md:flex items-center">
                    <div className="mr-4 text-center md:text-left mb-4 md:mb-0">
                        <div className="text-3xl font-bold">4.8</div>
                        <div className="flex justify-center">
                            <Star className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                            <Star className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                            <Star className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                            <Star className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                            <StarHalf className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                        </div>
                        <div className="text-sm text-gray-500">128 reviews</div>
                    </div>
                    <div className="flex-1">
                        {ratings.map(r => (
                            <div key={r.stars} className="flex items-center mb-1">
                                <span className="w-10 text-sm text-gray-600">{r.stars}★</span>
                                <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${r.percentage}%` }}></div>
                                </div>
                                <span className="w-10 text-sm text-right text-gray-600">{r.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    {reviews.map((review, i) => <ReviewCard key={i} review={review} />)}
                </div>

                <Button variant="outline" className="w-full py-3">
                    Load More Reviews
                </Button>
            </div>
        </section>
    );
}
