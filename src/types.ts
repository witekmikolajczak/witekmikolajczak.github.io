import type { ComponentType } from 'react';

export type ProjectLinkIcon = 'play' | 'npm' | 'globe' | 'link';

export interface ProjectLink {
  label: string;
  href?: string;
  detail?: string;
  icon?: ProjectLinkIcon;
}

export interface ProjectImage {
  title: string;
  path?: string;
  note?: string;
  placeholder?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  role: string;
  summary: string;
  description: string;
  stack: string[];
  contributions: string[];
  outcomes: string[];
  links: ProjectLink[];
  heroColor: string;
  heroImage?: string;
  images: ProjectImage[];
}

export interface BlogPost {
  slug: string;
  title: string;
  published: string;
  summary: string;
  tags?: string[];
}

export interface BlogArticle extends BlogPost {
  Content: ComponentType;
}

export interface Metric {
  label: string;
  value: string;
  accent?: boolean;
}
