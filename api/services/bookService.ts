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

// 处理搜索 - 如果没有匹配到种子数据，创建一个虚拟书籍
export function searchBooks(query: string, page: number = 1, limit: number = 10): { books: BookSummary[]; total: number } {
  const q = query.toLowerCase().trim();
  const filtered = seedBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.summary.toLowerCase().includes(q)
  );

  // 如果没有找到，添加一个"虚拟"搜索结果供用户直接生成
  if (filtered.length === 0) {
    // 生成一个临时书籍，让用户可以进入详情页生成笔记
    const tempBook: BookSummary = {
      id: `temp_${Buffer.from(q).toString('base64').slice(0, 20)}`,
      title: query,
      author: '未知作者',
      cover: generatePlaceholderCover(query),
      publisher: '未知出版社',
      year: new Date().getFullYear().toString(),
      rating: 0,
      source: 'custom',
    };
    return { books: [tempBook], total: 1 };
  }

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

function generatePlaceholderCover(title: string): string {
  // 使用picsum提供的占位封面
  const colors = ['1B4332', '2D6A4F', 'C1666B', 'D4A574', '765457', '52796F'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return `https://placehold.co/400x600/${color}/ffffff?text=${encodeURIComponent(title)}`;
}

export function getBookById(id: string) {
  if (id.startsWith('temp_')) {
    return null; // 表示需要动态生成
  }
  return seedBooks.find((b) => b.id === id) || null;
}

// 根据书名和分类生成默认数据
export function createTempBookData(id: string, title: string, author: string): {
  basicInfo: {
    title: string;
    author: string;
    cover: string;
    publisher: string;
    publishDate: string;
    isbn: string;
    pages: number;
    summary: string;
    category: string;
  };
  ratings: any[];
  sellingPoints: {
    buyPoints: string[];
    sellPoints: string[];
    painPoints: string[];
  };
  redNotes: any[];
  platformLinks: any[];
} {
  const defaultCategory = inferCategory(title);
  const [templateBuy, templateSell, templatePain] = getTemplateByCategory(defaultCategory);

  return {
    basicInfo: {
      title,
      author: author === '未知作者' ? '' : author,
      cover: generatePlaceholderCover(title),
      publisher: '',
      publishDate: '',
      isbn: '',
      pages: 0,
      summary: '',
      category: defaultCategory,
    },
    ratings: [
      { platform: 'douban', platformName: '豆瓣读书', score: 0, maxScore: 10, ratingsCount: 0, summary: '暂无评分' },
      { platform: 'weread', platformName: '微信读书', score: 0, maxScore: 100, ratingsCount: 0, summary: '暂无推荐值' },
    ],
    sellingPoints: {
      buyPoints: templateBuy,
      sellPoints: templateSell,
      painPoints: templatePain,
    },
    redNotes: [],
    platformLinks: [
      { platform: 'douban', platformName: '豆瓣读书', url: `https://search.douban.com/book/subject_search?search_text=${encodeURIComponent(title)}` },
      { platform: 'weread', platformName: '微信读书', url: `https://weread.qq.com/web/search/?keyword=${encodeURIComponent(title)}` },
      { platform: 'jd', platformName: '京东图书', url: `https://search.jd.com/Search?keyword=${encodeURIComponent(title)}` },
      { platform: 'dangdang', platformName: '当当', url: `https://search.dangdang.com/?key=${encodeURIComponent(title)}` },
    ],
  };
}

function inferCategory(title: string): string {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('成长') || titleLower.includes('认知') || titleLower.includes('自律') || titleLower.includes('坚持')) return '个人成长';
  if (titleLower.includes('心理') || titleLower.includes('焦虑') || titleLower.includes('抑郁') || titleLower.includes('情绪')) return '心理学';
  if (titleLower.includes('历史') || titleLower.includes('中国史') || titleLower.includes('世界史') || titleLower.includes('明朝') || titleLower.includes('人类简史')) return '历史人文';
  if (titleLower.includes('商业') || titleLower.includes('投资') || titleLower.includes('财富') || titleLower.includes('营销') || titleLower.includes('管理')) return '商业财经';
  if (titleLower.includes('职场') || titleLower.includes('沟通') || titleLower.includes('管理') || titleLower.includes('领导力') || titleLower.includes('逻辑')) return '职场技能';
  if (titleLower.includes('小说') || titleLower.includes('科幻') || titleLower.includes('悬疑') || titleLower.includes('三体')) return '科幻小说';
  if (titleLower.includes('文学') || titleLower.includes('散文') || titleLower.includes('诗集') || titleLower.includes('经典')) return '文学经典';
  return '个人成长';
}

