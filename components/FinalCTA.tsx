'use client';

import { motion } from 'framer-motion';
import { profile } from '@/config/profile';
import { Mail, Linkedin, Download } from 'lucide-react';

export function FinalCTA() {
  const handleGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="section-container section-padding relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[250px] bg-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">
              Let&apos;s build something
            </span>
            <br />
            <span className="text-white">worth talking about.</span>
          </h2>

          <p className="text-lg text-purple-200/85 max-w-xl mx-auto">
            Open for full-time, freelance, and remote opportunities worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGmail}
              className="btn-primary text-lg !px-8 !py-4"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.button>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg !px-8 !py-4"
            >
              <Linkedin className="w-5 h-5" />
              View my LinkedIn
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg !px-8 !py-4"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
