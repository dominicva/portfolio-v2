import Link from 'next/link';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href="/blog/first-post">First Post</Link>
        </li>
      </ul>
    </div>
  );
}
