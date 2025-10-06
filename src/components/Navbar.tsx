import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className={`w-6 h-6 transition-colors duration-300 ${scrolled || !isHomePage ? 'text-rose-400' : 'text-white'} group-hover:text-rose-400`} />
            <span className={`text-2xl font-light tracking-wider transition-colors duration-300 ${scrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}>
              Lūm
            </span>
          </Link>

          <div className="flex space-x-8">
            {[
              { path: '/', label: 'Accueil' },
              { path: '/soins', label: 'Soins' },
              { path: '/reserver', label: 'Réserver' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                  scrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                } hover:text-rose-400`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full ${
                    isActive(item.path) ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
