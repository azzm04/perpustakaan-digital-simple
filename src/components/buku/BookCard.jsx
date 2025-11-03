import { Star, Calendar, FileText } from 'lucide-react';

/**
 * Komponen BookCard untuk menampilkan detail satu buku.
 * Menerima prop `buku` yang berisi objek data buku.
 */
export default function BookCard({ buku }) {
  // Destructuring prop buku untuk akses yang lebih mudah
  const { judul, penulis, tahun, genre, sinopsis, halaman, rating } = buku;

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      
      {/* Area Konten Utama */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Header: Genre & Rating */}
        <div className="flex justify-between items-center mb-4">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {genre}
          </span>
          <div className="flex items-center text-sm text-gray-700">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
            <span className="font-bold text-base">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Judul & Penulis */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-1 truncate" title={judul}>
            {judul}
          </h3>
          <p className="text-sm font-medium text-indigo-600 mb-3">
            Oleh: {penulis}
          </p>

          {/* Sinopsis */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 h-[60px]">
            {sinopsis}
          </p>
        </div>
      </div>
      
      {/* Footer: Info Meta */}
      <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 mt-auto">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
            <span>Tahun: <span className="font-medium text-gray-800">{tahun}</span></span>
          </div>
          <div className="flex items-center">
            <FileText className="w-4 h-4 mr-1.5 text-gray-400" />
            <span><span className="font-medium text-gray-800">{halaman}</span> Halaman</span>
          </div>
        </div>
      </div>

    </div>
  );
}


