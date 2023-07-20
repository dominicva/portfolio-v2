import type { ProjectProps } from '@/components/Project';

// index prop gets passed in from the map function in the Projects component
export const projects: Omit<ProjectProps, 'index'>[] = [
  {
    title: 'Ketomarket',
    description:
      'An e-commerce store selling keto groceries. Built with TypeScript, React and Nextjs 13+ (using the new App router and React Server Components), TailwindCSS, Postgres with Prisma as the ORM, Next-Auth for user authentication, Stripe for payments, and Cloudinary for image hosting.',
    image: '/assets/ketomarket-home.png',
    link: 'https://ketomarket.vercel.app/',
  },
  {
    title: 'Meal Plan Generator',
    description:
      'Built with HTML, SASS, and TypeScript, the app allows users to specify ingredients, the approximate number of calories, dietary preference, and the number of desired courses. Using the OpenAI API, the app generates a meal plan with recipes for each of the courses.',
    image: '/assets/meal-plan-generator.png',
    link: 'https://meal-bot-chi.vercel.app/',
  },
  {
    title: 'Earthrise Initiative',
    description:
      'A website for a non-profit organization. Built with HTML, SASS, and vanilla JavaScript. The site is fully responsive and makes use of some fun APIs like the Intersection Observer API to trigger animations when elements are in view.',
    image: '/assets/earthrise.png',
    link: 'https://earthriseinitiative.com/',
  },
  {
    title: 'Dictionary App',
    description:
      'A dictionary app built with React and TailwindCSS. The app makes use of the Dictionary API to fetch definitions and examples for words. The app has a dark mode toggle and is fully responsive. There is also a dropdown menu to change the font across the app.',
    image: '/assets/dictionary.png',
    link: 'https://dictionary-app-liart.vercel.app/',
  },
  {
    title: 'Password Generator',
    description:
      'A simple password generator built with vanilla HTML, CSS, and JavaScript. The app allows users to generate a password of varying length and complexity. The app also calculates how strong the password is using the zxcvbn library.',
    image: '/assets/dictionary.png',
    link: 'https://password-generator-ten-lemon.vercel.app/',
  },
];
