import { Button } from '@/components/Button';

export default function Hero() {
  return (
    <section className="bg-primary p-6 md:p-8 pb-16 md:pb-20">
      <hgroup className="mb-12">
        <h1 className="text-white text-2xl w-[90%] my-8">
          <span className="block">Hello, I'm a</span>
          <span className="block">full-stack web engineer</span>
        </h1>
        <p className="text-white-dim max-w-sm">
          My name is Dom van Almsick. I am a full-stack web engineer focusing on
          technologies like React, Nextjs, and NodeJS.
        </p>
      </hgroup>
      <Button intent="secondary" className="w-[12rem]">
        Contact me
      </Button>
    </section>
  );
}
