import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/learn', label: 'Learn' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className=" top-5 left-0 right-0 z-50 bg-dark]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="h-20">
            <img src={logo} alt="Miya Wu Logo" className="h-full" />
          </Link>
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-light font-['Proxima_Nova'] font-normal text-base px-3 py-1 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-grey'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 