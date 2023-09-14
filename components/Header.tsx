import ThemeToggle from './ui/theme-toggle';
import { Icons } from './ui/icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header className="p-6 pt-10 md:p-8 md:pt-10">
      <div className="mx-auto flex max-w-3xl items-center justify-between ">
        <div className="sm:hidden">
          <Popover>
            <PopoverTrigger>
              <Icons.menu width={24} className="text-primary" />
            </PopoverTrigger>
            <PopoverContent className="ml-1 mt-1">
              <HeaderNav direction="vertical" />
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden sm:block">
          <HeaderNav direction="horizontal" />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
