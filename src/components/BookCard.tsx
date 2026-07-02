import { Star } from 'lucide-react';
import { BookSummary } from '@/store/useBookStore';
import { clsx } from 'clsx';

interface BookCardProps {
  book: BookSummary;
  onClick: () => void;
  className?: string;
}

export default function BookCard({ book, onClick, className }: BookCardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 cursor-pointer group',
        'hover:-translate-y-1 active:translate-y-0',
        className
      )}
    >
      <div className="flex p-6 gap-4">
        <div className="w-24 h-36 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-serif font-semibold text-lg text-[#1B4332] line-clamp-2 leading-snug mb-1"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            {book.title}
          </h3>
          <p className="text-[#1B4332]/60 text-sm mb-3">{book.author}</p>
          <p className="text-[#1B4332]/50 text-xs mb-3">{book.publisher} · {book.year}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-[#D4A574] fill-[#D4A574]" />
            <span className="text-sm font-semibold text-[#1B4332]">{book.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}