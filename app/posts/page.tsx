import { getSortedPostsMetaData } from '@/lib/posts';
import PostPreviewCard from '@/components/PostPreviewCard';

export default async function BlogPage() {
  const posts = await getSortedPostsMetaData();

  return (
    <div className="my-12">
      <h1 className="mb-12 text-4xl">Blog</h1>
      <ol className="flex flex-col gap-10">
        {posts.map(({ slug, title, author, date }) => (
          <li key={slug}>
            <PostPreviewCard
              slug={slug}
              title={title}
              author={author}
              date={date}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
