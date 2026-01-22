import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge, Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerUp } from '../animations';
import { projects } from '../projects';

const linkIcons = {
  play: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  ),
  npm: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M3 7l9-4 9 4v10l-9 4-9-4V7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 12v9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3c3 3 3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M9.5 14.5l5-5M8 16a4 4 0 010-8h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 8a4 4 0 010 8h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function LinkIcon({ name }) {
  return linkIcons[name] ?? linkIcons.link;
}

/**
 * Project detail view with hero, contributions, and supporting links.
 * @returns {JSX.Element}
 */
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const links = project?.links ?? [];

  if (!project) {
    return (
      <main className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Project not found</h2>
          <p className="text-slate-300">The project you’re looking for does not exist.</p>
          <Link to="/" className="text-accent hover:text-mint">
            Back to home
          </Link>
        </section>
      </main>
    );
  }

  const hasHeroImage = Boolean(project.heroImage);
  const heroContainerClass = hasHeroImage
    ? 'card-sheen relative overflow-hidden rounded-2xl border border-white/10 p-6 text-slate-50'
    : `card-sheen rounded-2xl border border-white/10 bg-gradient-to-r ${project.heroColor} p-6 text-slate-900`;
  const hasLinks = links.length > 0;

  return (
    <main className="space-y-10">
      <motion.section
        className="space-y-4"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={heroContainerClass} variants={fadeUp}>
          {hasHeroImage ? (
            <>
              <img
                src={project.heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-slate-950/55" aria-hidden="true" />
            </>
          ) : null}
          <div className={hasHeroImage ? 'relative z-10' : ''}>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Badge color="light" className="text-xs font-semibold uppercase">
                  {project.role}
                </Badge>
                <Badge color="gray">Case study</Badge>
              </div>
              <Link to="/">
                <Button color="light">Back home</Button>
              </Link>
            </div>
            <h1 className={`mt-3 text-3xl font-bold ${hasHeroImage ? 'text-slate-50' : 'text-slate-950'}`}>
              {project.name}
            </h1>
            <p className={hasHeroImage ? 'text-slate-200' : 'text-slate-900/80'}>{project.summary}</p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="card-sheen rounded-2xl p-5" variants={fadeUp}>
          <h3 className="text-lg font-semibold">What I did</h3>
          <p className="text-slate-200">{project.description}</p>
          <div className="mt-3 space-y-2">
            {project.contributions.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="card-sheen rounded-2xl p-5" variants={fadeUp}>
          <h3 className="text-lg font-semibold">Tech & impact</h3>
          <div className="mb-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="pill bg-white/10 text-slate-200">
                {tech}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            {project.outcomes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {hasLinks ? (
        <motion.section
          className="space-y-3"
          variants={staggerUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading">
            <h3 className="text-lg font-semibold">Links</h3>
            <p className="text-slate-300">App stores, SDK packages, and demos.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {links.map((link) => {
              const isActive = Boolean(link.href);
              const MotionWrapper = isActive ? motion.a : motion.div;
              const wrapperProps = isActive
                ? { href: link.href, target: '_blank', rel: 'noreferrer' }
                : { 'aria-disabled': true };
              const statusLabel = isActive ? 'Open' : 'Add URL';
              return (
                <MotionWrapper
                  key={link.label}
                  className={`card-sheen flex items-start justify-between gap-3 rounded-2xl p-4 transition ${
                    isActive ? 'hover:border-white/30 hover:bg-white/10' : 'cursor-not-allowed opacity-70'
                  }`}
                  variants={fadeUp}
                  whileHover={isActive ? { y: -2, scale: 1.01 } : undefined}
                  {...wrapperProps}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-mint">
                      <LinkIcon name={link.icon} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-100">{link.label}</p>
                      {link.detail ? <p className="text-sm text-slate-400">{link.detail}</p> : null}
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">{statusLabel}</span>
                </MotionWrapper>
              );
            })}
          </div>
        </motion.section>
      ) : null}

      <motion.section
        className="space-y-3"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-heading">
          <h3 className="text-lg font-semibold">Screenshots & artifacts</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {project.images.map((image) => (
            <motion.div
              key={image.title}
              className="flex aspect-[4/3] flex-col rounded-2xl border border-dashed border-white/20 bg-slate-900/60 p-3 text-center text-slate-300 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-slate-900/50">
                {image.path ? (
                  <img
                    src={image.path}
                    alt={image.title}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                    <span className="text-sm">Add screenshot here</span>
                  </div>
                )}
              </div>
              <div className="pt-2">
                <p className="font-semibold text-slate-100">{image.title}</p>
                <p className="text-sm text-slate-400">{image.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
