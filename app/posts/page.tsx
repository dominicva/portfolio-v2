import Link from 'next/link';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href="/posts/intro-typescript-react">First Post</Link>
        </li>
      </ul>
    </div>
  );
}
