import express from 'express';
import { searchBooks, getHotBooks } from '../services/bookService.js';
import { getAggregatedBookDetail } from '../services/aggregatorService.js';
import { generateNotes } from '../services/noteGeneratorService.js';

const router = express.Router();

// 搜索图书
router.get('/search', (req, res) => {
  const q = req.query.q as string;
  const page = parseInt((req.query.page as string) || '1');
  const limit = parseInt((req.query.limit as string) || '10');

  if (!q) {
    return res.json({
      success: true,
      data: {
        books: getHotBooks(6),
        total: getHotBooks(6).length,
        page: 1,
      },
    });
  }

  const result = searchBooks(q, page, limit);
  res.json({
    success: true,
    data: result,
  });
});

// 获取热门推荐
router.get('/hot', (req, res) => {
  const limit = parseInt((req.query.limit as string) || '6');
  const books = getHotBooks(limit);
  res.json({
    success: true,
    data: { books },
  });
});

// 获取图书详情（聚合数据）
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const data = getAggregatedBookDetail(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      error: '图书不存在',
    });
  }

  res.json({
    success: true,
    data,
  });
});

// 生成小红书笔记
router.post('/:id/notes', (req, res) => {
  const { id } = req.params;
  const notes = generateNotes(id);

  if (notes === null) {
    return res.status(404).json({
      success: false,
      error: '图书不存在',
    });
  }

  res.json({
    success: true,
    data: { notes },
  });
});

export default router;