import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Hero() {
  return (
    <section className="bg-primary p-6 py-16 md:p-8 md:py-20">
      <div className="m-auto max-w-3xl">
        <hgroup className="mb-12">
          <h1 className="my-8 w-[90%] text-2xl text-white">
            <span className="block">Hello, I&apos;m a</span>
            <span className="block">full-stack web engineer</span>
          </h1>
          <p className="max-w-sm text-white-dim">
            My name is Dominic van Almsick. I am a full-stack web engineer
            focusing on technologies like React, Nextjs, and NodeJS.
          </p>
        </hgroup>
        <Link href="#footer">
          <Button intent="secondary" className="w-[12rem]">
            Contact me
          </Button>
        </Link>
      </div>
    </section>
  );
}
