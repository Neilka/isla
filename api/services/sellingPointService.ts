import { getBookById } from './bookService.js';

export function getSellingPoints(id: string) {
  const book = getBookById(id);
  if (!book) return null;

  return {
    buyPoints: book.buyPoints,
    sellPoints: book.sellPoints,
    painPoints: book.painPoints,
    category: book.category,
  };
}