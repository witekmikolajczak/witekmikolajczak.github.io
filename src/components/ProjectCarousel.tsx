import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations';
import { Project } from '../types';

type SlidePosition = 'center' | 'right' | 'left' | 'hidden';

const positionStyles: Record<SlidePosition, { x: string; scale: number; zIndex: number; opacity: number }> = {
  center: { x: '0%', scale: 1, zIndex: 30, opacity: 1 },
  right: { x: '32%', scale: 0.88, zIndex: 20, opacity: 0.55 },
  left: { x: '-32%', scale: 0.88, zIndex: 20, opacity: 0.55 },
  hidden: { x: '0%', scale: 0.7, zIndex: 10, opacity: 0 },
};

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps): JSX.Element {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true,
  );
  const total = projects.length;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const media = window.matchMedia('(min-width: 768px)');
    const updateMatch = () => setIsDesktop(media.matches);
    updateMatch();
    if (media.addEventListener) {
      media.addEventListener('change', updateMatch);
      return () => media.removeEventListener('change', updateMatch);
    }
    media.addListener(updateMatch);
    return () => media.removeListener(updateMatch);
  }, []);

  const positions = useMemo<SlidePosition[]>(() => {
    return projects.map((_, i): SlidePosition => {
      if (!isDesktop) {
        return i === index ? 'center' : 'hidden';
      }
      const diff = (i - index + total) % total;
      if (diff === 0) return 'center';
      if (diff === 1) return 'right';
      if (diff === total - 1) return 'left';
      return 'hidden';
    });
  }, [index, isDesktop, projects, total]);

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <motion.div
      className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      variants={fadeUp}
    >
      <div className="absolute left-2 top-1/2 z-40 -translate-y-1/2">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-white/20 bg-slate-900/80 px-3 py-2 text-slate-100 hover:bg-white/10"
          aria-label="Previous project"
        >
          ‹
        </button>
      </div>
      <div className="absolute right-2 top-1/2 z-40 -translate-y-1/2">
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-white/20 bg-slate-900/80 px-3 py-2 text-slate-100 hover:bg-white/10"
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <div className="relative h-full">
        {projects.map((project, i) => {
          const posKey = positions[i] ?? 'hidden';
          const style = positionStyles[posKey];
          const hasHeroImage = Boolean(project.heroImage);
          const showHeroImage = hasHeroImage && isDesktop;
          const heroClass = showHeroImage
            ? 'relative overflow-hidden rounded-2xl border border-white/10 p-4 text-slate-50 shadow-glow'
            : `rounded-2xl border border-white/10 bg-gradient-to-r ${project.heroColor} p-4 text-slate-900 shadow-glow`;
          return (
            <motion.div
              key={project.slug}
              className="absolute inset-0 flex items-center justify-center px-2 py-4"
              animate={{ x: style.x, scale: style.scale, opacity: style.opacity, zIndex: style.zIndex }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <div className="flex h-full w-full max-w-xl flex-col justify-between rounded-xl bg-gradient-to-br px-4 py-4 md:max-w-2xl">
                <div className={heroClass}>
                  {showHeroImage ? (
                    <>
                      <img
                        src={project.heroImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-slate-950/85" aria-hidden="true" />
                    </>
                  ) : null}
                  <div className={showHeroImage ? 'relative z-10' : ''}>
                    <div className="flex items-center justify-between">
                      <span
                        className={`pill text-xs font-semibold uppercase ${
                          showHeroImage ? 'border-white/20 bg-white/20 text-slate-100' : 'bg-white/70 text-slate-900'
                        }`}
                      >
                        {project.role}
                      </span>
                      <span className={`text-sm ${showHeroImage ? 'text-slate-200' : 'text-slate-900/80'}`}>
                        Tap to view
                      </span>
                    </div>
                    <h3 className={`mt-2 text-2xl font-bold ${showHeroImage ? 'text-slate-50' : 'text-slate-950'}`}>
                      {project.name}
                    </h3>
                    <p className={showHeroImage ? 'text-slate-200' : 'text-slate-950/80'}>{project.summary}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900 p-4">
                  <p className="text-slate-200 max-h-24 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="pill bg-white/10 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="inline-flex w-fit items-center text-accent hover:text-mint">
                    View details →
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {projects.map((_, dotIndex) => (
          <button
            key={_.slug}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full border border-white/30 transition ${
              dotIndex === index ? 'bg-white/80' : 'bg-transparent hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
