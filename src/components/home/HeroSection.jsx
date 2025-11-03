import { BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
            <BookOpen className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selamat Datang di Perpustakaan Digital
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl">
            Jelajahi koleksi buku pilihan kami. Temukan inspirasi dan pengetahuan baru dari berbagai genre.
          </p>
        </div>
      </div>
    </div>
  );
}