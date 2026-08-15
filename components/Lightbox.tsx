"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  image: string | null;
  open: boolean;
  onClose: () => void;
}

export default function Lightbox({ image, open, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <Image
              src={image}
              alt="Project Screenshot"
              width={1920}
              height={1080}
            //   width={1200}
            //   height={675}
              className="rounded-md object-contain max-h-[90vh] w-auto"
            />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
