import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/learn', label: 'Learn' },
        { path: '/skills', label: 'Skills' },
        { path: '/projects/uiux-overview', label: 'Projects' },
        { path: '/resume', label: 'Resume' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <footer className="bg-dark text-light py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm mb-2 md:mb-0">
                    © 2025 Miya Wu
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-['Proxima_Nova'] text-base transition-colors ${
                                (location.pathname.startsWith('/projects') && link.label === 'Projects') || location.pathname === link.path
                                    ? 'underline'
                                    : 'hover:text-[var(--font-color-light)]'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;