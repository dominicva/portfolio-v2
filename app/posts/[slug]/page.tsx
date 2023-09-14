import clsx from 'clsx';
import { getPostBySlug } from '@/lib/posts';
import { overPass } from '@/lib/font';

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
        'prose mx-auto max-w-3xl p-6 dark:prose-invert md:px-0 ',
        overPass.className
      )}
    >
      {content}
    </main>
  );
}
