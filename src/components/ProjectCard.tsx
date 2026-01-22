import { Link } from 'react-router-dom';
import { Badge } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const hasHeroImage = Boolean(project.heroImage);
  const heroClass = hasHeroImage
    ? 'relative overflow-hidden rounded-xl border border-white/10'
    : `rounded-xl border border-white/10 bg-gradient-to-r ${project.heroColor}`;

  return (
    <motion.article
      className="card-sheen rounded-2xl px-4 py-4"
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className={`${heroClass} mb-4 aspect-[16/9]`}>
        {hasHeroImage ? (
          <>
            <img
              src={project.heroImage}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/15" aria-hidden="true" />
          </>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <Badge color="indigo" className="w-fit">
          {project.role}
        </Badge>
        <span className="text-sm text-slate-400">{project.stack.slice(0, 2).join(' · ')}</span>
      </div>
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-slate-200">{project.summary}</p>
      <Link to={`/projects/${project.slug}`} className="text-accent hover:text-mint">
        View details →
      </Link>
    </motion.article>
  );
}
