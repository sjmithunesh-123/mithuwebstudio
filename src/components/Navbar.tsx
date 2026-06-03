import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode, useScrollPosition } from '../hooks/useCustomHooks';



export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 50;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white dark:bg-secondary shadow-lg'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center h-16 border border-cyan-500 rounded-xl px-6 py-3 bg-black/20 backdrop-blur-md">

      {/* Logo */}
      <Link
  to="/"
  className="flex items-center gap-2 font-bold text-2xl flex-shrink-0"
>
  <img
    src="/logo.jpg"
    alt="Logo"
    className="w-10 h-10 rounded-lg object-cover"
  />

  <span className="gradient-text">
    Mithu Web Studio
  </span>
</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 ml-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-sm font-medium hover:text-primary-600 dark:hover:text-accent transition-colors"
          >
            {item.name}
          </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-secondary/50 hover:bg-gray-200 dark:hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-white dark:bg-secondary/95"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-secondary/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
