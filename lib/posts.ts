import path from 'path';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';

const ROOT_DIRECTORY = path.join(process.cwd(), 'content');

interface PostMetaData {
  slug: string;
  author: string;
  title: string;
  date: string;
}

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
