// src/pages/FiksiPage.jsx
import { useState, useEffect } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { BukuFiksi } from '../data/buku';
import BookCard from '../components/buku/BookCard';

export default function FiksiPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuku, setFilteredBuku] = useState([]);
  
  const allBuku = BukuFiksi.buku;

  useEffect(() => {
    const filter = () => {
      if (searchQuery.trim() === '') {
        setFilteredBuku(allBuku);
      } else {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = allBuku.filter(buku =>
          buku.judul.toLowerCase().includes(lowercasedQuery) ||
          buku.penulis.toLowerCase().includes(lowercasedQuery) ||
          buku.genre.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredBuku(filtered);
      }
    };
    filter();
  }, [searchQuery, allBuku]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Koleksi Buku Fiksi
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredBuku.length} buku tersedia
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari judul, penulis, atau genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Books Grid */}
        {filteredBuku.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuku.map((buku) => (
              <BookCard key={buku.id} buku={buku} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Tidak ada buku yang ditemukan
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Coba kata kunci pencarian yang berbeda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}