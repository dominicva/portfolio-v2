import ThemeToggle from './ui/theme-toggle';

export default function Header() {
  return (
    <header className="p-6 pt-10 md:p-8 md:pt-10">
      <div className="mx-auto flex max-w-3xl justify-between ">
        <nav>
          <ul className="flex gap-6 text-secondary-foreground">
            <li>
              <a
                href="https://standardresume.co/r/dominicva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-4"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dominicva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-4"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
