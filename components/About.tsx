export default function About() {
  return (
    <section className="bg-white text-primary p-6 md:p-8 pb-16 md:pb-20">
      <article className="flex flex-col gap-8 max-w-2xl m-auto">
        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">
            About me
          </h2>
          <p className="text-primary">
            Right now you can find me hacking away primarily with React, Nextjs,
            Prisma, TailwindCSS, Vercel and in general anything full-stack
            JavaScript/TypeScriptrelated.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-1">Technical</h3>
          <p className="text-primary-light">
            Right now you can find me hacking away primarily with React, Nextjs,
            Prisma, TailwindCSS, Vercel and in general anything full-stack
            JavaScript/TypeScriptrelated.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-1">Personal</h3>
          <p className="text-primary-light">
            Right now you can find me hacking away primarily with React, Nextjs,
            Prisma, TailwindCSS, Vercel and in general anything full-stack
            JavaScript/TypeScriptrelated.
          </p>
        </div>
      </article>
    </section>
  );
}
