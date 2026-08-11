'use client';

import { profile } from '@/config/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-900/50 bg-dark-secondary/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <Logo size="sm" />
            <p className="text-xs text-purple-300/70">{profile.role}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-purple-200/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-purple-300/70 hover:text-white hover:bg-purple-900/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg text-purple-300/70 hover:text-white hover:bg-purple-900/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-400/60">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
