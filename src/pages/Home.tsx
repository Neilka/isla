import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Clock, TrendingUp, BookOpen } from 'lucide-react';
import { useBookStore } from '@/store/useBookStore';
import BookCard from '@/components/BookCard';

export default function Home() {
  const navigate = useNavigate();
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    searchLoading,
    hotBooks,
    searchHistory,
    search,
    fetchHotBooks,
    addSearchHistory,
    clearSearchHistory,
  } = useBookStore();

  const [localQuery, setLocalQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetchHotBooks();
  }, []);

  const handleSearch = async () => {
    const q = localQuery.trim();
    if (!q) return;
    addSearchHistory(q);
    setShowResults(true);
    await search(q);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleHistoryClick = (term: string) => {
    setLocalQuery(term);
    setSearchQuery(term);
    addSearchHistory(term);
    setShowResults(true);
    search(term);
  };

  const handleBookClick = (id: string) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332] text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-48 bg-[#D4A574] rounded-sm rotate-12" />
          <div className="absolute bottom-10 right-20 w-24 h-36 bg-[#D4A574] rounded-sm -rotate-6" />
          <div className="absolute top-20 right-40 w-20 h-28 bg-[#D4A574] rounded-sm rotate-45" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 text-sm text-[#D4A574] border border-[#D4A574]/20">
            <BookOpen className="w-4 h-4" />
            <span>图书爆款工坊</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "'Noto Serif SC', serif" }}>
            一本书的爆款密码
            <br />
            <span className="text-[#D4A574]">一键解锁</span>
          </h1>

          <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
            输入书名，即刻获取多平台评分、买点卖点分析、小红书爆款笔记
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#D4A574]">
              <Search className="w-5 h-5 text-[#1B4332]/40 ml-5 flex-shrink-0" />
              <input
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入书名，如「认知觉醒」「三体」..."
                className="w-full px-4 py-5 text-[#1B4332] placeholder-[#1B4332]/30 bg-transparent outline-none text-lg"
                style={{ fontFamily: "'LXGW WenKai', serif" }}
              />
              {localQuery && (
                <button
                  onClick={() => { setLocalQuery(''); setShowResults(false); }}
                  className="p-2 text-[#1B4332]/40 hover:text-[#1B4332] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={handleSearch}
                disabled={searchLoading}
                className="px-8 py-5 bg-[#D4A574] hover:bg-[#C4956A] text-white font-medium transition-all disabled:opacity-50"
              >
                {searchLoading ? '搜索中...' : '搜索'}
              </button>
            </div>

            {/* Search History */}
            {!showResults && searchHistory.length > 0 && (
              <div className="mt-4 flex items-center gap-2 flex-wrap justify-center">
                <Clock className="w-3.5 h-3.5 text-white/50" />
                {searchHistory.slice(0, 5).map((term, i) => (
                  <button
                    key={i}
                    onClick={() => handleHistoryClick(term)}
                    className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 text-white/80 rounded-full transition-all"
                  >
                    {term}
                  </button>
                ))}
                {searchHistory.length > 0 && (
                  <button
                    onClick={clearSearchHistory}
                    className="px-3 py-1 text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    清除
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Search Results or Hot Books */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 pb-20">
        {showResults ? (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Search className="w-4 h-4 text-[#1B4332]/60" />
              <h2 className="text-lg font-semibold text-[#1B4332]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                搜索 &ldquo;{searchQuery}&rdquo; 的结果
              </h2>
              {searchResults.length > 0 && (
                <span className="text-sm text-[#1B4332]/50">共 {searchResults.length} 本</span>
              )}
            </div>

            {searchLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                    <div className="flex gap-4">
                      <div className="w-24 h-36 bg-[#1B4332]/10 rounded-lg" />
                      <div className="flex-1 space-y-3">
                        <div className="h-4 bg-[#1B4332]/10 rounded w-3/4" />
                        <div className="h-3 bg-[#1B4332]/10 rounded w-1/2" />
                        <div className="h-3 bg-[#1B4332]/10 rounded w-2/3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((book) => (
                  <BookCard key={book.id} book={book} onClick={() => handleBookClick(book.id)} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-[#1B4332]/15 mx-auto mb-4" />
                <p className="text-[#1B4332]/40 text-lg">未找到相关图书，试试其他关键词吧</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4 text-[#C1666B]" />
              <h2 className="text-lg font-semibold text-[#1B4332]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                热门推荐
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotBooks.map((book) => (
                <BookCard key={book.id} book={book} onClick={() => handleBookClick(book.id)} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}