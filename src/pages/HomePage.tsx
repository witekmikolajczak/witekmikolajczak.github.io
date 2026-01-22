import { Button, Badge } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerUp } from '../animations';
import { projects } from '../projects';
import SectionHeader from '../components/SectionHeader';
import StatsPanel from '../components/StatsPanel';
import ProjectCarousel from '../components/ProjectCarousel';
import { Metric } from '../types';

const photoUrl = '/profile.png';

const heroMetrics: Metric[] = [
  { label: 'Build time', value: '~22s' },
  { label: 'Coverage', value: '87%' },
  { label: 'Incidents', value: '0 Sev-1', accent: true },
  { label: 'Alerts', value: 'Healthy', accent: true },
];

const capabilityCards = [
  {
    title: 'Mobile Momentum',
    detail: 'React Native UX, offline-first sync, OTA channels, and signed builds through Fastlane.',
    tag: 'React Native',
  },
  {
    title: 'API Engineering',
    detail: 'NestJS/Node services, schema-first contracts, caching, and observability baked in.',
    tag: 'Backend',
  },
  {
    title: 'Frontend Velocity',
    detail: 'Component systems with React/Vite, a11y-first layouts, and bundle budgets enforced.',
    tag: 'Web',
  },
  {
    title: 'Security & Reliability',
    detail: 'Threat modeling, secrets discipline, rate limits, and blue/green deploy playbooks.',
    tag: 'Ops',
  },
];

const playbook = [
  {
    label: '01',
    title: 'Discovery sprint',
    note: 'Map user journeys, data flows, and operational risks into a single architecture canvas.',
  },
  {
    label: '02',
    title: 'Ship scaffolds first',
    note: 'Auth, telemetry, and feature flags land before product code to keep delivery safe.',
  },
  {
    label: '03',
    title: 'Build in parallel',
    note: 'Component library + API mocks keep web, mobile, and backend in sync.',
  },
  {
    label: '04',
    title: 'Release with guardrails',
    note: 'Canary rollouts, contract tests, and dashboards make releases boring.',
  },
];

const stack = [
  'TypeScript / React / Vite',
  'React Native / Expo',
  'NestJS / Node.js',
  'tRPC / GraphQL / REST',
  'PostgreSQL / Prisma',
  'Next.js / Edge runtime',
  'Playwright / Vitest',
  'OIDC / JWT / mTLS',
];

const signals = [
  {
    title: 'Mobile CI with confidence',
    desc: 'Fastlane per platform, signed artifacts, OTA staging channels, and release notes automation.',
  },
  {
    title: 'API defense-in-depth',
    desc: 'Gateway rules, schema validation, and live anomaly alerts wired to chat for NestJS services.',
  },
  {
    title: 'Frontend performance discipline',
    desc: 'Bundle budgets + route-level audits keep React pages fast under 1s TTI on mid devices.',
  },
];

export default function HomePage(): JSX.Element {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="space-y-14 md:space-y-16">
      <motion.section
        className="grid gap-6 md:grid-cols-[1.15fr_0.9fr]"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="space-y-4">
          <motion.p className="text-sm uppercase tracking-[0.2em] text-slate-300" variants={fadeUp}>
            Fullstack engineer / builder
          </motion.p>
          <motion.h1 className="text-3xl font-bold leading-tight md:text-4xl" variants={fadeUp}>
            Ship secure products across web and mobile with React, React Native, and NestJS.
          </motion.h1>
          <motion.p className="text-lg text-slate-200" variants={fadeUp}>
            I design and deliver resilient experiences: React on the web, React Native on mobile, and NestJS/Node
            services that are observable and production-ready.
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-3" variants={fadeUp}>
            <Button color="purple" className="shadow-glow" onClick={scrollToProjects}>
              View projects
            </Button>
            <Button color="gray" outline onClick={() => navigate('/blog')}>
              Read the blog
            </Button>
          </motion.div>
          <motion.div className="flex flex-wrap gap-3 text-sm text-slate-300" variants={fadeUp}>
            <span className="pill">Performance budgets honored</span>
            <span className="pill">Threat models included</span>
            <span className="pill">Nightly previews</span>
          </motion.div>
        </div>

        <motion.div className="card-sheen grid gap-4 rounded-2xl px-4 py-5" variants={fadeUp}>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-slate-900 p-1">
                <img src={photoUrl} alt="Profile" className="h-full w-full rounded-full object-cover" />
            </div>
            <div>
              <p className="text-sm text-slate-300">Delivery posture</p>
              <p className="text-xl font-semibold">Live</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <StatsPanel metrics={heroMetrics} />
          </div>
          {/*<div className="space-y-2">*/}
          {/*  <div className="flex gap-2">*/}
          {/*    <span className="h-16 w-1 rounded-full bg-gradient-to-b from-accent via-mint to-accent" />*/}
          {/*    <div className="grid flex-1 grid-cols-4 gap-2">*/}
          {/*      {[64, 52, 74, 46].map((h) => (*/}
          {/*        <motion.div*/}
          {/*          key={h}*/}
          {/*          className="h-full rounded-xl bg-gradient-to-b from-accent to-mint"*/}
          {/*          style={{ height: `${h}px` }}*/}
          {/*          variants={fadeIn}*/}
          {/*        />*/}
          {/*      ))}*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <p className="text-sm text-slate-300">CI enforces tests, lint, and perf budgets before merge.</p>*/}
          {/*</div>*/}
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-4"
        id="capabilities"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader
          eyebrow="Capabilities"
          title="What I deliver"
          description="Fullstack solutions tuned for security, mobile reliability, and web speed."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {capabilityCards.map((card) => (
            <motion.article
              key={card.title}
              className="card-sheen rounded-2xl px-4 py-4"
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <Badge color="indigo" className="mb-2 w-fit">
                {card.tag}
              </Badge>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-slate-200">{card.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="space-y-4"
        id="projects"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionHeader
          eyebrow="Projects"
          title="Featured work"
          description="Swipe through flagship projects and tap in for details."
        />
        <ProjectCarousel projects={projects} />
      </motion.section>

      <motion.section
        className="space-y-4"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-heading">
          <div>
            <p className="text-sm text-slate-300">Playbook</p>
            <h2 className="text-2xl font-semibold">Delivery playbook</h2>
          </div>
          <p className="text-slate-300">Fast loops with built-in governance.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {playbook.map((step) => (
            <motion.div
              key={step.label}
              className="flex flex-col gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-4 last:border-0 md:flex-row md:items-start md:gap-4"
              variants={fadeUp}
            >
              <div className="text-sm font-semibold text-accent">{step.label}</div>
              <div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-slate-200">{step.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="space-y-4"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-heading">
          <div>
            <p className="text-sm text-slate-300">Stack</p>
            <h2 className="text-2xl font-semibold">Preferred stack</h2>
          </div>
          <p className="text-slate-300">Tools chosen for speed, safety, and DX.</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {stack.map((item) => (
            <motion.div
              key={item}
              className="card-sheen rounded-xl px-3 py-3 text-center text-slate-100"
              variants={fadeUp}
              whileHover={{ y: -3 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="space-y-4"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-heading">
          <div>
            <p className="text-sm text-slate-300">Signals</p>
            <h2 className="text-2xl font-semibold">Recent signals</h2>
          </div>
          <p className="text-slate-300">Proof that security and velocity can coexist.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {signals.map((signal) => (
            <motion.article
              key={signal.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4"
              variants={fadeUp}
              whileHover={{ scale: 1.01, y: -3 }}
            >
              <h4 className="text-lg font-semibold">{signal.title}</h4>
              <p className="text-slate-200">{signal.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
