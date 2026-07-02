import { seedBooks } from '../data/seed.js';

export interface BookSummary {
  id: string;
  title: string;
  author: string;
  cover: string;
  publisher: string;
  year: string;
  rating: number;
  source: string;
}

export function searchBooks(query: string, page: number = 1, limit: number = 10): { books: BookSummary[]; total: number } {
  const q = query.toLowerCase().trim();
  const filtered = seedBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.summary.toLowerCase().includes(q)
  );

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  const books: BookSummary[] = paginated.map((b) => ({
    id: b.id,
    title: b.title,
    author: b.author,
    cover: b.cover,
    publisher: b.publisher,
    year: b.publishDate.split('-')[0],
    rating: b.ratings[0]?.score || 0,
    source: 'seed',
  }));

  return { books, total };
}

export function getBookById(id: string) {
  return seedBooks.find((b) => b.id === id) || null;
}

export function getHotBooks(limit: number = 6) {
  return seedBooks.slice(0, limit).map((b) => ({
    id: b.id,
    title: b.title,
    author: b.author,
    cover: b.cover,
    rating: b.ratings[0]?.score || 0,
    category: b.category,
  }));
}