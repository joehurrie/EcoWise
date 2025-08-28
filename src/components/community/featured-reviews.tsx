import { ReviewCard } from './review-card';

export function FeaturedReviews() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          Featured Product Reviews
        </h2>
        <a
          href="#"
          className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReviewCard
          author="Sarah L."
          avatarFallback="S"
          verified
          time="Yesterday"
          product="Who Gives A Crap Toilet Paper"
          rating={4.5}
          review='"I was skeptical about bamboo TP but this is so soft! Plus 50% of profits go to building toilets in developing countries. The packaging is plastic-free and adorable."'
          tags={['Plastic-Free', 'Charity Support', 'Bamboo']}
        />
        <ReviewCard
          author="David K."
          avatarFallback="D"
          time="2 days ago"
          product="Patagonia Nano Puff Jacket"
          rating={4}
          review='"Worth every penny. Keeps me warm in freezing temps, packs down small, and made from recycled materials. Patagonia\'s repair program means this jacket could last decades."'
          tags={['Recycled Materials', 'Repairable', 'Fair Trade']}
        />
      </div>
    </div>
  );
}
