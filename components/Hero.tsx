'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/config/profile';
import { TechIcon, getTechColor } from '@/components/TechIcon';
import { Mail, Linkedin, Download } from 'lucide-react';

function OrbitingTechIcons() {
  const techs = profile.heroTech;
  const radius = 155;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-purple-500/30" />
      <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-violet-400/20" />

      <div className="absolute orbit-ring w-[340px] h-[340px]">
        {techs.map((tech, index) => {
          const angle = (index / techs.length) * 360;
          const color = getTechColor(tech);

          return (
            <div
              key={tech}
              className="absolute left-1/2 top-1/2 orbit-icon-counter"
              style={{
                width: 0,
                height: 0,
                transform: `rotate(${angle}deg) translateX(${radius}px)`,
              }}
            >
              <motion.div
                className="relative -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${color}22, ${color}10)`,
                  border: `1px solid ${color}50`,
                  boxShadow: `0 4px 20px ${color}30`,
                }}
                whileHover={{ scale: 1.15 }}
                title={tech}
              >
                <TechIcon name={tech} size={22} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  const handleGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
      '_blank'
    );
  };

  const handleLinkedIn = () => {
    window.open(profile.linkedIn, '_blank');
  };

  const handleResume = () => {
    window.open(profile.resume, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-purple-600/25 -top-32 -right-32" />
      <div className="glow-orb w-[400px] h-[400px] bg-violet-500/15 bottom-0 -left-32" />
      <div className="glow-orb w-[300px] h-[300px] bg-indigo-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-emerald-300">
                Open for opportunities
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              >
                <span className="text-white">{profile.vision.line1.split(' ').slice(0, 2).join(' ')} </span>
                <span className="text-gradient">{profile.vision.line1.split(' ').slice(2).join(' ')}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="text-lg sm:text-xl text-purple-200/90 leading-relaxed max-w-lg"
              >
                {profile.vision.line2}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  className="p-3 rounded-xl border border-purple-800/60 bg-purple-950/30 backdrop-blur-sm transition-colors"
                >
                  <div className="text-2xl font-bold text-gradient-purple">{stat.value}</div>
                  <div className="text-xs text-purple-300/80 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button type="button" onClick={handleResume} className="btn-primary">
                <Download className="w-4 h-4" />
                Resume
              </button>
              <button type="button" onClick={handleGmail} className="btn-secondary">
                <Mail className="w-4 h-4" />
                Contact via Gmail
              </button>
              <button type="button" onClick={handleLinkedIn} className="btn-secondary">
                <Linkedin className="w-4 h-4" />
                Let&apos;s Connect
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-[480px] lg:h-[560px]"
          >
            <OrbitingTechIcons />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[460px]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/40 via-violet-500/25 to-indigo-500/30 blur-xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20">
                <Image
                  src="/portfolio/images/hero/profile-pic.png"
                  alt={profile.name}
                  fill
                  className="object-cover object-top scale-110"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
