import Image from 'next/image';

export default function Projects() {
  return (
    <section className="bg-primary p-6 pb-48 text-white md:p-8">
      <article className="m-auto flex max-w-3xl flex-col gap-8">
        <h2 className="mb-4 mt-8 text-2xl font-semibold">My projects</h2>
        <div>
          <ul className="flex flex-col gap-16">
            <li>
              <a
                href="https://ketomarket.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-4"
              >
                <h3 className="mb-4 text-xl">Ketomarket</h3>
              </a>
              <div className="mb-12 flex flex-wrap gap-6 sm:gap-10">
                <a
                  href="https://ketomarket.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform shadow transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-lg"
                >
                  <Image
                    src="/assets/ketomarket-home.png"
                    alt="Ketomarket home page"
                    width={240}
                    height={240}
                    className="h-[360px] rounded-lg sm:basis-[47%]"
                  />
                </a>
                <p className="sm:basis-[47%] sm:self-center">
                  An e-commerce store selling keto groceries. Built with
                  TypeScript, React and Nextjs 13+ (using the new App router and
                  React Server Components), TailwindCSS, Postgres with Prisma as
                  the ORM, Next-Auth for user authentication, Stripe for
                  payments, and Cloudinary for image hosting.
                </p>
              </div>
            </li>
            <li>
              <a
                href="https://ketomarket.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-4"
              >
                <h3 className="mb-4 text-xl">Earthrise Initiative</h3>
              </a>
              <div className="mb-12 flex flex-wrap gap-6 sm:gap-10">
                <a
                  href="https://earthriseinitiative.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform shadow transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-lg sm:order-1"
                >
                  <Image
                    src="/assets/earthrise.png"
                    alt="Earthrise Initiative"
                    width={240}
                    height={240}
                    className="h-[360px] rounded-lg sm:basis-[47%]"
                  />
                </a>
                <p className="sm:basis-[47%] sm:self-center">
                  A website for a non-profit organization. Built with HTML,
                  SASS, and vanilla JavaScript. The site is fully responsive and
                  makes use of some fun APIs like the Intersection Observer API
                  to trigger animations when elements are in view.
                </p>
              </div>
            </li>
            <li>
              <a
                href="https://ketomarket.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-4"
              >
                <h3 className="mb-4 text-xl">Dictionary App</h3>
              </a>
              <div className="mb-12 flex flex-wrap gap-6 sm:gap-10">
                <a
                  href="https://dictionary-app-liart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform shadow transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-lg"
                >
                  <Image
                    src="/assets/dictionary.png"
                    alt="Dictionary App"
                    width={240}
                    height={240}
                    className="h-[360px] rounded-lg sm:basis-[47%]"
                  />
                </a>
                <p className="sm:basis-[47%] sm:self-center">
                  A dictionary app built with React and TailwindCSS. The app
                  makes use of the Dictionary API to fetch definitions and
                  examples for words. The app has a dark mode toggle and is
                  fully responsive. There is also a dropdown menu to change the
                  font across the app.
                </p>
              </div>
            </li>
            <li>
              <a
                href="https://ketomarket.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-4"
              >
                <h3 className="mb-4 text-xl">Password Generator</h3>
              </a>
              <div className="mb-12 flex flex-wrap gap-6 sm:gap-10">
                <a
                  href="https://password-generator-ten-lemon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform shadow transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-lg sm:order-1"
                >
                  <Image
                    src="/assets/password.png"
                    alt="Password Generator"
                    width={240}
                    height={240}
                    className="h-[360px] rounded-lg sm:basis-[47%]"
                  />
                </a>
                <p className="sm:basis-[47%] sm:self-center">
                  A simple password generator build with vanilla HTML, CSS, and
                  JavaScript. The app allows users to generate a password of
                  varying length and complexity. The app also calculates how
                  strong the password is using the zxcvbn library.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
