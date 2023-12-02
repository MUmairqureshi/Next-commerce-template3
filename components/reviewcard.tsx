/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react';

const ReviewCard = ({ card }: { card: any }) => {
  // console.log("card",card)
  return (
    <div className={`relative mx-auto mt-20 rounded-xl py-4 pb-16 shadow-lg`}>
      <div className={`bg-black'} absolute -top-14 left-1/2 h-28 w-28 -translate-x-1/2 transform`}>
        <img
          alt={`brand-logo`}
          className="h-full w-full rounded-full object-cover"
          src={card.image}
        />
      </div>
      <h1 className="pt-20 text-lg font-medium">{card.name}</h1>
      <h2 className="text-xs">{card.location}</h2>
      <p className="mx-auto px-8 py-6 text-sm text-slate-600">{card.review}</p>
      <div className="flex items-center justify-center gap-x-1">
        {[...Array(card.rating)].map((_, i) => (
          <Star key={i} size={12} strokeWidth={0.5} fill="black" />
        ))}
      </div>
      <h3 className="py-6 text-sm">{card.location}</h3>
    </div>
  );
};

export default ReviewCard;
