'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fieldClass = 'mt-2 min-h-12 w-full rounded-xl border border-brand-silver bg-white px-4 py-3 text-sm text-brand-graphite outline-none transition placeholder:text-muted-foreground/70 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10';

export default function TrainingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className='grid min-h-[32rem] place-items-center rounded-3xl border border-brand-green/20 bg-white p-8 text-center shadow-card sm:p-12'>
        <div className='max-w-md'>
          <span className='mx-auto grid size-16 place-items-center rounded-full bg-brand-green-light text-brand-green'><CheckCircle2 aria-hidden='true' className='size-8' /></span>
          <h2 className='mt-6 text-2xl font-bold text-brand-graphite sm:text-3xl'>Training request received</h2>
          <p className='mt-3 leading-7 text-muted-foreground'>Thank you for your interest. Our team will contact you shortly with availability, fees, and the next steps.</p>
          <button type='button' onClick={() => setSubmitted(false)} className='mt-7 rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-brand-green-light'>Submit another request</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='rounded-3xl border border-brand-silver/80 bg-white p-6 shadow-card sm:p-8 lg:p-10'>
      <div className='grid gap-6 sm:grid-cols-2'>
        <label className='text-sm font-semibold'>Full name<input className={fieldClass} type='text' name='name' placeholder='Your full name' autoComplete='name' required /></label>
        <label className='text-sm font-semibold'>Phone number<input className={fieldClass} type='tel' name='phone' placeholder='e.g. +1-202-555-0143' autoComplete='tel' required /></label>
        <label className='text-sm font-semibold'>Email address<input className={fieldClass} type='email' name='email' placeholder='you@example.com' autoComplete='email' required /></label>
        <label className='text-sm font-semibold'>Training program<select className={fieldClass} name='program' defaultValue='' required><option value='' disabled>Select a program</option><option value='iphone'>iPhone Repair Training</option><option value='ipad'>iPad Repair Training</option><option value='ps5'>PS5 Repair Training</option><option value='xbox'>Xbox Repair Training</option><option value='not-sure'>Not sure yet</option></select></label>
        <label className='text-sm font-semibold'>Experience level<select className={fieldClass} name='experience' defaultValue='' required><option value='' disabled>Select your experience</option><option value='beginner'>Beginner — no experience</option><option value='basic'>Basic repair experience</option><option value='intermediate'>Intermediate technician</option><option value='advanced'>Advanced technician</option></select></label>
        <label className='text-sm font-semibold'>Preferred schedule<select className={fieldClass} name='schedule' defaultValue='' required><option value='' disabled>Select a schedule</option><option value='weekday'>Weekdays</option><option value='weekend'>Weekends</option><option value='flexible'>Flexible</option></select></label>
        <label className='text-sm font-semibold sm:col-span-2'>What would you like to achieve?<textarea className={`${fieldClass} min-h-32 resize-y`} name='goals' placeholder='Tell us about the skills you want to learn and your career goals...' required /></label>
      </div>
      <p className='mt-5 text-xs leading-5 text-muted-foreground'>Submitting this form is an enquiry. We will contact you to confirm program dates, availability, and fees.</p>
      <button type='submit' className='mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-green-dark sm:w-auto'>Submit training request<ArrowRight aria-hidden='true' className='size-5' /></button>
    </form>
  );
}
