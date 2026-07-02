import { getBookById, createTempBookData } from './bookService.js';
import cache from './cache.js';

export function getAggregatedBookDetail(id: string) {
  const cacheKey = `book_detail_${id}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const book = getBookById(id);

  // 如果是临时书籍（搜索不到的新书），动态生成数据
  if (!book && id.startsWith('temp_')) {
    // 从id解码书名
    const base64Part = id.replace('temp_', '');
    const title = Buffer.from(base64Part, 'base64').toString('utf-8');
    const result = createTempBookData(id, title, '未知作者');
    return result;
  }

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