'use client';

import { motion } from 'framer-motion';
import { profile } from '@/config/profile';
import { TechIcon } from '@/components/TechIcon';
import { FileText, ExternalLink } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section-container section-padding bg-dark-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Career growth timeline</h2>
          <p className="section-subtitle">
            From intern to full-stack — every step built real skills on real products.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/70 via-violet-500/50 to-transparent" />

          <div className="space-y-6">
            {profile.experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div
                  className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    job.emphasis
                      ? 'border-purple-400 bg-purple-500/25 shadow-lg shadow-purple-500/25'
                      : 'border-purple-700/60 bg-dark-card'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      job.emphasis ? 'bg-purple-400' : 'bg-purple-500/60'
                    }`}
                  />
                </div>

                <div
                  className={`card-dark-hover p-6 ${
                    job.emphasis ? 'border-purple-500/40 bg-purple-500/8' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {job.company}
                      </h3>
                      <p className="text-purple-300 font-semibold">{job.role}</p>
                    </div>
                    <span className="badge-pill text-purple-200 border-purple-500/40 bg-purple-500/15">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-purple-100/80 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 badge-pill"
                      >
                        <TechIcon name={tech} size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {'certificates' in job && job.certificates && job.certificates.length > 0 && (
                    <div className="pt-4 border-t border-purple-900/40">
                      <div className="flex flex-wrap gap-2">
                        {job.certificates.map((cert) => (
                          <a
                            key={cert.url}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-purple-200 border border-purple-700/50 bg-purple-950/40 hover:border-purple-500/60 hover:bg-purple-900/30 transition-all"
                          >
                            <FileText className="w-3.5 h-3.5 text-purple-400" />
                            {cert.label}
                            <ExternalLink className="w-3 h-3 text-purple-400/70" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
