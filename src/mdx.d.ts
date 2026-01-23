declare module '*.mdx' {
  import type { ComponentType } from 'react';

  export const frontmatter: {
    title: string;
    slug: string;
    published: string;
    summary: string;
    tags?: string[];
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
