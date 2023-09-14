import ThemeToggle from './ui/theme-toggle';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="p-6 pt-10 md:p-8 md:pt-10">
      <div className="mx-auto flex max-w-3xl items-center justify-between ">
        <div className="sm:hidden">
          <MobileNav />
        </div>
        <div className="hidden sm:block">
          <DesktopNav direction="horizontal" />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
