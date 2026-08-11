'use client';

import { profile } from '@/config/profile';
import { TechIcon, getTechColor } from '@/components/TechIcon';

function MarqueeRow({
  children,
  reverse = false,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className={`flex gap-4 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {children}
        {children}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-secondary to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-secondary to-transparent pointer-events-none z-10" />
    </div>
  );
}

export function TrustIndicators() {
  return (
    <section className="py-12 md:py-16 border-y border-purple-900/40 bg-dark-secondary/70 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-violet-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4 text-center">
            Trust &amp; Experience — What I Bring to the Table
          </p>
          <MarqueeRow>
            {profile.trustIndicators.map((item) => (
              <span
                key={item}
                className="badge-pill whitespace-nowrap flex-shrink-0 text-sm !py-2 !px-4 hover:border-purple-500/60 hover:bg-purple-900/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 flex-shrink-0" />
                {item}
              </span>
            ))}
          </MarqueeRow>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4 text-center">
            Technologies
          </p>
          <MarqueeRow reverse>
            {profile.technologies.map((tech) => {
              const color = getTechColor(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-full border text-sm font-medium transition-transform hover:scale-105"
                  style={{
                    borderColor: `${color}40`,
                    backgroundColor: `${color}12`,
                    color: '#E9D5FF',
                  }}
                >
                  <TechIcon name={tech} size={16} />
                  {tech}
                </span>
              );
            })}
          </MarqueeRow>
        </div>
      </div>
    </section>
  );
}
