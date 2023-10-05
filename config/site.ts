type SiteConfig = {
  name: string;
  url: string;
  description: string;
  keywords: string[];
  image: string;
};

export const siteConfig: SiteConfig = {
  name: 'Dom van Almsick - Software Engineer',
  url: 'https://dominicva.com',
  description: 'Dom van Almsick is a software engineer based in London, UK.',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'JavaScript',
    'Coding',
    'Programming',
    'NodeJS',
    'Node.js',
    'TypeScript',
    'Web development',
    'Server Components',
  ],
  image: 'https://www.dominicva.com/assets/ts-js-superset.svg',
};
