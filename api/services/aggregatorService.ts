import { getBookById } from './bookService.js';
import cache from './cache.js';

export function getAggregatedBookDetail(id: string) {
  const cacheKey = `book_detail_${id}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const book = getBookById(id);
  if (!book) return null;

  const result = {
    basicInfo: {
      title: book.title,
      author: book.author,
      cover: book.cover,
      publisher: book.publisher,
      publishDate: book.publishDate,
      isbn: book.isbn,
      pages: book.pages,
      summary: book.summary,
      category: book.category,
    },
    ratings: book.ratings,
    sellingPoints: {
      buyPoints: book.buyPoints,
      sellPoints: book.sellPoints,
      painPoints: book.painPoints,
    },
    redNotes: book.redNotes,
    platformLinks: book.platformLinks,
  };

  cache.set(cacheKey, result);
  return result;
}