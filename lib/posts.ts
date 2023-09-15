import path from 'path';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode, {
  Options as RehypeCodeOptions,
} from 'rehype-pretty-code';

import * as shiki from 'shiki';
import { PluggableList } from 'unified';
import { components } from '@/components/MDXComponents';
import type { PostMetaData } from '@/types';

const ROOT_DIRECTORY = path.join(process.cwd(), 'content');

// Shiki loads languages and themes using "fs" instead of "import", so Next.js
// doesn't bundle them into production build. To work around, we manually copy
// them over to our source code (lib/shiki/*) and update the "paths".
//
// Note that they are only referenced on server side
// See: https://github.com/shikijs/shiki/issues/138
const getShikiPath = (): string => {
  return path.join(process.cwd(), 'lib/shiki');
};

const touched = { current: false };

// "Touch" the shiki assets so that Vercel will include them in the production
// bundle. This is required because shiki itself dynamically access these files,
// so Vercel doesn't know about them by default
const touchShikiPath = (): void => {
  if (touched.current) return; // only need to do once
  fs.readdir(getShikiPath(), err => console.error(err)); // fire and forget
  touched.current = true;
};

const getHighlighter: RehypeCodeOptions['getHighlighter'] = async options => {
  touchShikiPath();

  const highlighter = await shiki.getHighlighter({
    // This is technically not compatible with shiki's interface but
    // necessary for rehype-pretty-code to work
    // - https://rehype-pretty-code.netlify.app/ (see Custom Highlighter)
    ...(options as any),
    paths: {
      languages: `${getShikiPath()}/languages/`,
      themes: `${getShikiPath()}/themes/`,
    },
  });

  return highlighter;
};

const getRehypeCodeOptions = (): Partial<RehypeCodeOptions> => ({
  // Requirements for theme:
  // - Has light and dark version
  // - Uses italic in several places
  // theme: { light: 'one-dark-pro', dark: 'one-dark-pro' },
  // theme: { light: 'github-light', dark: 'github-dark-dimmed' },
  // theme: 'dracula',
  theme: {
    dark: 'dracula',
    light: 'github-light',
  },
  // keepBackground: false,

  // Need to use a custom highlighter because rehype-pretty-code doesn't
  // let us customize "paths".
  getHighlighter,
});

export const getMdxCode = (): PluggableList => [
  [rehypePrettyCode, getRehypeCodeOptions()],
];
// const prettyCodeOptions = {
//   theme: 'one-dark-pro',
// };

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(ROOT_DIRECTORY, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        rehypePlugins: getMdxCode(),
      },
    },
  });

  return {
    content,
    frontmatter,
  };
};

export const getSortedPostsMetaData = async () => {
  const fileNames = fs.readdirSync(ROOT_DIRECTORY);

  const allPostsMetaData: PostMetaData[] = await Promise.all(
    fileNames.map(async fileName => {
      const slug = fileName.replace('.mdx', '');

      const { frontmatter } = await getPostBySlug(slug);

      return {
        slug,
        ...(frontmatter as Omit<PostMetaData, 'slug'>),
      };
    })
  );

  return allPostsMetaData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }

    return -1;
  });
};
