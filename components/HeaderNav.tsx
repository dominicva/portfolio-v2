import Link from 'next/link';
import clsx from 'clsx';
import { Icons } from './ui/icons';

export default function HeaderNav({
  direction,
}: {
  direction: 'horizontal' | 'vertical';
}) {
  return (
    <nav>
      <ul
        className={clsx(
          'flex gap-6 text-secondary-foreground',
          direction === 'vertical' && 'flex-col'
        )}
      >
        <li>
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className="hover:underline hover:underline-offset-4"
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            href="https://standardresume.co/r/dominicva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[1px] hover:underline hover:underline-offset-4"
          >
            <span>Resume</span>
            <Icons.externalLink width={14} className="relative bottom-1" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dominicva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[1px] hover:underline hover:underline-offset-4"
          >
            <span>GitHub</span>
            <Icons.externalLink width={14} className="relative bottom-1" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
