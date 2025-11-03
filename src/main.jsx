import { useState } from 'react'
import SplashScreen from './pages/SplashScreen'
import HomePage from './pages/HomePage'
import FiksiPage from './pages/FiksiPage'
import NonFiksiPage from './pages/NonFiksiPage'
import ProfilePage from './pages/ProfilePage'
import DesktopNavbar from './components/navbar/DesktopNavbar'
import MobileNavbar from './components/navbar/MobileNavbar'

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'fiksi':
        return <FiksiPage />;
      case 'nonfiksi':
        return <NonFiksiPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DesktopNavbar currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>
      <MobileNavbar currentPage={currentPage} onNavigate={handleNavigation} />
    </div>
  );
}

export default App