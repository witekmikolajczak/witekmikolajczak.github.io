import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { staggerUp } from '../animations';
import { projects } from '../projects';

export default function ProjectsPage() {
  return (
    <main className="space-y-8">
      <motion.section
        className="space-y-3"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Click a project to see role, tech, and screenshots."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
