import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg';
import Menu from '../assets/icons/menu.svg';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/learn', label: 'Learn' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects/uiux-overview', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-5 left-0 right-0 z-50 bg-dark">
      <div className="container mx-auto px-4 pt-4 flex items-center justify-between">
        <Link to="/" className="h-20">
          <img src={logo} alt="Miya Wu Logo" className="h-full" />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-light font-['Proxima_Nova'] font-normal text-xl px-3 py-1 rounded-md transition-colors ${(location.pathname.startsWith('/projects') && link.label === 'Projects') || location.pathname === link.path
                  ? 'bg-grey'
                  : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <img src={Menu} alt="Menu" className="h-8" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-light font-['Proxima_Nova'] font-normal text-xl px-3 py-1 rounded-md transition-colors ${(location.pathname.startsWith('/projects') && link.label === 'Projects') || location.pathname === link.path
                  ? 'bg-grey'
                  : ''
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header; 