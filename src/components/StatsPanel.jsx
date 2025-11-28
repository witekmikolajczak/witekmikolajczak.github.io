import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

/**
 * Displays a grid of small metrics for the hero area.
 * @param {{ metrics: Array<{ label: string, value: string, accent?: boolean }> }} props
 * @returns {JSX.Element}
 */
export default function StatsPanel({ metrics }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {metrics.map((metric) => (
        <motion.div
          key={metric.label}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
        >
          <p className="text-sm text-slate-300">{metric.label}</p>
          <p className={`text-lg font-semibold ${metric.accent ? 'text-emerald-300' : ''}`}>{metric.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
