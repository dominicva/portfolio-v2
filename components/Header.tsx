export default function Header() {
  return (
    <header className="bg-primary p-6 md:p-8">
      <nav className="m-auto max-w-2xl">
        <ul className="flex gap-6 text-secondary">
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
    </header>
  );
}
