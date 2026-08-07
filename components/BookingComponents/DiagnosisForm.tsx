'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fieldClass = 'mt-2 min-h-12 w-full rounded-xl border border-brand-silver bg-white px-4 py-3 text-sm text-brand-graphite outline-none transition placeholder:text-muted-foreground/70 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10';

export default function DiagnosisForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serviceMethod, setServiceMethod] = useState<'workshop' | 'mail'>('workshop');

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
          <h2 className='mt-6 text-2xl font-bold text-brand-graphite sm:text-3xl'>Request received</h2>
          <p className='mt-3 leading-7 text-muted-foreground'>Thanks for reaching out. Our team will contact you shortly to confirm your repair appointment.</p>
          <button type='button' onClick={() => setSubmitted(false)} className='mt-7 rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-brand-green-light'>Book another device</button>
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
        <label className='text-sm font-semibold'>Device type<select className={fieldClass} name='device' defaultValue='' required><option value='' disabled>Select your device</option><option value='phone'>Smartphone</option><option value='tablet'>Tablet</option><option value='laptop'>Laptop or MacBook</option><option value='console'>Gaming console</option><option value='other'>Other device</option></select></label>
        <fieldset className='sm:col-span-2'>
          <legend className='text-sm font-semibold'>How would you like us to receive your device?</legend>
          <div className='mt-3 grid gap-3 sm:grid-cols-2'>
            <label className={'cursor-pointer rounded-2xl border p-4 transition ' + (serviceMethod === 'workshop' ? 'border-brand-green bg-brand-green-light ring-2 ring-brand-green/10' : 'border-brand-silver bg-white hover:border-brand-green/50')}>
              <span className='flex items-start gap-3'>
                <input className='mt-1 size-4 accent-brand-green' type='radio' name='serviceMethod' value='workshop' checked={serviceMethod === 'workshop'} onChange={() => setServiceMethod('workshop')} />
                <span><span className='block font-semibold text-brand-graphite'>Visit our workshop</span><span className='mt-1 block text-xs font-normal leading-5 text-muted-foreground'>Bring your device in for an in-person diagnosis.</span></span>
              </span>
            </label>
            <label className={'cursor-pointer rounded-2xl border p-4 transition ' + (serviceMethod === 'mail' ? 'border-brand-green bg-brand-green-light ring-2 ring-brand-green/10' : 'border-brand-silver bg-white hover:border-brand-green/50')}>
              <span className='flex items-start gap-3'>
                <input className='mt-1 size-4 accent-brand-green' type='radio' name='serviceMethod' value='mail' checked={serviceMethod === 'mail'} onChange={() => setServiceMethod('mail')} />
                <span><span className='block font-semibold text-brand-graphite'>Mail in your device</span><span className='mt-1 block text-xs font-normal leading-5 text-muted-foreground'>Ship it securely after we confirm your request.</span></span>
              </span>
            </label>
          </div>
        </fieldset>
        {serviceMethod === 'mail' && (
          <div className='rounded-2xl border border-brand-green/20 bg-brand-green-light/70 p-5 sm:col-span-2'>
            <p className='text-sm font-semibold text-brand-green-dark'>Mail-in instructions</p>
            <p className='mt-2 text-xs leading-5 text-muted-foreground'>Please do not ship your device yet. We will confirm your request first and send the workshop address, packaging guidance, and tracking instructions.</p>
            <label className='mt-4 block text-sm font-semibold'>Return address<textarea className={fieldClass + ' min-h-24 resize-y bg-white'} name='returnAddress' placeholder='Your full return delivery address' required /></label>
          </div>
        )}
        <label className='text-sm font-semibold sm:col-span-2'>Preferred appointment date<input className={fieldClass} type='date' name='date' required /></label>
        <label className='text-sm font-semibold sm:col-span-2'>What seems to be the problem?<textarea className={`${fieldClass} min-h-32 resize-y`} name='issue' placeholder='Tell us what happened and any symptoms you have noticed...' required /></label>
      </div>
      <p className='mt-5 text-xs leading-5 text-muted-foreground'>Submitting this form requests an appointment. We will contact you to confirm availability.</p>
      <button type='submit' className='mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-green-dark sm:w-auto'>Submit repair request<ArrowRight aria-hidden='true' className='size-5' /></button>
    </form>
  );
}
