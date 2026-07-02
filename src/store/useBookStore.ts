import { create } from 'zustand';

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

export interface BookDetail {
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
  ratings: {
    platform: string;
    platformName: string;
    score: number;
    maxScore: number;
    ratingsCount: number;
    summary: string;
  }[];
  sellingPoints: {
    buyPoints: string[];
    sellPoints: string[];
    painPoints: string[];
  };
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

export interface GeneratedNote {
  id: string;
  angle: string;
  angleLabel: string;
  title: string;
  content: string;
  hashtags: string[];
  imageSuggestions: string[];
}

interface BookStore {
  searchQuery: string;
  searchResults: BookSummary[];
  searchLoading: boolean;
  hotBooks: BookSummary[];
  bookDetail: BookDetail | null;
  detailLoading: boolean;
  notes: GeneratedNote[];
  notesLoading: boolean;
  activeNoteAngle: string;
  searchHistory: string[];
  toastMessage: string;

  setSearchQuery: (q: string) => void;
  search: (q: string) => Promise<void>;
  fetchHotBooks: () => Promise<void>;
  fetchBookDetail: (id: string) => Promise<void>;
  generateNotes: (id: string) => Promise<void>;
  setActiveNoteAngle: (angle: string) => void;
  addSearchHistory: (term: string) => void;
  clearSearchHistory: () => void;
  setToastMessage: (msg: string) => void;
}

export const useBookStore = create<BookStore>((set, get) => ({
  searchQuery: '',
  searchResults: [],
  searchLoading: false,
  hotBooks: [],
  bookDetail: null,
  detailLoading: false,
  notes: [],
  notesLoading: false,
  activeNoteAngle: 'pain_point',
  searchHistory: [],
  toastMessage: '',

  setSearchQuery: (q) => set({ searchQuery: q }),

  search: async (q) => {
    set({ searchLoading: true, searchQuery: q });
    try {
      const res = await fetch(`/api/books/search?q=${encodeURIComponent(q)}`);
      const json = await res.json();
      console.log('[BookStore] search response:', json);
      if (json.success) {
        set({ searchResults: json.data.books || [], searchLoading: false });
      } else {
        console.error('[BookStore] search failed:', json);
        set({ searchResults: [], searchLoading: false });
      }
    } catch (e) {
      console.error('[BookStore] search error:', e);
      set({ searchResults: [], searchLoading: false });
    }
  },

  fetchHotBooks: async () => {
    try {
      const res = await fetch('/api/books/hot');
      const json = await res.json();
      if (json.success) {
        set({ hotBooks: json.data.books });
      }
    } catch {}
  },

  fetchBookDetail: async (id) => {
    set({ detailLoading: true });
    try {
      const res = await fetch(`/api/books/${id}`);
      const json = await res.json();
      if (json.success) {
        set({ bookDetail: json.data, detailLoading: false });
      }
    } catch {
      set({ detailLoading: false });
    }
  },

  generateNotes: async (id) => {
    set({ notesLoading: true });
    try {
      const res = await fetch(`/api/books/${id}/notes`, { method: 'POST' });
      const json = await res.json();
      if (json.success) {
        set({ notes: json.data.notes, notesLoading: false });
      }
    } catch {
      set({ notesLoading: false });
    }
  },

  setActiveNoteAngle: (angle) => set({ activeNoteAngle: angle }),

  addSearchHistory: (term) => {
    const history = get().searchHistory;
    const newHistory = [term, ...history.filter((t) => t !== term)].slice(0, 8);
    set({ searchHistory: newHistory });
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  },

  clearSearchHistory: () => {
    set({ searchHistory: [] });
    localStorage.removeItem('searchHistory');
  },

  setToastMessage: (msg) => {
    set({ toastMessage: msg });
    setTimeout(() => set({ toastMessage: '' }), 2000);
  },
}));

// 初始化搜索历史
const saved = localStorage.getItem('searchHistory');
if (saved) {
  try {
    useBookStore.setState({ searchHistory: JSON.parse(saved) });
  } catch {}
}