import Project from './Project';
import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section className="p-6 md:p-8">
      <article className="m-auto flex max-w-3xl flex-col gap-8">
        <h2 className="mb-4 mt-8 text-2xl font-semibold">My projects</h2>
        <div>
          <ul className="flex flex-col gap-16">
            {projects.map((project, i) => (
              <Project
                key={project.title}
                index={i}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
