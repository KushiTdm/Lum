import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center animate-fade-in">
        <div className="relative">
          <Sparkles className="w-16 h-16 text-rose-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto">
            <div className="w-full h-full border-4 border-rose-200 rounded-full animate-ping" />
          </div>
        </div>
        <h1 className="mt-6 text-4xl font-light text-gray-800 tracking-wider">Lūm</h1>
        <p className="mt-2 text-sm text-gray-500 font-light">Votre moment de beauté commence...</p>
      </div>
    </div>
  );
}
