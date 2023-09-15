import clsx from 'clsx';
import { getPostBySlug } from '@/lib/posts';
import { overPass } from '@/lib/font';
import PostTitle from '@/components/post/PostTitle';

export default async function BlogPostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { content, frontmatter } = await getPostBySlug(params.slug);

  return (
    <main
      className={clsx(
        'prose mx-auto mt-14 max-w-2xl pb-20 dark:prose-invert md:px-0 ',
        overPass.className
      )}
    >
      <PostTitle
        frontmatter={
          frontmatter as {
            title: string;
            author: string;
            date: string;
          }
        }
      />
      {content}
    </main>
  );
}
