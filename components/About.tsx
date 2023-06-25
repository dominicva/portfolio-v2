export default function About() {
  return (
    <section className="bg-primary p-6 pb-16 text-white md:p-8 md:pb-20">
      <article className="m-auto flex max-w-3xl flex-col gap-8">
        <div>
          <h2 className="mb-4 mt-8 text-2xl font-semibold text-white">
            About me
          </h2>
          <p className="mb-6">
            I&apos;m Dom, a self-taught full stack JavaScript/TypeScript
            engineer with a passion for building for the web. With an
            oat-americano in hand and a love for all things React, Next.js, and
            Node.js, I experiment all over the web ecosystem. Whether I&apos;m
            architecting scalable backends or crafting pixel-perfect frontends,
            I strive to strike a balance between clean code and user
            satisfaction.
          </p>
          <p>
            I also wear the hat of a JavaScript teacher, guiding students on
            their coding journeys. I firmly believe that empathy is the secret
            to effective teaching. Having walked the path of a self-learner, I
            know the struggles that beginners face. I&apos;m here to demystify
            complex concepts, and provide a supportive environment where
            everyone feels encouraged to ask questions and embrace their coding
            superpowers.
          </p>
        </div>
        {/* <div>
          <h3 className="mb-1 text-lg font-medium">Technical</h3>
          <p>
            Right now you can find me hacking away primarily with React, Nextjs,
            Prisma, TailwindCSS, Vercel and in general anything full-stack
            JavaScript/TypeScriptrelated.
          </p>
        </div>
        <div>
          <h3 className="mb-1 text-lg font-medium">Personal</h3>
          <p>
            Right now you can find me hacking away primarily with React, Nextjs,
            Prisma, TailwindCSS, Vercel and in general anything full-stack
            JavaScript/TypeScriptrelated.
          </p>
        </div> */}
      </article>
    </section>
  );
}