function getTemplateByCategory(category: string): [string[], string[], string[]] {
  const templates: Record<string, [string[], string[], string[]]> = {
    '个人成长': [
      ['想改变却找不到方向', '努力很久看不到进步，陷入自我怀疑', '想培养好习惯但总是三分钟热度', '被手机和娱乐分散注意力，静不下心'],
      ['基于科学验证的方法论，简单可操作', '百万读者口碑验证，豆瓣高分推荐', '从底层逻辑帮你建立成长思维框架', '读完就能立即行动，不是鸡汤是干货'],
      ['每天忙忙碌碌却没有真正成长', '知道很多道理却依然过不好这一生', '焦虑迷茫，找不到人生方向', '想自律但大脑总被即时满足劫持'],
    ],
    '心理学': [
      ['总是太在意别人的看法活得小心翼翼', '在人际关系中感到疲惫', '原生家庭的阴影如何走出来', '不敢做自己怕被讨厌'],
      ['阿德勒心理学经典之作，对话体轻松易读', '课题分离概念影响千万人，帮你摆脱人际关系困扰', '豆瓣高分，口碑炸裂，治愈系经典', '读完就能改变心态，重新出发'],
      ['为什么我总是活在别人的期待里', '讨好型人格让我筋疲力尽', '原生家庭的伤如何愈合', '内心敏感，总是想太多'],
    ],
    '历史人文': [
      ['对历史感兴趣但正史太枯燥读不下去', '想了解中国历史但不知道从哪开始', '教科书上的人物太扁平，想了解真实人性'],
      ['用小说笔法写历史，比电视剧还精彩', '千万级销量现象级神作，豆瓣超高评分', '还原真实历史人物，看尽人性浮沉', '有趣有料，适合入门'],
      ['历史书太枯燥，读两页就犯困', '想增长见识但找不到好入口', '教科书太无聊，提不起兴趣'],
    ],
    '商业财经': [
      ['想学习创造财富实现财务自由', '对人生迷茫想找到努力方向', '普通人如何实现阶层跨越'],
      ['顶级投资人思考精华，可直接套用', '从财富到幸福，完整人生哲学', '不是空谈理论，每条原则都能落地', '豆瓣高分口碑，年度商业好书'],
      ['拼命工作却赚不到钱', '有钱了依然焦虑不快乐', '如何找到自己真正热爱的事情'],
    ],
    '职场技能': [
      ['写报告做汇报总是逻辑混乱说不清楚', '沟通总是鸡同鸭讲得不到理解', '想提升竞争力但不知道学什么'],
      ['全球500强企业都在用的方法论', '从思考到表达完整训练，可直接套用', '适用于写作汇报演讲解决问题所有场景', '读完就能用，立竿见影'],
      ['写了一大堆领导却说没重点', '沟通效率低下影响晋升', '想问题总是抓不住关键'],
    ],
    '科幻小说': [
      ['想体验世界级想象力冲击', '看过改编影视想读原著', '朋友推荐被称为天花板'],
      ['世界级获奖作品，中国科幻里程碑', '豆瓣高分近百万人评价，影响力跨越十年', '黑暗森林法则等概念影响了整个时代', '想象力天花板，看完刷新世界观'],
      ['觉得科幻太硬核读不懂', '对宇宙和人类命运好奇找不到入口', '每天被琐事填满想体验思维宇宙漫游'],
    ],
    '文学经典': [
      ['需要一本温暖治愈的书放松心情', '想收藏一本值得反复读的经典', '很久没有被一本书打动了'],
      ['全球数亿册销量，传世经典必读', '豆瓣超高评分，几代人共同推荐', '适合全年龄段，每读一次都有新感悟', '每一句都是金句，值得收藏'],
      ['在成人世界里丢失了童心', '人际关系越来越复杂怀念简单纯粹', '需要被提醒真正重要的东西'],
    ],
  };

  return templates[category] || templates['个人成长'];
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