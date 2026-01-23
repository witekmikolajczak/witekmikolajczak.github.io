import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerUp } from '../animations';
import { allPosts } from '../content';

export default function BlogDetailPage(): JSX.Element | null {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find((item) => item.slug === slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      navigate('/blog', { replace: true });
    }
  }, [navigate, slug]);

  if (!slug) return null;

  if (!post) {
    return (
      <main className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <p className="text-slate-300">The blog entry you’re looking for does not exist.</p>
          <Link to="/blog" className="text-accent hover:text-mint">
            Back to blog
          </Link>
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
          <div className="markdown">
            <post.Content />
          </div>
        </motion.article>
      </motion.section>
    </main>
  );
}
