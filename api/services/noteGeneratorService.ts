import { getBookById } from './bookService.js';
import cache from './cache.js';

export interface GeneratedNote {
  id: string;
  angle: string;
  angleLabel: string;
  title: string;
  content: string;
  hashtags: string[];
  imageSuggestions: string[];
}

// 根据图书分类和卖点生成三篇不同角度的小红书笔记
export function generateNotes(bookId: string): GeneratedNote[] | null {
  const cacheKey = `notes_${bookId}`;
  const cached = cache.get<GeneratedNote[]>(cacheKey);
  if (cached) return cached;

  const book = getBookById(bookId);
  if (!book) return null;

  const { title, author, category, buyPoints, sellPoints, painPoints, summary } = book;

  // 截取摘要前80字
  const shortSummary = summary.length > 80 ? summary.slice(0, 80) + '...' : summary;

  // 角度1：痛点共鸣型
  const angle1: GeneratedNote = {
    id: `${bookId}_angle1`,
    angle: 'pain_point',
    angleLabel: '痛点共鸣型',
    title: generatePainPointTitle(title, painPoints, category),
    content: generatePainPointContent(title, author, category, painPoints, buyPoints, shortSummary),
    hashtags: generateHashtags(title, category, 'pain'),
    imageSuggestions: [
      '书封+咖啡/茶氛围图，暖色调',
      '手写笔记摘抄图，标注重点句子',
      '阅读场景图（沙发/床头/书店）',
    ],
  };

  // 角度2：知识干货型
  const angle2: GeneratedNote = {
    id: `${bookId}_angle2`,
    angle: 'knowledge',
    angleLabel: '知识干货型',
    title: generateKnowledgeTitle(title, category),
    content: generateKnowledgeContent(title, author, category, sellPoints, shortSummary),
    hashtags: generateHashtags(title, category, 'knowledge'),
    imageSuggestions: [
      '思维导图/知识卡片，清晰的信息图表',
      '书中金句卡片图，设计感排版',
      '书籍目录或章节结构图',
    ],
  };

  // 角度3：场景种草型
  const angle3: GeneratedNote = {
    id: `${bookId}_angle3`,
    angle: 'scenario',
    angleLabel: '场景种草型',
    title: generateScenarioTitle(title, category),
    content: generateScenarioContent(title, author, category, sellPoints, buyPoints, shortSummary),
    hashtags: generateHashtags(title, category, 'scenario'),
    imageSuggestions: [
      '送礼场景图（精美包装+书）',
      '不同阅读场景拼图（地铁/咖啡厅/睡前）',
      '书与相关物品的搭配图（本子/笔/香薰）',
    ],
  };

  const notes = [angle1, angle2, angle3];
  cache.set(cacheKey, notes);
  return notes;
}

