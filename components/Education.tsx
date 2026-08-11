'use client';

import { motion } from 'framer-motion';
import { profile } from '@/config/profile';
import { GraduationCap, Medal, Trophy } from 'lucide-react';
import { useState } from 'react';
import { ScrollableImageModal } from '@/components/ScrollableModal';

function RankHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center justify-center"
    >
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40 animate-[spin_24s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-violet-500/25 bg-purple-950/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-4xl font-black text-gradient leading-none">#1</div>
          <div className="text-sm font-semibold text-purple-200/90 mt-1">Ranked</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="education" className="section-container section-padding bg-dark-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic foundation</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-dark p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {profile.education.degree}
                  </h3>
                  <p className="text-purple-200/90 mt-1">
                    {profile.education.university}
                  </p>
                  <p className="text-purple-400 font-semibold mt-1">
                    {profile.education.period}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {profile.education.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-200 font-semibold text-sm"
                  >
                    <Trophy className="w-4 h-4" />
                    {badge}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowCert(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Medal className="w-4 h-4" />
                View certificate
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <RankHighlight />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollableImageModal
        open={showCert}
        title="Merit certificate"
        src={profile.education.certificate}
        alt="Merit certificate"
        onClose={() => setShowCert(false)}
      />
    </section>
  );
}
