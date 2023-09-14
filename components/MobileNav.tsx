'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { Icons } from './ui/icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Close } from '@radix-ui/react-popover';

export default function MobileNav() {
  return (
    <Popover>
      <PopoverTrigger>
        <Icons.menu width={24} className="text-primary" />
      </PopoverTrigger>
      <PopoverContent className="ml-1 mt-1">
        <nav>
          <ul className={clsx('flex flex-col gap-6 text-secondary-foreground')}>
            <li>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                <Close className="hover:underline hover:underline-offset-4">
                  Home
                </Close>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <Close className="hover:underline hover:underline-offset-4">
                  Blog
                </Close>
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
      </PopoverContent>
    </Popover>
  );
}
