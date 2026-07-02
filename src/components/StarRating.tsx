import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  score: number;
  maxScore: number;
  ratingsCount?: number;
}

export default function StarRating({ score, maxScore, ratingsCount }: StarRatingProps) {
  const stars = maxScore / 2;
  const normalized = (score / maxScore) * stars;
  const fullStars = Math.floor(normalized);
  const hasHalf = normalized - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#D4A574] fill-[#D4A574]" />
      ))}
      {hasHalf && <StarHalf className="w-4 h-4 text-[#D4A574] fill-[#D4A574]" />}
      {Array.from({ length: stars - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
        <Star key={i + fullStars + (hasHalf ? 1 : 0)} className="w-4 h-4 text-[#D4A574]/30" />
      ))}
      {ratingsCount !== undefined && (
        <span className="text-xs text-[#1B4332]/50 ml-1">
          ({(ratingsCount / 1000).toFixed(1)}k)
        </span>
      )}
    </div>
  );
}