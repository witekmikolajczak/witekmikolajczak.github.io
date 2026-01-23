import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
import { staggerUp } from '../animations';
import { allPosts } from '../content';

export default function BlogListPage(): JSX.Element {
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
          description="MDX posts with typed frontmatter and highlighted code snippets."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {allPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
