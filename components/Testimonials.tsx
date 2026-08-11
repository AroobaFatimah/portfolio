'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/config/profile';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';

export function Testimonials() {
  const testimonials = profile.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, [goNext, testimonials.length]);

  const testimonial = testimonials[currentIndex];
  const stars = Array.from({ length: 5 });

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section className="section-container section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title mx-auto">
            Client Feedback
          </h2>
        </motion.div>

        <div className="relative">
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-20 w-10 h-10 rounded-full bg-purple-900/80 border border-purple-700/50 text-purple-200 hover:bg-purple-800 hover:text-white transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-20 w-10 h-10 rounded-full bg-purple-900/80 border border-purple-700/50 text-purple-200 hover:bg-purple-800 hover:text-white transition-all flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid lg:grid-cols-1 gap-8 items-center px-4 sm:px-8"
            >
              <div className="card-dark p-8 md:p-10 relative">
                <Quote className="w-10 h-10 text-purple-500/40 mb-6" />

                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-1 mb-6">
                  {stars.map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-bold text-amber-300">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-purple-900/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center font-bold text-white text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-purple-200/80 flex items-center gap-1 flex-wrap">
                      {testimonial.company} • {testimonial.role}
                      {testimonial.location && (
                        <>
                          <span className="text-purple-600">·</span>
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-purple-500'
                      : 'w-2 bg-purple-700/60 hover:bg-purple-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
