// Background Pattern Component
export function BackgroundPattern({ fadeOut }) {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-indigo-300/20 rounded-full blur-2xl"></div>
    </div>
  );
}

// Floating Elements Component
export function FloatingElements({ fadeOut }) {
  return (
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
  );
}

// Logo Container Component
export function LogoContainer() {
  return (
    <div className="mb-8 relative">
      <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full">
        <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    </div>
  );
}

// Title Section Component
export function TitleSection({ fadeIn }) {
  return (
    <div className={`text-center mb-12 transition-all duration-700 ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Perpustakaan Digital
      </h1>
      <p className="text-white/80 text-lg">
        Koleksi Buku Favoritmu
      </p>
    </div>
  );
}

// Loading Animation Component
export function LoadingAnimation({ fadeIn, progress }) {
  return (
    <div className={`w-64 transition-all duration-700 delay-200 ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
        <div
          className="bg-white h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white/60 text-sm mt-4 text-center">
        Memuat... {progress}%
      </p>
    </div>
  );
}

// Footer Component
export function Footer({ fadeOut, fadeIn }) {
  return (
    <div className={`absolute bottom-8 text-white/60 text-sm transition-all duration-500 ${!fadeIn ? 'opacity-0' : 'opacity-100'} ${fadeOut ? 'opacity-0' : ''}`}>
      Powered by PWA Technology
    </div>
  );
}