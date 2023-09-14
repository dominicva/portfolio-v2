import path from 'path';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { components } from '@/components/MDXComponents';
import type { PostMetaData } from '@/types';

const ROOT_DIRECTORY = path.join(process.cwd(), 'content');

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: '' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['highlighted', 'word'];
  },
};

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(ROOT_DIRECTORY, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
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
