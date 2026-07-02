import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ThumbsUp, Bookmark, BookOpen, Heart, Star } from 'lucide-react';
import { useBookStore } from '@/store/useBookStore';
import StarRating from '@/components/StarRating';

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    bookDetail,
    detailLoading,
    fetchBookDetail,
    generateNotes,
  } = useBookStore();

  useEffect(() => {
    if (id) fetchBookDetail(id);
  }, [id]);

  const handleGenerateNotes = () => {
    if (id) {
      navigate(`/book/${id}/notes`);
      generateNotes(id);
    }
  };

  if (detailLoading || !bookDetail) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] p-6">
        <div className="max-w-5xl mx-auto animate-pulse">
          <div className="h-8 bg-[#1B4332]/10 w-1/3 rounded mb-8" />
          <div className="flex gap-8">
            <div className="w-64 h-96 bg-[#1B4332]/10 rounded-xl" />
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-[#1B4332]/10 rounded w-2/3" />
              <div className="h-4 bg-[#1B4332]/10 rounded w-1/2" />
              <div className="space-y-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-3 bg-[#1B4332]/10 rounded w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { basicInfo, ratings, sellingPoints, redNotes, platformLinks } = bookDetail;
  const isTempBook = id?.startsWith('temp_');

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#1B4332]/70 hover:text-[#1B4332] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回搜索</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8">
        {/* Temp Book Hint */}
        {isTempBook && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <div className="text-amber-600 text-xl mt-0.5">💡</div>
            <div>
              <div className="font-medium text-amber-800 mb-1">这是一本自定义书籍</div>
              <div className="text-amber-700 text-sm">
                未能从本地书库中找到「{basicInfo.title}」的详细信息，系统已根据分类「{basicInfo.category}」智能生成了通用的买点卖点和笔记模板。
                你仍可从下方平台链接中搜索详细信息。
              </div>
            </div>
          </div>
        )}

        {/* Basic Info */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative w-56 mx-auto md:w-64">
                <div className="absolute inset-0 rotate-3 bg-[#1B4332]/5 rounded-xl" />
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <img
                    src={basicInfo.cover}
                    alt={basicInfo.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1
                className="font-serif text-3xl md:text-4xl font-bold text-[#1B4332] mb-3 leading-tight"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {basicInfo.title}
              </h1>
              <p className="text-xl text-[#1B4332]/60 mb-6" style={{ fontFamily: "'LXGW WenKai', serif" }}>
                {basicInfo.author || '未知作者'}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div>
                  <span className="text-[#1B4332]/50">出版社</span>
                  <div className="text-[#1B4332] font-medium">{basicInfo.publisher || '未知'}</div>
                </div>
                <div>
                  <span className="text-[#1B4332]/50">出版日期</span>
                  <div className="text-[#1B4332] font-medium">{basicInfo.publishDate || '未知'}</div>
                </div>
                <div>
                  <span className="text-[#1B4332]/50">ISBN</span>
                  <div className="text-[#1B4332] font-medium">{basicInfo.isbn || '未知'}</div>
                </div>
                <div>
                  <span className="text-[#1B4332]/50">页数</span>
                  <div className="text-[#1B4332] font-medium">{basicInfo.pages ? `${basicInfo.pages} 页` : '未知'}</div>
                </div>
              </div>

              {basicInfo.summary && (
                <div className="mb-8">
                  <div className="text-[#1B4332]/60 text-sm mb-2">内容简介</div>
                  <p
                    className="text-[#1B4332]/80 leading-relaxed text-base"
                    style={{ fontFamily: "'LXGW WenKai', serif" }}
                  >
                    {basicInfo.summary}
                  </p>
                </div>
              )}

              <button
                onClick={handleGenerateNotes}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] hover:bg-[#0f2a22] text-white rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">生成小红书爆款笔记</span>
              </button>
            </div>
          </div>
        </div>

        {/* Platform Ratings */}
        <div className="mb-8">
          <h2
            className="font-serif text-xl font-semibold text-[#1B4332] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            多平台评分聚合
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ratings.map((r) => (
              <div
                key={r.platform}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-[#1B4332]/60 text-xs font-medium uppercase tracking-wider mb-2">
                  {r.platformName}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-[#1B4332]">{r.score.toFixed(1)}</span>
                  <span className="text-[#1B4332]/40">/ {r.maxScore}</span>
                </div>
                <StarRating score={r.score} maxScore={r.maxScore} ratingsCount={r.ratingsCount} />
                <p className="mt-3 text-xs text-[#1B4332]/60">{r.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buy & Sell Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Buy Points - 用户痛点 + 买点 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2
              className="font-serif text-xl font-semibold text-[#C1666B] mb-4"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              🎯 痛点直击（用户为什么买）
            </h2>
            <div className="flex flex-wrap gap-2">
              {sellingPoints.painPoints.map((point, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#C1666B]/10 text-[#C1666B] rounded-full text-sm font-medium"
                >
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-[#1B4332] mb-3">核心买点</h3>
              <ul className="space-y-2">
                {sellingPoints.buyPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[#1B4332]/80 text-sm"
                    style={{ fontFamily: "'LXGW WenKai', serif" }}
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C1666B] mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sell Points - 营销卖点 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2
              className="font-serif text-xl font-semibold text-[#1B4332] mb-4"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              ✨ 爆款卖点（为什么值得推）
            </h2>
            <div className="flex flex-wrap gap-2">
              {sellingPoints.sellPoints.map((point, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#D4A574]/20 text-[#1B4332] rounded-full text-sm font-medium"
                >
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-[#1B4332] mb-3">优势提炼</h3>
              <ul className="space-y-2">
                {sellingPoints.sellPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[#1B4332]/80 text-sm"
                    style={{ fontFamily: "'LXGW WenKai', serif" }}
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Links */}
        <div className="mb-8">
          <h2
            className="font-serif text-xl font-semibold text-[#1B4332] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            直达平台
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {platformLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 text-center hover:bg-[#1B4332] hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                <span className="block font-medium text-sm">{link.platformName}</span>
                <ExternalLink className="w-3 h-3 mx-auto mt-1 opacity-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Xiaohongshu Notes */}
        {redNotes.length > 0 && (
        <div className="mb-8">
          <h2
            className="font-serif text-xl font-semibold text-[#1B4332] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            📕 小红书热门笔记
          </h2>
          <div className="space-y-4">
            {redNotes.map((note) => (
              <a
                key={note.id}
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow hover:translate-x-1"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#1B4332] text-lg mb-2 line-clamp-1">
                      {note.title}
                    </h3>
                    <p className="text-[#1B4332]/70 text-sm mb-3 line-clamp-2">
                      {note.snippet}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#1B4332]/50">
                      <span>by @{note.author}</span>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {formatNumber(note.likes)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bookmark className="w-3 h-3" />
                        {formatNumber(note.collects)}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#1B4332]/30 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

function formatNumber(n: number): string {
  if (n >= 10000) {
    return (n / 10000).toFixed(1) + 'w';
  }
  if (n >= 1000) {
    return (n / 1000).toFixed(1) + 'k';
  }
  return n.toString();
}