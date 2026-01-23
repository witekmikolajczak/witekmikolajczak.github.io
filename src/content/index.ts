import type { ComponentType } from 'react';
import type { BlogArticle, BlogPost } from '../types';

const postModules = import.meta.glob<{
  default: ComponentType;
  frontmatter: BlogPost;
}>('./posts/*.mdx', { eager: true });

export const allPosts: BlogArticle[] = Object.values(postModules)
  .map((mod) => ({
    ...mod.frontmatter,
    Content: mod.default,
  }))
  .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
