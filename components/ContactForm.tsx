'use client';

import { useState, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TwoSeventyRing } from 'react-svg-spinners';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqkvzbea');
  const [loading, setLoading] = useState(false);
  const buttonContent = loading ? <TwoSeventyRing /> : <span>Send</span>;

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
    <form onSubmit={onSubmit} className="m-auto max-w-3xl pb-20 pt-12">
      <div className="mb-6 flex flex-col gap-1">
        <label htmlFor="email" className="text-white">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder='e.g. "ninja@javascript.com"'
          autoComplete="email"
          className="max-w-sm rounded p-3 text-primary focus:outline-secondary"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Write your message here..."
        className="mb-6 h-56 w-full resize-none rounded p-3 text-primary focus:outline-secondary"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="transitionduration-200 flex h-14 w-44 items-center justify-center rounded-full bg-secondary px-8 text-xl font-medium text-primary shadow-sm ease-in-out hover:translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0.5"
      >
        {buttonContent}
      </button>
    </form>
  );
}
