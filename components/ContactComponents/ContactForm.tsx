'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fieldClass = 'mt-2 min-h-12 w-full rounded-xl border border-brand-silver bg-white px-4 py-3 text-sm text-brand-graphite outline-none transition placeholder:text-muted-foreground/70 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className='grid min-h-[30rem] place-items-center rounded-3xl border border-brand-green/20 bg-white p-8 text-center shadow-card sm:p-12'>
        <div className='max-w-md'>
          <span className='mx-auto grid size-16 place-items-center rounded-full bg-brand-green-light text-brand-green'><CheckCircle2 aria-hidden='true' className='size-8' /></span>
          <h2 className='mt-6 text-2xl font-bold text-brand-graphite sm:text-3xl'>Message received</h2>
          <p className='mt-3 leading-7 text-muted-foreground'>Thanks for contacting Green Wireless Repair. Our team will get back to you as soon as possible.</p>
          <button type='button' onClick={() => setSubmitted(false)} className='mt-7 rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-brand-green-light'>Send another message</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='rounded-3xl border border-brand-silver/80 bg-white p-6 shadow-card sm:p-8 lg:p-10'>
      <div className='grid gap-6 sm:grid-cols-2'>
        <label className='text-sm font-semibold'>Full name<input className={fieldClass} type='text' name='name' placeholder='Your full name' autoComplete='name' required /></label>
        <label className='text-sm font-semibold'>Phone number<input className={fieldClass} type='tel' name='phone' placeholder='e.g. 336-407-3745' autoComplete='tel' /></label>
        <label className='text-sm font-semibold sm:col-span-2'>Email address<input className={fieldClass} type='email' name='email' placeholder='you@example.com' autoComplete='email' required /></label>
        <label className='text-sm font-semibold sm:col-span-2'>How can we help?<select className={fieldClass} name='subject' defaultValue='' required><option value='' disabled>Select a topic</option><option value='repair'>Device repair</option><option value='training'>Repair training</option><option value='mail-in'>Mail-in repair</option><option value='existing'>Existing repair update</option><option value='other'>Something else</option></select></label>
        <label className='text-sm font-semibold sm:col-span-2'>Message<textarea className={`${fieldClass} min-h-36 resize-y`} name='message' placeholder='Tell us how we can help...' required /></label>
      </div>
      <p className='mt-5 text-xs leading-5 text-muted-foreground'>For urgent questions, call us directly at 336-407-3745.</p>
      <button type='submit' className='mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-green-dark sm:w-auto'>Send message<ArrowRight aria-hidden='true' className='size-5' /></button>
    </form>
  );
}
