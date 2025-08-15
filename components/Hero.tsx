'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="py-20 text-center bg-black border-b border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="mb-4 text-5xl font-bold text-white">
        Discover Useful Online Tools
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300">
        Explore a curated collection of tools to boost your productivity,
        design, and development.
      </p>
    </motion.section>
  );
}
