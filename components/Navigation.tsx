'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '@/config/profile';
import { Logo } from '@/components/Logo';

const navItems = [
  { label: 'Why Me', href: '#why-me' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Beyond Code', href: '#beyond-code' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-purple-900/50 shadow-lg shadow-purple-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col gap-0.5">
            <Logo size="sm" />
            <p className="text-xs text-purple-300/70">{profile.role}</p>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-purple-300 bg-purple-500/15'
                    : 'text-purple-200/80 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !px-4 !py-2"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-purple-200 hover:text-white hover:bg-purple-900/40 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-purple-900/50 mt-1 pt-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-purple-200/90 hover:text-white hover:bg-purple-900/40 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-purple-300 hover:bg-purple-500/15 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
