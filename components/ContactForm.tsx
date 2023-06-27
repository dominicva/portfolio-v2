'use client';

import { useState, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TwoSeventyRing } from 'react-svg-spinners';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqkvzbea');
  const [loading, setLoading] = useState(false);
  const buttonContent =
    loading && state.submitting ? <TwoSeventyRing /> : <span>Send</span>;

  if (state.succeeded) {
    return (
      <p className="mb-20 mt-8 text-center text-lg font-semibold text-secondary">
        Message sent successfully ✅<br />
        Thanks for reaching out!
      </p>
    );
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    handleSubmit(e);
  };

  return (
    <section className="m-auto max-w-3xl p-6 pb-20 text-white md:px-0">
      <h2 className="mb-8 mt-8 text-2xl font-semibold">Send me a message</h2>
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="mb-6 flex flex-col gap-1">
          <label htmlFor="email" className="text-white">
            Your email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder='e.g. "ninja@javascript.com"'
            autoComplete="email"
            className="max-w-md rounded p-3 text-primary focus:outline-secondary"
          />
        </div>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-white"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          className="mb-6 h-56 w-full resize-none rounded p-3 text-primary focus:outline-secondary"
        />
        <div className="text-accent">
          {state.errors.length > 0 ? (
            <p className="mb-6 text-lg font-semibold">
              {state.errors[0].message} 😢
            </p>
          ) : null}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="transitionduration-200 flex h-14 w-44 items-center justify-center rounded-full bg-secondary px-8 text-xl font-medium text-primary shadow-sm ease-in-out hover:translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0.5"
        >
          {buttonContent}
        </button>
      </form>
    </section>
  );
}
