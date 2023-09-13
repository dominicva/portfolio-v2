import Hello from '@/app/hello.mdx';

export default function BlogPostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div>
      {params.slug}
      <Hello />
    </div>
  );
}
