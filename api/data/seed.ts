// 图书种子数据 - 涵盖多品类热门图书
export interface SeedBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  publisher: string;
  publishDate: string;
  isbn: string;
  pages: number;
  summary: string;
  category: string;
  ratings: {
    platform: string;
    platformName: string;
    score: number;
    maxScore: number;
    ratingsCount: number;
    summary: string;
  }[];
  buyPoints: string[];
  sellPoints: string[];
  painPoints: string[];
  redNotes: {
    id: string;
    title: string;
    snippet: string;
    likes: number;
    collects: number;
    url: string;
    author: string;
  }[];
  platformLinks: {
    platform: string;
    platformName: string;
    url: string;
  }[];
}

export const seedBooks: SeedBook[] = [
  {
    id: "1",
    title: "认知觉醒",
    author: "周岭",
    cover: "https://img2.doubanio.com/view/subject/l/public/s33858631.jpg",
    publisher: "人民邮电出版社",
    publishDate: "2020-06",
    isbn: "9787115543424",
    pages: 304,
    summary: "为什么我们做事总是急于求成、避难趋易？所谓有耐心，就是要「咬牙坚持、死磕到底」？如何不再用「三分钟热情」和「打鸡血」的方式做事？本书通过「大脑构造、潜意识、元认知」等思维规律，帮助读者真正看清自己；通过「深度学习、关联、反馈」等事物规律，帮助读者洞悉如何真正成事。",
    category: "个人成长",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.1, maxScore: 10, ratingsCount: 18420, summary: "值得反复阅读的自我成长佳作" },
      { platform: "weread", platformName: "微信读书", score: 87.3, maxScore: 100, ratingsCount: 35600, summary: "推荐值极高，读者好评如潮" },
      { platform: "jd", platformName: "京东", score: 9.5, maxScore: 10, ratingsCount: 21000, summary: "好评率99%，畅销榜前10" },
      { platform: "dangdang", platformName: "当当", score: 9.6, maxScore: 10, ratingsCount: 28000, summary: "当当终身五星图书" }
    ],
    buyPoints: [
      "拖延症晚期，想改变却不知从何下手",
      "明知重要却总被手机和娱乐分散注意力",
      "努力很久却看不到进步，陷入自我怀疑",
      "想培养好习惯但总是三分钟热度"
    ],
    sellPoints: [
      "7大底层概念，20个成长关键词，科学拆解认知升级路径",
      "基于脑科学和心理学，不是鸡汤而是可操作的认知方法论",
      "豆瓣8.1分，微信读书推荐值87.3%，百万读者验证",
      "从「元认知」到「自控力」到「专注力」，形成完整成长闭环"
    ],
    painPoints: [
      "每天忙忙碌碌却没有真正的成长",
      "知道很多道理却依然过不好这一生",
      "焦虑、迷茫，找不到人生的方向",
      "想自律但大脑总被即时满足劫持"
    ],
    redNotes: [
      { id: "r1", title: "读完《认知觉醒》，我终于不焦虑了", snippet: "这本书治好了我的精神内耗！原来焦虑不是缺努力，而是缺认知。", likes: 32000, collects: 18500, url: "https://www.xiaohongshu.com/explore/xxx1", author: "读书人小柒" },
      { id: "r2", title: "30岁以后才明白，自律不是靠意志力", snippet: "《认知觉醒》让我重新理解了大脑的工作方式，原来我们一直用错了方法。", likes: 28000, collects: 15600, url: "https://www.xiaohongshu.com/explore/xxx2", author: "思维导图控" },
      { id: "r3", title: "被这本书骂醒了！强烈推荐给所有摆烂的人", snippet: "如果只推荐一本自我成长的书，我一定选它。不是鸡汤，是科学。", likes: 45000, collects: 23000, url: "https://www.xiaohongshu.com/explore/xxx3", author: "向上生长的阿欣" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/35193035/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/6a732ce0720483e56a7e1e7" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=认知觉醒" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=认知觉醒" }
    ]
  },
  {
    id: "2",
    title: "被讨厌的勇气",
    author: "岸见一郎 / 古贺史健",
    cover: "https://img2.doubanio.com/view/subject/l/public/s28382891.jpg",
    publisher: "机械工业出版社",
    publishDate: "2015-03",
    isbn: "9787111495482",
    pages: 194,
    summary: "本书用「青年与哲人」的对话形式，总结了阿德勒心理学的核心思想。阿德勒说：人的烦恼皆源于人际关系。如果这个世界没有人际关系，如果这个宇宙中没有他人只有自己，那么一切烦恼也都将消失。所谓的「自由」，就是被别人讨厌。",
    category: "心理学",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.5, maxScore: 10, ratingsCount: 98700, summary: "豆瓣心理学TOP10，改变无数人的人生观" },
      { platform: "weread", platformName: "微信读书", score: 89.1, maxScore: 100, ratingsCount: 52000, summary: "推荐值极高，长期霸榜" },
      { platform: "jd", platformName: "京东", score: 9.7, maxScore: 10, ratingsCount: 35000, summary: "好评率99.5%，心理学类销量冠军" },
      { platform: "dangdang", platformName: "当当", score: 9.7, maxScore: 10, ratingsCount: 42000, summary: "当当终身五星图书" }
    ],
    buyPoints: [
      "总是太在意别人的看法，活得小心翼翼",
      "在人际关系中感到疲惫，不知道如何拒绝别人",
      "缺乏自信，总觉得别人比自己优秀",
      "想改变自己的生活状态，但缺乏勇气"
    ],
    sellPoints: [
      "阿德勒心理学经典入门，对话体形式轻松易读",
      "豆瓣8.5分，近10万人评价，口碑炸裂",
      "「课题分离」概念影响千万人，帮你摆脱人际关系困扰",
      "蔡康永、曾宝仪、大张伟等多位名人推荐"
    ],
    painPoints: [
      "为什么我总是活在别人的期待里？",
      "讨好型人格让我筋疲力尽",
      "原生家庭的阴影如何走出来？",
      "不敢做自己，怕被讨厌"
    ],
    redNotes: [
      { id: "r4", title: "读完这本书，我终于敢对别人说「不」了", snippet: "「课题分离」这个概念彻底改变了我的人际关系，原来拒绝别人不用愧疚。", likes: 56000, collects: 32000, url: "https://www.xiaohongshu.com/explore/xxx4", author: "清醒的柚子" },
      { id: "r5", title: "讨好型人格必看！被讨厌的勇气救我命", snippet: "以前总怕别人不喜欢我，现在明白了：自由就是被讨厌。这本书值得全文背诵！", likes: 41000, collects: 25000, url: "https://www.xiaohongshu.com/explore/xxx5", author: "心理成长笔记" },
      { id: "r6", title: "30岁分手后读这本书，我重生了", snippet: "如果你正经历人生的低谷，请一定看看这本书。它不只讲心理学，更讲如何好好活着。", likes: 35000, collects: 19000, url: "https://www.xiaohongshu.com/explore/xxx6", author: "独处的力量" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/26375417/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/8b9329607186e5b38b9c33e" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=被讨厌的勇气" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=被讨厌的勇气" }
    ]
  },
  {
    id: "3",
    title: "三体",
    author: "刘慈欣",
    cover: "https://img2.doubanio.com/view/subject/l/public/s2768378.jpg",
    publisher: "重庆出版社",
    publishDate: "2008-01",
    isbn: "9787536692930",
    pages: 302,
    summary: "文化大革命如火如荼进行的同时，军方探寻外星文明的绝秘计划「红岸工程」取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
    category: "科幻小说",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.8, maxScore: 10, ratingsCount: 296000, summary: "豆瓣图书TOP250前列，中国科幻巅峰之作" },
      { platform: "weread", platformName: "微信读书", score: 92.5, maxScore: 100, ratingsCount: 89000, summary: "神作级别推荐值，科幻类断层第一" },
      { platform: "jd", platformName: "京东", score: 9.8, maxScore: 10, ratingsCount: 58000, summary: "好评率99.8%，常年霸榜" },
      { platform: "dangdang", platformName: "当当", score: 9.8, maxScore: 10, ratingsCount: 65000, summary: "当当终身五星，科幻类销量冠军" }
    ],
    buyPoints: [
      "想读一部真正震撼人心的科幻作品",
      "看过《三体》电视剧想深入了解原著",
      "朋友强烈推荐，被称为「中国科幻天花板」",
      "想体验「降维打击」级别的想象力冲击"
    ],
    sellPoints: [
      "雨果奖获奖作品，中国科幻文学里程碑",
      "奥巴马、扎克伯格、雷军等全球名人推荐",
      "豆瓣8.8分，近30万人评价，科幻类评分最高",
      "「黑暗森林法则」「降维打击」等概念已融入日常语言"
    ],
    painPoints: [
      "觉得科幻小说太硬核读不懂",
      "不知道中国也有世界级的科幻作品",
      "每天被琐事占据，想体验一次思维的宇宙漫游",
      "对宇宙和人类命运充满好奇但找不到入口"
    ],
    redNotes: [
      { id: "r7", title: "读完《三体》，我整个人都不好了", snippet: "看完三体我瘫在沙发上整整一个小时，刘慈欣的想象力已经超出了人类的范畴。", likes: 78000, collects: 42000, url: "https://www.xiaohongshu.com/explore/xxx7", author: "科幻迷小K" },
      { id: "r8", title: "女生也能读懂的《三体》！按这个顺序读不劝退", snippet: "很多人说三体难读，其实掌握正确方法一点都不难！附阅读顺序和背景知识。", likes: 52000, collects: 38000, url: "https://www.xiaohongshu.com/explore/xxx8", author: "喵喵读书" },
      { id: "r9", title: "《三体》中那些让人头皮发麻的句子", snippet: "「给岁月以文明，而不是给文明以岁月」，每一句都想刻在DNA里。", likes: 64000, collects: 35000, url: "https://www.xiaohongshu.com/explore/xxx9", author: "金句收藏家" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/2567698/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/ce032b305a9bc1ce0b0dd2a" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=三体" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=三体" }
    ]
  },
  {
    id: "4",
    title: "非暴力沟通",
    author: "马歇尔·卢森堡",
    cover: "https://img2.doubanio.com/view/subject/l/public/s33793425.jpg",
    publisher: "华夏出版社",
    publishDate: "2009-01",
    isbn: "9787508039008",
    pages: 190,
    summary: "著名的马歇尔·卢森堡博士发现了一种沟通方式，依照它来谈话和聆听，能使人们情意相通，和谐相处，这就是「非暴力沟通」。本书将帮助你学会如何表达自己、倾听他人，化解人际冲突，建立高品质的连接。",
    category: "沟通人际",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.4, maxScore: 10, ratingsCount: 76400, summary: "豆瓣沟通类TOP1，经典不衰" },
      { platform: "weread", platformName: "微信读书", score: 88.2, maxScore: 100, ratingsCount: 48000, summary: "推荐值极高，职场人必读" },
      { platform: "jd", platformName: "京东", score: 9.6, maxScore: 10, ratingsCount: 31000, summary: "好评率99.3%，沟通类销量冠军" },
      { platform: "dangdang", platformName: "当当", score: 9.6, maxScore: 10, ratingsCount: 38000, summary: "当当终身五星图书" }
    ],
    buyPoints: [
      "和伴侣、家人总是吵架，沟通方式需要改变",
      "职场中不擅长表达，总被误解",
      "想提升情商，改善人际关系",
      "面对冲突时总是情绪失控，事后后悔"
    ],
    sellPoints: [
      "全球畅销50年，被联合国教科文组织列为全球非暴力解决冲突的最佳实践",
      "豆瓣8.4分，7.6万人评价，沟通类必读经典",
      "「观察-感受-需要-请求」四步法，简单实用可立即上手",
      "适用于亲密关系、职场沟通、亲子教育等所有场景"
    ],
    painPoints: [
      "为什么每次吵架都变成互相攻击？",
      "明明是好意，说出来却像指责",
      "不会拒绝，也不敢表达真实想法",
      "亲密关系中总是鸡同鸭讲"
    ],
    redNotes: [
      { id: "r10", title: "学完非暴力沟通，我和老公三个月没吵架了", snippet: "以前每次吵架都是互相指责，现在学会了「观察+感受+需要+请求」四步法，关系真的变好了。", likes: 48000, collects: 28000, url: "https://www.xiaohongshu.com/explore/xxx10", author: "婚姻自救指南" },
      { id: "r11", title: "职场人必看！非暴力沟通让我拿到了晋升", snippet: "学会用非暴力沟通表达需求后，我不再是那个「好欺负」的老实人了。", likes: 36000, collects: 21000, url: "https://www.xiaohongshu.com/explore/xxx11", author: "职场成长日记" },
      { id: "r12", title: "一张图读懂《非暴力沟通》核心方法", snippet: "把四步法做成了思维导图，贴在工位上每天看，沟通能力提升真的肉眼可见。", likes: 55000, collects: 42000, url: "https://www.xiaohongshu.com/explore/xxx12", author: "思维导图控" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/3531253/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/8c232e30716b8e988c2ce2e" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=非暴力沟通" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=非暴力沟通" }
    ]
  },
  {
    id: "5",
    title: "纳瓦尔宝典",
    author: "埃里克·乔根森",
    cover: "https://img2.doubanio.com/view/subject/l/public/s34241533.jpg",
    publisher: "中信出版社",
    publishDate: "2022-04",
    isbn: "9787521751123",
    pages: 256,
    summary: "这本书收集整理了硅谷知名天使投资人纳瓦尔·拉维坎特在过去十年里通过推特、播客和采访等方式分享的人生智慧，向读者分享了关于财富积累和幸福人生的原则与方法。纳瓦尔不仅告诉读者怎样致富，还告诉读者怎样看待人生，怎样获得幸福。",
    category: "商业财经",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.3, maxScore: 10, ratingsCount: 31500, summary: "商业类年度好书，硅谷智慧精华" },
      { platform: "weread", platformName: "微信读书", score: 86.5, maxScore: 100, ratingsCount: 28000, summary: "推荐值极高，创业者必读" },
      { platform: "jd", platformName: "京东", score: 9.4, maxScore: 10, ratingsCount: 18000, summary: "好评率99%，商业类畅销TOP5" },
      { platform: "dangdang", platformName: "当当", score: 9.5, maxScore: 10, ratingsCount: 22000, summary: "当当商业类年度畅销" }
    ],
    buyPoints: [
      "想学习如何创造财富，实现财务自由",
      "对人生感到迷茫，想找到努力的方向",
      "想了解硅谷顶级投资人的思维方式",
      "需要一本既有智慧又实用的枕边书"
    ],
    sellPoints: [
      "硅谷投资教父纳瓦尔的智慧结晶，浓缩十年思考精华",
      "从财富到幸福，构建完整的人生哲学体系",
      "每条原则都能直接落地执行，不是空谈理论",
      "豆瓣8.3分，3万+评价，2022年度商业类好书"
    ],
    painPoints: [
      "拼命工作却赚不到钱，财富密码到底在哪？",
      "有钱了就能幸福吗？为什么越有钱越焦虑？",
      "如何找到自己真正热爱的事情？",
      "普通人如何实现阶层跨越？"
    ],
    redNotes: [
      { id: "r13", title: "把这本《纳瓦尔宝典》背下来，少走10年弯路", snippet: "纳瓦尔说：用头脑赚钱，而不是用时间赚钱。这本书值得每一个想搞钱的人全文背诵。", likes: 62000, collects: 38000, url: "https://www.xiaohongshu.com/explore/xxx13", author: "搞钱少女" },
      { id: "r14", title: "纳瓦尔：财富自由的底层逻辑，看这一篇就够了", snippet: "把书里关于财富的核心观点做了整理，读完豁然开朗。", likes: 45000, collects: 29000, url: "https://www.xiaohongshu.com/explore/xxx14", author: "商业思维" },
      { id: "r15", title: "25岁读到这本书，我的人生开始不一样了", snippet: "如果你还在迷茫，请一定读读纳瓦尔。他让我明白了什么是「把自己产品化」。", likes: 38000, collects: 22000, url: "https://www.xiaohongshu.com/explore/xxx15", author: "成长中的小鹿" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/35876140/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/ece327f0813ab6ee3g018e0e" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=纳瓦尔宝典" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=纳瓦尔宝典" }
    ]
  },
  {
    id: "6",
    title: "人类简史",
    author: "尤瓦尔·赫拉利",
    cover: "https://img2.doubanio.com/view/subject/l/public/s27814883.jpg",
    publisher: "中信出版社",
    publishDate: "2014-11",
    isbn: "9787508647357",
    pages: 440,
    summary: "十万年前，地球上至少有六种不同的人，但今日，世界舞台为什么只剩下我们自己？从认知革命、农业革命到科学革命，我们是如何登上世界舞台成为万物之灵的？这本书将带你从全新的视角审视人类的历史和未来。",
    category: "历史人文",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 9.1, maxScore: 10, ratingsCount: 197000, summary: "豆瓣TOP250前列，历史类评分最高" },
      { platform: "weread", platformName: "微信读书", score: 90.8, maxScore: 100, ratingsCount: 65000, summary: "神作级别推荐值" },
      { platform: "jd", platformName: "京东", score: 9.8, maxScore: 10, ratingsCount: 42000, summary: "好评率99.7%" },
      { platform: "dangdang", platformName: "当当", score: 9.8, maxScore: 10, ratingsCount: 50000, summary: "当当终身五星" }
    ],
    buyPoints: [
      "想了解人类文明的宏大叙事但觉得历史太枯燥",
      "对人类的未来发展充满好奇和担忧",
      "想提升认知格局，拓宽思维边界",
      "朋友推荐被称为「刷新三观」的神作"
    ],
    sellPoints: [
      "全球销量超2500万册，被翻译成65种语言的现象级畅销书",
      "豆瓣9.1分，近20万人评价，历史类天花板",
      "比尔·盖茨、扎克伯格、奥巴马倾力推荐",
      "从7万年前认知革命到AI时代，宏大叙事一气呵成"
    ],
    painPoints: [
      "为什么人类会统治地球？",
      "我们真的比采集狩猎时代更幸福吗？",
      "金钱、帝国、宗教的本质是什么？",
      "人类未来将走向何方？"
    ],
    redNotes: [
      { id: "r16", title: "读完《人类简史》，我的世界观被彻底颠覆了", snippet: "原来我们以为的「常识」都是被建构出来的。这本书让我重新认识了人类文明。", likes: 85000, collects: 48000, url: "https://www.xiaohongshu.com/explore/xxx16", author: "世界观重塑" },
      { id: "r17", title: "《人类简史》10个刷新认知的观点整理", snippet: "「人类是被小麦驯化的」「金钱是共同想象」每一个观点都让人脑洞大开。", likes: 72000, collects: 52000, url: "https://www.xiaohongshu.com/explore/xxx17", author: "知识整理官" },
      { id: "r18", title: "看完《人类简史》，我决定不再焦虑了", snippet: "赫拉利说：人类可能是最不快乐的物种。原来焦虑是人类的出厂设置。", likes: 49000, collects: 28000, url: "https://www.xiaohongshu.com/explore/xxx18", author: "清醒阅读" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/25985021/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/be732a30715c43dbe73e221" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=人类简史" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=人类简史" }
    ]
  },
  {
    id: "7",
    title: "小王子",
    author: "安托万·德·圣-埃克苏佩里",
    cover: "https://img2.doubanio.com/view/subject/l/public/s1103152.jpg",
    publisher: "人民文学出版社",
    publishDate: "2003-08",
    isbn: "9787020042494",
    pages: 97,
    summary: "以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。",
    category: "文学经典",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 9.0, maxScore: 10, ratingsCount: 456000, summary: "豆瓣TOP250神作，全球读者最多的文学经典之一" },
      { platform: "weread", platformName: "微信读书", score: 91.2, maxScore: 100, ratingsCount: 72000, summary: "推荐值极高，治愈系必读" },
      { platform: "jd", platformName: "京东", score: 9.9, maxScore: 10, ratingsCount: 68000, summary: "好评率99.9%" },
      { platform: "dangdang", platformName: "当当", score: 9.9, maxScore: 10, ratingsCount: 75000, summary: "当当终身五星" }
    ],
    buyPoints: [
      "需要一本温暖治愈的小书来放松心情",
      "想送一本有意义的书给朋友或恋人",
      "听说过这本书但一直没有读过",
      "想收藏一本经典文学作品"
    ],
    sellPoints: [
      "全球销量超2亿册，仅次于《圣经》的畅销书",
      "豆瓣9.0分，45.6万人评价，文学经典必读",
      "适合从8岁到80岁的全年龄段读者",
      "「如果你驯化了我，我们就彼此需要」——每一句都是金句"
    ],
    painPoints: [
      "在忙碌的成人世界里失去了童心",
      "人际关系越来越复杂，怀念简单纯粹",
      "很久没有为一本书流过泪了",
      "需要被提醒「真正重要的东西用眼睛是看不见的」"
    ],
    redNotes: [
      { id: "r19", title: "每读一次《小王子》，就哭一次", snippet: "小时候读不懂，长大后每次读都泪流满面。原来我们都是被驯化了的狐狸。", likes: 92000, collects: 48000, url: "https://www.xiaohongshu.com/explore/xxx19", author: "深夜读书" },
      { id: "r20", title: "《小王子》中最让人心碎的10句话", snippet: "「正是你为你的玫瑰花费的时间，才使你的玫瑰变得如此重要。」成年人的世界里没有童话。", likes: 78000, collects: 52000, url: "https://www.xiaohongshu.com/explore/xxx20", author: "句子控" },
      { id: "r21", title: "送男朋友《小王子》后，他哭了", snippet: "没想到一本薄薄的小书有这么大的力量。他说：我终于理解了什么是「驯化」。", likes: 65000, collects: 34000, url: "https://www.xiaohongshu.com/explore/xxx21", author: "恋爱日常" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/1084336/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/cea320105d1f10cea184b0b" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=小王子" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=小王子" }
    ]
  },
  {
    id: "8",
    title: "原则",
    author: "瑞·达利欧",
    cover: "https://img2.doubanio.com/view/subject/l/public/s29468843.jpg",
    publisher: "中信出版社",
    publishDate: "2018-01",
    isbn: "9787508684031",
    pages: 576,
    summary: "瑞·达利欧是全世界顶级投资家、企业家之一。他认为，我们可以像看待机器一样看待生活、管理、经商和投资，并将其系统化为一系列原则。这本书阐述了他的原则的两大基石——极度求真、极度透明，并介绍了以此为基础的创意择优，以及可信度加权的决策机制。",
    category: "商业财经",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.3, maxScore: 10, ratingsCount: 45200, summary: "商业类长销经典，全球管理者必读" },
      { platform: "weread", platformName: "微信读书", score: 85.8, maxScore: 100, ratingsCount: 36000, summary: "推荐值高，职场进阶必备" },
      { platform: "jd", platformName: "京东", score: 9.5, maxScore: 10, ratingsCount: 25000, summary: "好评率99.1%" },
      { platform: "dangdang", platformName: "当当", score: 9.5, maxScore: 10, ratingsCount: 30000, summary: "当当商业类畅销常青树" }
    ],
    buyPoints: [
      "想学习顶级投资人的决策方法",
      "在职场或创业中需要系统化的原则指导",
      "想提升自己的决策能力和管理能力",
      "需要一套可以终身使用的思维框架"
    ],
    sellPoints: [
      "桥水基金创始人瑞·达利欧毕生经验总结",
      "全球销量超400万册，被翻译成30多种语言",
      "500多条原则涵盖生活和工作，可直接套用",
      "「痛苦+反思=进步」等核心公式已被无数人验证有效"
    ],
    painPoints: [
      "每次遇到困难都像第一次遇到，没有积累经验",
      "做决策时总是犹豫不决，缺乏判断框架",
      "团队管理混乱，缺少透明的沟通机制",
      "如何把失败变成成长的阶梯？"
    ],
    redNotes: [
      { id: "r22", title: "花3个月读完《原则》，我整理了这份精华", snippet: "把500多条原则浓缩成20条核心法则，贴在办公桌上每天看，执行力提升明显。", likes: 58000, collects: 42000, url: "https://www.xiaohongshu.com/explore/xxx22", author: "效率控" },
      { id: "r23", title: "《原则》教会我的最重要的一件事：痛苦+反思=进步", snippet: "以前遇到挫折就逃避，现在学会了把每次痛苦都当成进化的机会。", likes: 41000, collects: 23000, url: "https://www.xiaohongshu.com/explore/xxx23", author: "进化中的阿杰" },
      { id: "r24", title: "达利欧的5步流程法，让我半年涨薪50%", snippet: "目标→问题→诊断→方案→执行，这5步让我在工作中脱颖而出。", likes: 36000, collects: 21000, url: "https://www.xiaohongshu.com/explore/xxx24", author: "职场进阶指南" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/27608239/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/8c832e3071e4a8c78c8e2e8" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=原则" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=原则" }
    ]
  },
  {
    id: "9",
    title: "明朝那些事儿",
    author: "当年明月",
    cover: "https://img2.doubanio.com/view/subject/l/public/s28437473.jpg",
    publisher: "浙江人民出版社",
    publishDate: "2011-11",
    isbn: "9787213046766",
    pages: 358,
    summary: "《明朝那些事儿》讲述从1344年到1644年，明朝三百年间的历史。作品以史料为基础，以年代和具体人物为主线，并加入了小说的笔法，对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多。",
    category: "历史人文",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 9.1, maxScore: 10, ratingsCount: 156000, summary: "豆瓣TOP250，中国最受欢迎的历史通俗读物" },
      { platform: "weread", platformName: "微信读书", score: 92.0, maxScore: 100, ratingsCount: 82000, summary: "神作推荐值，历史类断层第一" },
      { platform: "jd", platformName: "京东", score: 9.8, maxScore: 10, ratingsCount: 52000, summary: "好评率99.6%" },
      { platform: "dangdang", platformName: "当当", score: 9.8, maxScore: 10, ratingsCount: 60000, summary: "当当终身五星" }
    ],
    buyPoints: [
      "对历史感兴趣但觉得正史太枯燥",
      "想找一本有趣又有料的历史入门书",
      "被朋友强烈安利，说「看了就停不下来」",
      "想了解明朝那些有趣的人物和故事"
    ],
    sellPoints: [
      "豆瓣9.1分，15.6万人评价，中国历史通俗读物天花板",
      "网络连载时代现象级神作，销量超千万册",
      "用小说的笔法写历史，比电视剧还精彩",
      "王阳明、张居正、海瑞、戚继光……300年明朝群星闪耀"
    ],
    painPoints: [
      "历史书太枯燥，读两页就想睡觉",
      "想了解中国历史但不知道从哪开始",
      "教科书上的历史人物太扁平，想了解真实的人性",
      "上下班路上想看点有趣又有收获的内容"
    ],
    redNotes: [
      { id: "r25", title: "看完《明朝那些事儿》，我哭了一整晚", snippet: "当年明月说：成功只有一个——按照自己的方式，去度过人生。读到结尾泪崩了。", likes: 95000, collects: 52000, url: "https://www.xiaohongshu.com/explore/xxx25", author: "历史爱好者" },
      { id: "r26", title: "《明朝那些事儿》中最让人破防的10个人物", snippet: "于谦、杨涟、海瑞……每一个都让人泪目。原来历史可以这样读。", likes: 72000, collects: 45000, url: "https://www.xiaohongshu.com/explore/xxx26", author: "书中自有颜如玉" },
      { id: "r27", title: "零基础读历史，从《明朝那些事儿》开始就对了", snippet: "本来对历史无感，被朋友安利后一发不可收拾，7天刷完7本！", likes: 58000, collects: 36000, url: "https://www.xiaohongshu.com/explore/xxx27", author: "新手读书指南" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/7163250/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/bd632a40715e0ebdbd6e99e" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=明朝那些事儿" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=明朝那些事儿" }
    ]
  },
  {
    id: "10",
    title: "金字塔原理",
    author: "芭芭拉·明托",
    cover: "https://img2.doubanio.com/view/subject/l/public/s28382893.jpg",
    publisher: "南海出版公司",
    publishDate: "2013-11",
    isbn: "9787544268882",
    pages: 304,
    summary: "金字塔原理是一种重点突出、逻辑清晰、主次分明的逻辑思路、表达方式和规范动作。本书是麦肯锡40年经典培训教材，介绍了金字塔原理在写作、思考、解决问题和演示中的运用。",
    category: "职场技能",
    ratings: [
      { platform: "douban", platformName: "豆瓣读书", score: 8.0, maxScore: 10, ratingsCount: 18600, summary: "职场思维训练经典，麦肯锡方法论" },
      { platform: "weread", platformName: "微信读书", score: 82.5, maxScore: 100, ratingsCount: 22000, summary: "推荐值高，职场人必读" },
      { platform: "jd", platformName: "京东", score: 9.3, maxScore: 10, ratingsCount: 15000, summary: "好评率98.8%" },
      { platform: "dangdang", platformName: "当当", score: 9.4, maxScore: 10, ratingsCount: 18000, summary: "当当职场类畅销常青树" }
    ],
    buyPoints: [
      "写报告、做汇报总是逻辑混乱说不清楚",
      "想提升职场竞争力，学习顶级咨询公司的思维方法",
      "汇报时领导总说「说重点」，但不知道什么是重点",
      "想系统提升自己的逻辑思维和表达能力"
    ],
    sellPoints: [
      "麦肯锡40年经典培训教材，全球咨询顾问的必修课",
      "金字塔原理已被全球500强企业广泛采用",
      "从思考到表达到演示，构建完整的逻辑体系",
      "适用于写作、汇报、演讲、解决问题等所有职场场景"
    ],
    painPoints: [
      "写了一大堆材料，领导却说没重点",
      "和同事沟通时总是鸡同鸭讲",
      "做PPT不知从何下手，逻辑混乱",
      "想问题总是想不清楚，抓不住关键"
    ],
    redNotes: [
      { id: "r28", title: "学会金字塔原理后，我的周报被领导当模板了", snippet: "「结论先行、以上统下、归类分组、逻辑递进」这16个字，让我从职场小白变成了汇报高手。", likes: 43000, collects: 31000, url: "https://www.xiaohongshu.com/explore/xxx28", author: "职场进阶指南" },
      { id: "r29", title: "一张图讲清楚金字塔原理，建议收藏", snippet: "把整本书的核心做成了思维导图，看完就懂，建议所有职场人收藏。", likes: 52000, collects: 45000, url: "https://www.xiaohongshu.com/explore/xxx29", author: "思维导图控" },
      { id: "r30", title: "面试时说用了金字塔原理，面试官眼睛亮了", snippet: "用金字塔原理结构化回答问题，面试官说：你的逻辑非常清晰。", likes: 38000, collects: 22000, url: "https://www.xiaohongshu.com/explore/xxx30", author: "求职攻略" }
    ],
    platformLinks: [
      { platform: "douban", platformName: "豆瓣读书", url: "https://book.douban.com/subject/25748796/" },
      { platform: "weread", platformName: "微信读书", url: "https://weread.qq.com/web/bookDetail/c6c3207071e1c7a6c6c3e2e" },
      { platform: "jd", platformName: "京东", url: "https://search.jd.com/Search?keyword=金字塔原理" },
      { platform: "dangdang", platformName: "当当", url: "https://search.dangdang.com/?key=金字塔原理" }
    ]
  }
];