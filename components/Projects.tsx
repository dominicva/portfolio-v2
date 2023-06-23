import Image from 'next/image';

export default function Projects() {
  return (
    <section className="bg-primary p-6 pb-48 text-white md:p-8">
      <article className="m-auto flex max-w-3xl flex-col gap-8">
        <h2 className="mb-4 mt-8 text-2xl font-semibold">My projects</h2>
        <div>
          <ul>
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
                    alt="Project 1"
                    width={240}
                    height={240}
                    className="rounded-lg sm:basis-[47%]"
                  />
                </a>
                <p className=" sm:basis-[47%]">
                  An e-commerce store selling keto groceries. Built with
                  TypeScript, React and Nextjs 13+ (using the new App router and
                  React Server Components), TailwindCSS, Postgres with Prisma as
                  the ORM, Next-Auth for user authentication, Stripe for
                  payments, and Cloudinary for image hosting.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
