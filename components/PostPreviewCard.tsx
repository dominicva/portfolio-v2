import Link from 'next/link';

export default function PostPreviewCard({
  slug,
  title,
  author,
  date,
}: {
  slug: string;
  title: string;
  author: string;
  date: string;
}) {
  return (
    <>
      <hgroup>
        <Link href={`/posts/${slug}`}>
          <h2 className="mb-2 text-lg font-bold underline-offset-4 hover:underline">
            {title}
          </h2>
        </Link>
        <p>by {author}</p>
      </hgroup>
      <small className="text-muted">{date}</small>
    </>
  );
}
