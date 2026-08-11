'use client';

import { motion } from 'framer-motion';
import { profile } from '@/config/profile';

export function WhyHireMe() {
  return (
    <section id="why-me" className="section-container section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label">Why Hire Me</p>
          <h2 className="section-title">
            The right engineer for{' '}
            <span className="text-gradient">your team</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profile.whyHireMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-dark-hover p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/8 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/15 transition-colors" />

                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-purple-200/85 leading-relaxed text-base">
                  {item.description}
                </p>

                <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-violet-400 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
