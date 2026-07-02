import express from 'express';

const router = express.Router();

// 获取支持的平台列表
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: {
      platforms: [
        { key: 'douban', name: '豆瓣读书', enabled: true },
        { key: 'weread', name: '微信读书', enabled: true },
        { key: 'zlibrary', name: 'Z-Library', enabled: true },
        { key: 'jd', name: '京东图书', enabled: true },
        { key: 'dangdang', name: '当当网', enabled: true },
      ],
    },
  });
});

export default router;