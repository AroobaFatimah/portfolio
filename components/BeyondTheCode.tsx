'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/config/profile';
import { useState } from 'react';
import { Mic } from 'lucide-react';
import { ScrollableImageModal } from '@/components/ScrollableModal';

export function BeyondTheCode() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certModal = profile.beyondCode.find(
    (item) =>
      ('certificate' in item && item.certificate === selectedCert) ||
      ('image' in item && item.image === selectedCert) ||
      ('portrait' in item && item.portrait === selectedCert)
  );

  const hostItem = profile.beyondCode.find((item) => item.title === 'Event Host');
  const otherItems = profile.beyondCode.filter((item) => item.title !== 'Event Host');

  const portraitSrc =
    hostItem && 'portrait' in hostItem && hostItem.portrait
      ? hostItem.portrait
      : null;

  return (
    <section id="beyond-code" className="section-container section-padding bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="section-label">Beyond the Code</p>
          <h2 className="section-title mx-auto">
            Leadership &middot; Communication &middot; Initiative
          </h2>
        </motion.div>

        {hostItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-dark overflow-hidden mb-8 border-purple-500/30"
          >
            <div className="grid lg:grid-cols-[minmax(260px,380px)_1fr] gap-0 items-stretch">
              {/* Left — portrait */}
              <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] bg-gradient-to-br from-purple-950/80 via-dark-elevated to-violet-950/60 border-b lg:border-b-0 lg:border-r border-purple-900/40 flex items-center justify-center overflow-hidden">
                {portraitSrc ? (
                  <div className="relative w-full h-full min-h-[280px] sm:min-h-[300px] lg:min-h-[360px]">
                    <Image
                      src={portraitSrc}
                      alt="Arooba hosting with microphone"
                      fill
                      className="object-contain object-center p-4 sm:p-6"
                      sizes="(max-width: 1024px) 100vw, 380px"
                      priority
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-purple-500/15 border border-dashed border-purple-500/40 flex items-center justify-center mb-3">
                      <Mic className="w-8 h-8 text-purple-400/60" />
                    </div>
                    <p className="text-sm text-purple-300/70 font-medium">
                      Portrait image coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* Right — content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-[#1a1230]/80 via-dark-card to-[#140e24]/90">
                <div className="text-3xl mb-4">{hostItem.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {hostItem.title}
                </h3>
                <p className="text-purple-100/90 text-lg leading-relaxed mb-6 max-w-lg">
                  {hostItem.description}
                </p>
                {'image' in hostItem && hostItem.image && (
                  <button
                    type="button"
                    onClick={() => setSelectedCert(hostItem.image!)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors w-fit"
                  >
                    <Mic className="w-4 h-4" />
                    View certificate →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherItems.map((item, index) => {
            const media =
              'certificate' in item
                ? item.certificate
                : 'image' in item
                  ? item.image
                  : null;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => media && setSelectedCert(media)}
                  className="card-dark-hover p-6 h-full text-left w-full relative overflow-hidden"
                  disabled={!media}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/8 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/15 transition-colors" />

                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-purple-200/80 leading-relaxed">
                    {item.description}
                  </p>

                  {media && (
                    <p className="mt-4 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                      View certificate →
                    </p>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ScrollableImageModal
        open={!!selectedCert}
        title={certModal?.title || 'Certificate'}
        src={selectedCert || ''}
        alt={certModal?.title || 'Certificate'}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
