import Link from 'next/link';
import { getSortedPostsMetaData } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getSortedPostsMetaData();

  return (
    <div className="my-12">
      <h1 className="mb-10 text-3xl">Blog</h1>
      <ul className="flex flex-col gap-8">
        {posts.map(({ slug, title, author, date }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              <hgroup>
                <h2>{title}</h2>
                <p>by {author}</p>
              </hgroup>

              <small>{date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
