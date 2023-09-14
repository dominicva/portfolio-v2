import { getPostBySlug } from '@/lib/posts';

export default async function BlogPostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { content, frontmatter } = await getPostBySlug(params.slug);

  return <div className="prose">{content}</div>;
}
