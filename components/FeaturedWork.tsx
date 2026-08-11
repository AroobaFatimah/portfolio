'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/config/profile';
import { useCallback, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Tab = 'problem' | 'solution' | 'outcome';

const tabs: { id: Tab; label: string; hint: string }[] = [
  { id: 'problem', label: 'Challenge', hint: 'The problem' },
  { id: 'solution', label: 'What I worked on', hint: 'My contribution' },
  { id: 'outcome', label: 'Outcome', hint: 'Impact' },
];

export function FeaturedWork() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>('problem');
  const featuredRef = useRef<HTMLDivElement>(null);
  const selected = profile.features[selectedIndex];

  const tabContent: Record<Tab, string> = {
    problem: selected.challenge,
    solution: selected.solution,
    outcome: selected.outcome,
  };

  const selectProject = useCallback((index: number) => {
    setSelectedIndex(index);
    setActiveTab('problem');
    requestAnimationFrame(() => {
      featuredRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }, []);

  return (
    <section id="work" className="section-container section-padding scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Solutions I&apos;ve worked on</h2>
          <p className="section-subtitle">
            Pick a project below — the full story opens above with challenge, work, and result.
          </p>
        </motion.div>

        <motion.div
          ref={featuredRef}
          id="work-featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-dark overflow-hidden mb-10 border-purple-500/30 scroll-mt-28"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto lg:min-h-[400px] bg-gradient-to-br from-purple-950/80 via-dark-elevated to-indigo-950/60 border-b lg:border-b-0 lg:border-r border-purple-900/40">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-purple-950/40 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-transparent lg:hidden" />
            </div>

            <div className="p-6 lg:p-8 flex flex-col bg-gradient-to-br from-[#1a1230] via-dark-card to-[#140e24]">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
                {selected.focus}
              </p>
              <div className="flex items-start gap-3 mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 text-2xl flex-shrink-0">
                  {selected.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-purple-200/70 mt-1">
                    Tap another card below to switch projects
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 border-b border-purple-900/50 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-left transition-colors ${
                      activeTab === tab.id ? 'tab-active' : 'tab-inactive'
                    }`}
                  >
                    <span className="block text-sm font-semibold">{tab.label}</span>
                    <span className="block text-[11px] font-normal text-purple-400/60 mt-0.5">
                      {tab.hint}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedIndex}-${activeTab}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1"
                >
                  <p className="text-purple-100/95 text-lg leading-relaxed">
                    {tabContent[activeTab]}
                  </p>
                </motion.div>
              </AnimatePresence>

              {activeTab === 'outcome' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25"
                >
                  <p className="text-emerald-300 text-sm font-semibold">
                    ✓ Impact delivered
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.features.map((feature, index) => (
            <motion.button
              key={feature.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => selectProject(index)}
              className={`text-left card-dark-hover overflow-hidden group ${
                selectedIndex === index
                  ? 'border-purple-500/60 ring-1 ring-purple-500/40'
                  : ''
              }`}
            >
              <div className="relative h-36 overflow-hidden bg-purple-950/40">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
              </div>
              <div className="p-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/30 text-lg mb-2 shadow-lg">
                  {feature.icon}
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-400 mb-1">
                  {feature.focus}
                </p>
                <h4 className="font-semibold text-white text-sm leading-snug mb-1">
                  {feature.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-xs text-purple-400 font-medium group-hover:gap-2 transition-all">
                  View details
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
