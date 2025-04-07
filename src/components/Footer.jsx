import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
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
        <footer className="bg-[var(--background-color-dark)] text-[var(--font-color-light)] py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    © 2025 Miya Wu
                </div>
                <nav className="flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-['Proxima_Nova'] text-base ${
                                location.pathname === link.path
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