import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { marked } from 'marked';
import { motion } from 'framer-motion';
import { fadeUp, staggerUp } from '../animations';
import { posts } from '../posts';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <p className="text-slate-300">The blog entry you’re looking for does not exist.</p>
          {/*<Link to="/blog" className="text-accent hover:text-mint">*/}
          {/*  Back to blog*/}
          {/*</Link>*/}
        </section>
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <motion.section
        className="space-y-4"
        variants={staggerUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          variants={fadeUp}
        >
          <div>
            <p className="text-sm text-slate-300">Published {post.published}</p>
            <h2 className="text-3xl font-semibold">{post.title}</h2>
          </div>
          <Link to="/blog">
            <Button color="gray" outline>
              Back to blog
            </Button>
          </Link>
        </motion.div>
        <motion.article className="card-sheen rounded-2xl px-4 py-5" variants={fadeUp}>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
        </motion.article>
      </motion.section>
    </main>
  );
}
