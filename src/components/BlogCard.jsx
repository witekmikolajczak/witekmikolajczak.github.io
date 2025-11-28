import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations';

/**
 * Blog list card.
 * @param {{ post: import('../posts').posts[number] }} props
 * @returns {JSX.Element}
 */
export default function BlogCard({ post }) {
  return (
    <motion.article
      className="card-sheen rounded-2xl px-4 py-4"
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="flex items-center justify-between">
        <Badge color="indigo" className="w-fit">
          {post.published}
        </Badge>
        <span className="text-sm text-slate-400">Best practices</span>
      </div>
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-slate-200">{post.summary}</p>
      <Link to={`/blog/${post.slug}`} className="text-accent hover:text-mint">
        Read post →
      </Link>
    </motion.article>
  );
}
