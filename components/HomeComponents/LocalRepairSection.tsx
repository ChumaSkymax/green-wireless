import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const services = [
  'iPhone and smartphone repair',
  'iPad and tablet repair',
  'MacBook and laptop repair',
  'PS5 and Xbox repair',
  'Board-level diagnostics',
  'Professional data recovery',
] as const;

export default function LocalRepairSection() {
  return (
    <section className='bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-brand-silver/80 bg-[#f7f9f7] shadow-card lg:grid-cols-[1.08fr_0.92fr]'>
        <div className='p-6 sm:p-10 lg:p-14'>
          <span className='inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green-light px-4 py-2 text-sm font-semibold text-brand-green-dark'>
            <MapPin aria-hidden='true' className='size-4' />
            Serving Winston-Salem, North Carolina
          </span>
          <h2 className='mt-5 max-w-2xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-brand-graphite sm:text-4xl'>
            Your local destination for <span className='text-brand-green'>professional device repair</span>
          </h2>
          <p className='mt-4 max-w-2xl text-base leading-7 text-muted-foreground'>
            Green Wireless Repair provides careful diagnostics and dependable repairs for phones, tablets, computers and game consoles. Visit our Winston-Salem workshop or start a secure mail-in repair request from anywhere.
          </p>

          <ul className='mt-7 grid gap-3 sm:grid-cols-2'>
            {services.map((service) => (
              <li key={service} className='flex items-center gap-2.5 text-sm font-semibold text-brand-graphite'>
                <ShieldCheck aria-hidden='true' className='size-5 shrink-0 text-brand-green' />
                {service}
              </li>
            ))}
          </ul>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Link href='/service' className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-green-dark'>
              Explore Repair Services
              <ArrowRight aria-hidden='true' className='size-5' />
            </Link>
            <Link href='/contact' className='inline-flex min-h-12 items-center justify-center rounded-full border border-brand-graphite/20 bg-white px-6 py-3 text-sm font-semibold text-brand-graphite transition hover:border-brand-green hover:bg-brand-green-light hover:text-brand-green-dark'>
              Contact Us
            </Link>
          </div>
        </div>

        <div className='relative isolate flex flex-col justify-between overflow-hidden bg-brand-graphite p-6 text-white sm:p-10 lg:p-12'>
          <div aria-hidden='true' className='absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-brand-green/35 blur-3xl' />
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.16em] text-green-300'>Visit or contact us</p>
            <h3 className='mt-3 text-2xl font-bold sm:text-3xl'>Green Wireless Repair</h3>
            <address className='mt-7 not-italic'>
              <a href='https://www.google.com/maps/search/?api=1&query=3029+Waughtown+St+194+Winston-Salem+NC+27107' target='_blank' rel='noreferrer' className='group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'>
                <MapPin aria-hidden='true' className='mt-0.5 size-5 shrink-0 text-green-300' />
                <span className='text-sm font-medium leading-6 text-white/80 group-hover:text-white'>3029 Waughtown St, 194<br />Winston-Salem, NC 27107</span>
              </a>
              <a href='tel:+13364073745' className='group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'>
                <Phone aria-hidden='true' className='size-5 shrink-0 text-green-300' />
                <span><span className='block text-xs uppercase tracking-wider text-white/50'>Call us</span><span className='mt-1 block font-semibold group-hover:text-green-200'>336-407-3745</span></span>
              </a>
              <a href='mailto:greenwireless@gmail.com' className='group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'>
                <Mail aria-hidden='true' className='size-5 shrink-0 text-green-300' />
                <span className='min-w-0'><span className='block text-xs uppercase tracking-wider text-white/50'>Email us</span><span className='mt-1 block break-all text-sm font-semibold group-hover:text-green-200'>greenwireless@gmail.com</span></span>
              </a>
            </address>
          </div>
          <p className='mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/50'>Please contact us before mailing a device so we can provide secure packaging and tracking instructions.</p>
        </div>
      </div>
    </section>
  );
}
