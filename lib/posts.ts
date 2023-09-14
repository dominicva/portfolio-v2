import path from 'path';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';

const ROOT_DIRECTORY = path.join(process.cwd(), 'content');

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(ROOT_DIRECTORY, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    content,
    frontmatter,
  };
};
