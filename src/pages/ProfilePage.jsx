// src/pages/ProfilePage.jsx
import { User, Mail, Phone, MapPin, BookOpen, Award, Users, Calendar, School } from 'lucide-react';

export default function ProfilePage() {
  // DATA INI HARUS DIGANTI DENGAN DATA ANDA!
  const profileData = {
    nama: "Azzam Syaiful Islam",
    nim: "21120123120035",
    kelompok: "24",
    email: "azzamsyaifulislam@students.undip.ac.id",
    phone: "+62 813-3143-7810",
    prodi: "Teknik Komputer",
    fakultas: "Fakultas Teknik",
    angkatan: "2023",
    alamat: "Semarang, Jawa Tengah"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 md:h-40"></div>
          
          <div className="relative px-6 pb-6">
            <div className="flex flex-col items-center -mt-16 md:-mt-20">
              {/* Avatar */}
              <div className="bg-white p-2 rounded-full shadow-xl">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-full">
                  <User className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
              
              {/* Name & NIM */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                {profileData.nama}
              </h1>
              <p className="text-indigo-600 font-semibold text-lg mt-1">
                NIM: {profileData.nim}
              </p>
              
              {/* Kelompok Badge */}
              <div className="flex items-center gap-2 mt-3 bg-indigo-50 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-indigo-600" />
                <p className="text-indigo-700 font-medium">
                  Kelompok {profileData.kelompok} - Praktikum PWA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-800 break-all">
                  {profileData.email}
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Telepon</p>
                <p className="font-semibold text-gray-800">
                  {profileData.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <MapPin className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Alamat</p>
                <p className="font-semibold text-gray-800">
                  {profileData.alamat}
                </p>
              </div>
            </div>
          </div>

          {/* Program Studi Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Program Studi</p>
                <p className="font-semibold text-gray-800">
                  {profileData.prodi}
                </p>
              </div>
            </div>
          </div>

          {/* Fakultas Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <School className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Fakultas</p>
                <p className="font-semibold text-gray-800">
                  {profileData.fakultas}
                </p>
              </div>
            </div>
          </div>

          {/* Angkatan Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Angkatan</p>
                <p className="font-semibold text-gray-800">
                  {profileData.angkatan}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Application Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">
              Tentang Aplikasi
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Perpustakaan Digital</strong> adalah aplikasi Progressive Web App (PWA) yang dibuat 
            sebagai tugas praktikum Pemrograman Berbasis Platform. Aplikasi ini menampilkan koleksi 
            buku fiksi dan non-fiksi Indonesia dengan fitur offline yang dapat diinstall di perangkat Anda.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aplikasi ini dibangun menggunakan teknologi modern seperti React.js, Vite, dan Tailwind CSS 
            dengan implementasi Service Worker untuk mendukung fungsionalitas offline.
          </p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">
              React.js
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
              Vite
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full font-medium">
              PWA
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
              Service Worker
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full font-medium">
              Lucide React
            </span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Perpustakaan Digital - Praktikum PWA</p>
          <p className="mt-1">Universitas Diponegoro</p>
        </div>
      </div>
    </div>
  );
}