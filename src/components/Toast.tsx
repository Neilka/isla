import { Check } from 'lucide-react';
import { useBookStore } from '@/store/useBookStore';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

export default function Toast() {
  const { toastMessage } = useBookStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  if (!visible || !toastMessage) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#1B4332] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-fade-in-up">
        <Check className="w-5 h-5 text-[#D4A574]" />
        <span className="font-medium">{toastMessage}</span>
      </div>
    </div>
  );
}