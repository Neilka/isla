import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react';
import { useBookStore } from '@/store/useBookStore';
import { GeneratedNote } from '@/store/useBookStore';

export default function NotesPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    notes,
    notesLoading,
    activeNoteAngle,
    setActiveNoteAngle,
    generateNotes,
    setToastMessage,
  } = useBookStore();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (id && notes.length === 0) {
      generateNotes(id);
    }
  }, [id]);

  const handleCopy = async (note: GeneratedNote) => {
    const content = `${note.title}\n\n${note.content}\n\n${note.hashtags.map(tag => `#${tag}`).join(' ')}`;
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(note.id);
      setToastMessage('复制成功！');
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setToastMessage('复制失败，请手动复制');
    }
  };

  const activeNote = notes.find((n) => n.angle === activeNoteAngle) || notes[0];

  if (notesLoading) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] p-6">
        <div className="max-w-4xl mx-auto animate-pulse">
          <div className="h-8 bg-[#1B4332]/10 w-1/4 rounded mb-8" />
          <div className="space-y-4">
            <div className="h-12 bg-[#1B4332]/10 rounded" />
            <div className="h-96 bg-[#1B4332]/10 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/book/${id}`)}
              className="flex items-center gap-2 text-[#1B4332]/70 hover:text-[#1B4332] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回详情</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="mb-8">
          <h1
            className="font-serif text-2xl font-bold text-[#1B4332] mb-2"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            小红书爆款笔记生成
          </h1>
          <p className="text-[#1B4332]/60">
            三个不同角度，一键复制，直接使用
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md p-2 mb-8 inline-flex">
          {notes.map((note) => {
            const colors = {
              pain_point: 'bg-red-50 text-[#C1666B] border-red-200',
              knowledge: 'bg-emerald-50 text-[#1B4332] border-emerald-200',
              scenario: 'bg-amber-50 text-[#D4A574] border-amber-200',
            }[note.angle] || 'bg-gray-50 text-gray-600';

            return (
              <button
                key={note.angle}
                onClick={() => setActiveNoteAngle(note.angle)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                  activeNoteAngle === note.angle
                    ? `${colors} border shadow-sm`
                    : 'text-[#1B4332]/50 hover:text-[#1B4332]'
                }`}
              >
                {note.angleLabel}
              </button>
            );
          })}
        </div>

        {/* Note Card */}
        {activeNote && (
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => handleCopy(activeNote)}
                className="flex items-center gap-2 px-4 py-2 bg-[#1B4332] text-white rounded-xl hover:bg-[#0f2a22] transition-colors shadow-md"
              >
                {copiedId === activeNote.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm font-medium">一键复制</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-8 md:p-12">
              {/* Title */}
              <div
                className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-[#FF2442]/10 text-[#FF2442] rounded-full"
              >
                {activeNote.angleLabel}
              </div>
              <h2
                className="font-serif text-3xl font-bold text-[#1B4332] mb-6 leading-tight"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {activeNote.title}
              </h2>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-[#1B4332]/80 mb-8 leading-relaxed"
                style={{ fontFamily: "'LXGW WenKai', serif" }}
              >
                {activeNote.content.split('\n').map((para, i) => (
                  <p key={i} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Hashtags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {activeNote.hashtags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F2F2F2] text-[#1B4332]/60 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Suggestions */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-sm font-medium text-[#1B4332] mb-3">📸 配图建议</h3>
                <ul className="space-y-2">
                  {activeNote.imageSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#1B4332]/60 flex items-start gap-2"
                      style={{ fontFamily: "'LXGW WenKai', serif" }}
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-2" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-[#1B4332]/40 text-sm">
          提示：可以根据实际情况调整内容和配图，直接发布到小红书
        </div>
      </div>
    </div>
  );
}