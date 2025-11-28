import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
import { staggerUp } from '../animations';
import { posts } from '../posts';

export default function BlogListPage() {
  return (
    <main className="space-y-8">
      <motion.section
        className="space-y-4"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader
          eyebrow="Blog"
          title="Good practices in development"
          description="Posts live in `src/posts.js` as markdown strings, parsed client-side."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
