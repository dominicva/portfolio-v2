import ScrollLink from '@/components/ScrollLink';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="p-6 py-16 md:p-8 md:py-20">
      <div className="m-auto max-w-3xl">
        <hgroup className="mb-12">
          <h1 className="mb-8 w-[90%] text-2xl">
            <span className="block">Hello, I&apos;m a</span>
            <span className="block">full-stack product engineer</span>
          </h1>
          <p className="max-w-[21.25rem]">
            My name is Dominic van Almsick. I am a full-stack product engineer
            specialising in TypeScript, React, Nextjs, and NodeJS.
          </p>
        </hgroup>
        <ScrollLink to="#contact-form">
          <Button size="lg" variant="outline" className="w-[12rem]">
            Contact me
          </Button>
        </ScrollLink>
      </div>
    </section>
  );
}
