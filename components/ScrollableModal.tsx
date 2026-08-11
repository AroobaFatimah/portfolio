'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

type ScrollableModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function ScrollableModal({
  open,
  title,
  onClose,
  children,
}: ScrollableModalProps) {
  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center py-4">
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm -z-10"
          aria-hidden
        />
        <motion.div
          className="card-dark w-full max-w-3xl max-h-[min(90vh,calc(100dvh-2rem))] flex flex-col overflow-hidden"
          initial={{ scale: 0.96, y: 12 }}
          animate={{ scale: 1, y: 0 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-purple-900/50">
            <h3 id="modal-title" className="font-semibold text-white pr-4">
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-purple-900/40 text-purple-300 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain p-4">
            {children}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

type ScrollableImageModalProps = {
  open: boolean;
  title: string;
  src: string;
  alt: string;
  onClose: () => void;
};

export function ScrollableImageModal({
  open,
  title,
  src,
  alt,
  onClose,
}: ScrollableImageModalProps) {
  const isPdf = src.toLowerCase().endsWith('.pdf');

  return (
    <ScrollableModal open={open} title={title} onClose={onClose}>
      {isPdf ? (
        <iframe
          src={src}
          title={alt}
          className="w-full min-h-[70vh] rounded-xl border border-purple-900/40 bg-dark-elevated"
        />
      ) : (
        <div className="relative w-full min-h-[200px] rounded-xl overflow-hidden bg-dark-elevated">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            sizes="100vw"
          />
        </div>
      )}
    </ScrollableModal>
  );
}
