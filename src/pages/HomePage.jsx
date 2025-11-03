// src/pages/HomePage.jsx
import { BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { BukuFiksi, BukuNonFiksi } from '../data/buku';
import BookCard from '../components/buku/BookCard';

export default function HomePage() {
  // Ambil 2 buku dari fiksi dan 2 dari non-fiksi untuk ditampilkan di beranda
  const bukuTerpilih = [
    ...BukuFiksi.buku.slice(0, 2),
    ...BukuNonFiksi.buku.slice(0, 2)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6 animate-pulse">
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

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-indigo-600 mb-1">
              {BukuFiksi.buku.length + BukuNonFiksi.buku.length}
            </div>
            <div className="text-sm text-gray-600">Total Buku</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {BukuFiksi.buku.length}
            </div>
            <div className="text-sm text-gray-600">Fiksi</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-pink-600 mb-1">
              {BukuNonFiksi.buku.length}
            </div>
            <div className="text-sm text-gray-600">Non-Fiksi</div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Buku Pilihan
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bukuTerpilih.map((buku) => (
            <BookCard key={buku.id} buku={buku} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Mulai Jelajahi Koleksi
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Temukan lebih banyak buku menarik di kategori Fiksi dan Non-Fiksi. 
            Klik menu di atas untuk melihat koleksi lengkap!
          </p>
        </div>
      </div>
    </div>
  );
}