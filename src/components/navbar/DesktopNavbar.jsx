import { Home, BookOpen, User } from 'lucide-react';

export default function DesktopNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'fiksi', label: 'Fiksi', icon: BookOpen },
    { id: 'nonfiksi', label: 'Non-Fiksi', icon: BookOpen },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <nav className="hidden md:block bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Perpustakaan Digital</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-indigo-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}