export default function Home() {
  return (
    <div className="p-6">
      <header className="">
        <nav className="">
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
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
        <h1 className="text-white">Dom van Almsick</h1>
      </main>
    </div>
  );
}
