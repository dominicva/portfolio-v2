'use client';

import Link from 'next/link';

export default function ScrollLink({ to, children }: any) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link href={to} onClick={handleClick}>
      {children}
    </Link>
  );
}