function generatePainPointTitle(title: string, painPoints: string[], category: string): string {
  const templates = [
    `被《${title}》骂醒了！原来我一直都在${painPoints[0]?.slice(0, 10) || '内耗'}...`,
    `读完《${title}》才明白，${painPoints[0]?.slice(0, 15) || '我为什么总是这样'}😭`,
    `如果你也${painPoints[0]?.slice(0, 12) || '正在迷茫'}，请一定看看这本书`,
    `《${title}》治好了我的精神内耗，后悔没早读`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function generatePainPointContent(
  title: string,
  author: string,
  category: string,
  painPoints: string[],
  buyPoints: string[],
  summary: string
): string {
  const painList = painPoints.slice(0, 3).map((p) => `❌ ${p}`).join('\n');
  const buyList = buyPoints.slice(0, 3).map((b) => `✅ ${b}`).join('\n');

  return `📖 今天要分享的书是《${title}》

作者：${author} ｜ 分类：${category}

📝 一句话总结：
${summary}

---
😭 读这本书之前，我是不是你？

${painList}

---
💡 读完这本书之后，我才明白：

${buyList}

---
🌟 这本书让我收获最大的3个点：

1️⃣ 重新认识了自己的问题源头
2️⃣ 找到了可以立即行动的方法
3️⃣ 对未来的方向更加清晰

如果你也正在经历这些，强烈推荐读一读。不是鸡汤，是真正有用。

📌 建议阅读方式：每天读一章，边读边做笔记，读完后写一篇读后感。`;
}

function generateKnowledgeTitle(title: string, category: string): string {
  const templates = [
    `一张图读懂《${title}》！${category}必读好书📚`,
    `《${title}》核心干货整理，建议收藏⭐`,
    `读完《${title}》，我整理了这份精华笔记`,
    `《${title}》最值得记住的5个观点，颠覆认知`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateKnowledgeContent(
  title: string,
  author: string,
  category: string,
  sellPoints: string[],
  summary: string
): string {
  const points = sellPoints.slice(0, 4).map((p, i) => `${i + 1}️⃣ ${p}`).join('\n\n');

  return `📖 《${title}》精华整理

作者：${author} ｜ 分类：${category}

📝 一句话总结：
${summary}

---
🌟 核心观点：

${points}

---
💡 我的3点阅读感悟：

1️⃣ 这本书最大的价值在于提供了一个全新的视角来看待问题
2️⃣ 书中的方法和工具可以直接应用到日常生活和工作中
3️⃣ 它不是一本读一遍就够的书，值得反复翻阅

📌 适合人群：
- 想要提升自己的你
- 正在寻找方向的你
- 对${category}感兴趣的你

建议先收藏，有空慢慢读～`;
}

function generateScenarioTitle(title: string, category: string): string {
  const templates = [
    `送朋友/送自己都超合适的《${title}》🎁`,
    `地铁上读《${title}》，旁边的人问我要链接😆`,
    `周末窝在沙发读《${title}》，幸福感拉满🛋️`,
    `这本书我愿意推荐给所有人✨《${title}》`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateScenarioContent(
  title: string,
  author: string,
  category: string,
  sellPoints: string[],
  buyPoints: string[],
  summary: string
): string {
  return `📖 最近挖到一本好书——《${title}》

作者：${author} ｜ 分类：${category}

📝 一句话总结：
${summary}

---
🎯 这本书适合谁读？

${buyPoints.slice(0, 3).map((p, i) => `${i + 1}️⃣ ${p}`).join('\n')}

---
✨ 为什么推荐？

${sellPoints.slice(0, 3).map((p, i) => `${i + 1}️⃣ ${p}`).join('\n')}

---
🎁 适合场景：

☕ 周末午后，一杯咖啡+这本书，完美
🚇 通勤路上，轻松阅读不费脑
🎀 送朋友礼物，有品位又有心意
🛋️ 睡前翻几页，治愈一天的疲惫

---
💬 已经读过的小伙伴，评论区聊聊你的感受吧～`;
}

function generateHashtags(title: string, category: string, type: string): string[] {
  const baseTags = ['读书推荐', '好书推荐', '阅读', '读书笔记'];
  const categoryTags: Record<string, string[]> = {
    '个人成长': ['自我成长', '认知提升', '个人提升'],
    '心理学': ['心理学', '心理成长', '情绪管理'],
    '科幻小说': ['科幻', '科幻小说', '三体'],
    '沟通人际': ['沟通技巧', '人际关系', '情商'],
    '商业财经': ['商业思维', '财富自由', '投资理财'],
    '历史人文': ['历史', '人文', '中国历史'],
    '文学经典': ['经典文学', '文学', '治愈'],
    '职场技能': ['职场', '职场技能', '思维提升'],
  };

  const typeTag: Record<string, string> = {
    pain: '治愈系书单',
    knowledge: '干货分享',
    scenario: '种草',
  };

  const tags = [title, ...baseTags, ...(categoryTags[category] || [category]), typeTag[type] || ''];
  return [...new Set(tags.filter(Boolean))].slice(0, 8);
}