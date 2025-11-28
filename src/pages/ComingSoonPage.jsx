import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerUp } from '../animations';
import SectionHeader from '../components/SectionHeader';

const upcomingHighlights = [
  {
    title: 'Release playbooks',
    detail: 'How I ship React Native updates with OTA channels, Fastlane, and monitoring in place.',
  },
  {
    title: 'Backend reliability',
    detail: 'NestJS observability setups, incident drills, and performance notes from real projects.',
  },
  {
    title: 'Frontend velocity',
    detail: 'Design systems, bundle budgets, and accessibility workflows that keep teams moving.',
  },
];

const workbenchNotes = [
  'Drafting long-form breakdowns of shipped products and the decisions behind them.',
  'Collecting performance baselines and before/after numbers to make lessons concrete.',
  'Packaging reusable checklists, templates, and architecture diagrams for download.',
];

/**
 * Renders a coming-soon placeholder for the blog route.
 * @returns {JSX.Element}
 */
export default function ComingSoonPage() {
  return (
    <main className="space-y-8">
      <motion.section
        className="space-y-6"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader
          eyebrow="Blog"
          title="Coming soon"
          description="New posts are in production. Until then, here is what's in the pipeline."
          alignment="start"
        />
        <motion.div className="grid gap-4 md:grid-cols-2" variants={fadeUp}>
          <article className="card-sheen rounded-2xl px-4 py-5">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">What to expect</p>
              <div className="space-y-3">
                {upcomingHighlights.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article className="card-sheen rounded-2xl px-4 py-5">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Workbench</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {workbenchNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300">
                <span className="pill">Drafts in review</span>
                <span className="pill">Case studies queued</span>
                <span className="pill">Asset library building</span>
              </div>
            </div>
          </article>
        </motion.div>
        <motion.div className="flex flex-wrap items-center gap-3" variants={fadeUp}>
          <Link to="/projects">
            <Button gradientDuoTone="purpleToBlue" className="shadow-glow">
              Browse projects
            </Button>
          </Link>
          <Link to="/">
            <Button color="gray" outline>
              Back home
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
