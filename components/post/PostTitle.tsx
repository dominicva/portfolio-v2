import { format } from 'date-fns';

export default function PostTitle({
  frontmatter,
}: {
  frontmatter: {
    title: string;
    author: string;
    date: string;
  };
}) {
  return (
    <article>
      <h1 className="mb-0 tracking-tight">{frontmatter.title}</h1>
      <p className="flex flex-col">
        <span className="font-semibold">by {frontmatter.author}</span>
        <span> on {format(new Date(frontmatter.date), 'do MMM yyyy')}</span>
      </p>
    </article>
  );
}
