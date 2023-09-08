export default function Footer() {
  return (
    <footer
      id="footer"
      className=" bg-accent p-6 text-foreground dark:text-background"
    >
      <div className="m-auto max-w-3xl py-16 md:py-20">
        <p className="">
          Send me an{' '}
          <a
            href="mailto:dominicvana@gmail.com"
            className="underline underline-offset-4"
          >
            email
          </a>
        </p>
        <ul className="my-4">
          <h4 className="mb-1">Find me on</h4>
          <div className="flex gap-6">
            <li>
              <a
                href="
                    https://www.linkedin.com/in/dominicva"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dominicva"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dominicva"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Twitter
              </a>
            </li>
          </div>
        </ul>
        <p className="mb-2">Made with ❤️ by Dominic van Almsick</p>
      </div>
    </footer>
  );
}
