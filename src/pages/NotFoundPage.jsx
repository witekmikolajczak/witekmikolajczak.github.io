import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerUp } from '../animations';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
];

/**
 * Renders a 404 fallback for unknown routes.
 * @returns {JSX.Element}
 */
export default function NotFoundPage() {
  return (
    <main className="space-y-8">
      <motion.section
        className="space-y-5"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="card-sheen rounded-2xl px-5 py-6" variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">404</p>
          <h1 className="text-3xl font-bold">Page not found</h1>
          <p className="text-slate-200">
            The page you are looking for does not exist or has moved. Try one of the links below.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button color="gray" outline>
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div className="flex flex-wrap items-center gap-3" variants={fadeUp}>
          <Link to="/">
            <Button gradientDuoTone="purpleToBlue" className="shadow-glow">
              Back home
            </Button>
          </Link>
          <Link to="/projects">
            <Button color="gray" outline>
              View projects
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
