// src/pages/SplashScreen.jsx
import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setFadeIn(true), 100);

    // Progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out after reaching 100%
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(() => {
                if (typeof onComplete === 'function') onComplete();
              }, 100);
            }, 600);
          }, 500);
          return 100;
        }
        return prev + 8;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 transition-all duration-600 ${
        !fadeIn ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      } ${fadeOut ? 'opacity-0 scale-105' : ''}`}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-indigo-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-16 animate-float-delayed">
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float">
          <div className="w-4 h-4 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-800 ${
        !fadeIn ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
      } ${fadeOut ? 'opacity-0 -translate-y-8' : ''}`}>
        
        {/* Logo Container */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full">
            <BookOpen className="w-24 h-24 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
          Perpustakaan Digital
        </h1>
        <p className="text-white/80 text-lg mb-12 text-center">
          Koleksi Buku Favoritmu
        </p>

        {/* Progress Bar */}
        <div className="w-64 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div
            className="bg-white h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/60 text-sm mt-4">
          Memuat... {progress}%
        </p>
      </div>

      {/* Footer */}
      <div className={`absolute bottom-8 text-white/60 text-sm transition-all duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}>
        Powered by PWA Technology
      </div>
    </div>
  );
}