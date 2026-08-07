import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
] as const;

const serviceLinks = [
  { label: 'Repair Services', href: '/service' },
  { label: 'Book a Repair', href: '/book-repair' },
  { label: 'Mail-In Repair', href: '/book-repair' },
  { label: 'Repair Training', href: '/training' },
  { label: 'Book Training', href: '/book-training' },
] as const;

export default function Footer() {
  return (
    <footer className='relative isolate overflow-hidden bg-brand-graphite text-white'>
      <div aria-hidden='true' className='absolute -right-32 -top-36 -z-10 size-96 rounded-full bg-brand-green/25 blur-3xl' />
      <div aria-hidden='true' className='absolute -bottom-48 left-1/4 -z-10 size-80 rounded-full bg-brand-green/10 blur-3xl' />

      <div className='border-b border-white/10 px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-8'>
          <div>
            <div className='flex items-center gap-2 text-sm font-semibold text-green-300'><ShieldCheck aria-hidden='true' className='size-5' />Trusted device repair specialists</div>
            <h2 className='mt-3 text-2xl font-bold sm:text-3xl'>Ready to get your device working again?</h2>
            <p className='mt-2 max-w-2xl text-sm leading-6 text-white/60'>Visit our Winston-Salem workshop or start a secure mail-in repair request.</p>
          </div>
          <Link href='/book-repair' className='inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>Book a Repair<ArrowUpRight aria-hidden='true' className='size-5' /></Link>
        </div>
      </div>

      <div className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_0.8fr_1.2fr] lg:gap-12'>
          <div>
            <Link href='/' className='inline-flex items-center rounded-xl bg-white px-3 py-1.5' aria-label='Green Wireless home'>
              <Image src='/green-logo.png' alt='Green Wireless Repair' width={1536} height={1024} sizes='128px' className='h-auto w-28 scale-110 object-contain' />
            </Link>
            <p className='mt-5 max-w-sm text-sm leading-7 text-white/60'>Professional electronic device repair, advanced diagnostics, secure mail-in service and hands-on repair training in Winston-Salem, North Carolina.</p>
          </div>

          <nav aria-label='Company links'>
            <h2 className='text-sm font-bold uppercase tracking-[0.16em] text-green-300'>Company</h2>
            <ul className='mt-5 grid gap-3'>{companyLinks.map((link) => (<li key={link.href}><Link href={link.href} className='text-sm text-white/65 transition hover:text-white'>{link.label}</Link></li>))}</ul>
          </nav>

          <nav aria-label='Service links'>
            <h2 className='text-sm font-bold uppercase tracking-[0.16em] text-green-300'>Services</h2>
            <ul className='mt-5 grid gap-3'>{serviceLinks.map((link) => (<li key={link.label}><Link href={link.href} className='text-sm text-white/65 transition hover:text-white'>{link.label}</Link></li>))}</ul>
          </nav>

          <div>
            <h2 className='text-sm font-bold uppercase tracking-[0.16em] text-green-300'>Visit or contact us</h2>
            <address className='mt-5 grid gap-4 not-italic'>
              <a href='tel:+13364073745' className='flex items-start gap-3 text-sm text-white/65 transition hover:text-white'><Phone aria-hidden='true' className='mt-0.5 size-4 shrink-0 text-green-300' />336-407-3745</a>
              <a href='mailto:greenwireless@gmail.com' className='flex min-w-0 items-start gap-3 text-sm text-white/65 transition hover:text-white'><Mail aria-hidden='true' className='mt-0.5 size-4 shrink-0 text-green-300' /><span className='break-all'>greenwireless@gmail.com</span></a>
              <a href='https://www.google.com/maps/search/?api=1&query=3029+Waughtown+St+194+Winston-Salem+NC+27107' target='_blank' rel='noreferrer' className='flex items-start gap-3 text-sm leading-6 text-white/65 transition hover:text-white'><MapPin aria-hidden='true' className='mt-0.5 size-4 shrink-0 text-green-300' /><span>3029 Waughtown St, 194<br />Winston-Salem, NC 27107</span></a>
            </address>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10 px-4 py-5 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between'>
          <p>&copy; {new Date().getFullYear()} Green Wireless Repair. All rights reserved.</p>
          <p>Electronic device repair &amp; training in Winston-Salem, NC.</p>
        </div>
      </div>
    </footer>
  );
}