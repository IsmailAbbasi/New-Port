"use client"
import React, { useState, useEffect } from 'react';

// You can use any icon library, but here are simple SVG components for demonstration
const CodeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 20.5 3.5 14l6.5-6.5" />
    <path d="m14 3.5 6.5 6.5-6.5 6.5" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <rect x="6" y="9" width="20" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="6" y="15" width="20" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="6" y="21" width="20" height="2.5" rx="1.25" fill="currentColor" />
  </svg>
);

const XIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || isOpen ? 'top-4' : 'top-6'
      }`}
    >
      <div
        className="relative w-[96%] max-w-5xl mx-auto px-6 sm:px-8 py-4 transition-all duration-500 ease-out border rounded-2xl bg-black/40 backdrop-blur-3xl border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/[0.03] before:via-transparent before:to-white/[0.03] before:opacity-60 before:-z-10"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          boxShadow: isScrolled 
            ? '0 12px 48px 0 rgba(0, 0, 0, 0.6), 0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 text-white font-bold text-xl group">
            <div className="p-2 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] group-hover:bg-white/[0.08] transition-all duration-300 group-hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.1)]">
              <CodeIcon className="w-5 h-5" />
            </div>
            <span className="font-mono bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              MyPortfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="relative px-5 py-2.5 text-gray-300 hover:text-white rounded-xl transition-all duration-300 group overflow-hidden hover:bg-white/[0.05] hover:backdrop-blur-sm hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.05)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-transparent before:via-white/[0.02] before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-300 hover:text-white focus:outline-none rounded-xl transition-all duration-300 hover:bg-white/[0.05] hover:backdrop-blur-sm active:scale-95 hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.05)]"
            >
              {isOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-80 mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-3 p-4 rounded-xl bg-black/20 backdrop-blur-2xl border border-white/[0.05]">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="relative w-full text-center px-5 py-4 text-gray-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] rounded-lg transition-all duration-300 border border-white/[0.03] hover:border-white/[0.08] hover:backdrop-blur-sm hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.05)] transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? 'slideIn 0.5s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}