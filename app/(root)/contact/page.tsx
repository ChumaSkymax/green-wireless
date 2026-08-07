import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone, Wrench } from 'lucide-react';
import ContactForm from '@/components/ContactComponents/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Green Wireless Repair in Winston-Salem',
  description:
    'Contact Green Wireless Repair in Winston-Salem, NC for device repair, mail-in service and electronics repair training. Call 336-407-3745.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Green Wireless Repair',
    description:
      'Call, email or visit Green Wireless Repair for device repair and electronics training in Winston-Salem, NC.',
    url: '/contact',
    images: ['/GW-Hero.png'],
  },
};

const contactDetails = [
  { icon: Phone, label: 'Call us', value: '336-407-3745', href: 'tel:+13364073745' },
  { icon: Mail, label: 'Email us', value: 'greenwireless@gmail.com', href: 'mailto:greenwireless@gmail.com' },
  { icon: MapPin, label: 'Visit our workshop', value: '3029 Waughtown St, 194\nWinston-Salem, NC 27107', href: 'https://www.google.com/maps/search/?api=1&query=3029+Waughtown+St+194+Winston-Salem+NC+27107' },
] as const;

export default function ContactPage() {
  return (
    <main className='overflow-hidden bg-[#f7f9f7]'>
      <section className='relative isolate border-b border-brand-silver/70 px-4 py-14 sm:px-6 sm:py-18 lg:px-8'>
        <div aria-hidden='true' className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,117,43,0.16),transparent_42%)]' />
        <div className='mx-auto max-w-7xl'>
          <p className='text-sm font-bold uppercase tracking-[0.18em] text-brand-green'>We’re here to help</p>
          <h1 className='mt-4 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl'>Get in touch with <span className='text-brand-green'>Green Wireless</span></h1>
          <p className='mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>Have a question about a repair, mail-in service, or training program? Call, email, visit our workshop, or send us a message.</p>
        </div>
      </section>

      <section className='px-4 py-14 sm:px-6 lg:px-8 lg:py-20'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14'>
          <aside>
            <h2 className='text-2xl font-bold text-brand-graphite'>Contact information</h2>
            <p className='mt-3 leading-7 text-muted-foreground'>Reach our team using whichever option is most convenient for you.</p>
            <div className='mt-8 grid gap-4'>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className='group flex gap-4 rounded-2xl border border-brand-silver/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/30 hover:shadow-card'>
                  <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-brand-green-light text-brand-green'><Icon aria-hidden='true' className='size-5' /></span>
                  <span className='min-w-0'><span className='block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground'>{label}</span><span className='mt-1 block whitespace-pre-line break-words text-sm font-semibold leading-6 text-brand-graphite group-hover:text-brand-green'>{value}</span></span>
                </a>
              ))}
            </div>
            <div className='mt-6 rounded-2xl bg-brand-graphite p-6 text-white'>
              <Wrench aria-hidden='true' className='size-6 text-green-300' />
              <h2 className='mt-4 text-xl font-bold'>Ready to repair your device?</h2>
              <p className='mt-2 text-sm leading-6 text-white/65'>Start a repair request and choose a workshop visit or mail-in service.</p>
              <Link href='/book-repair' className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-300 transition hover:text-white'>Book a Repair<ArrowUpRight aria-hidden='true' className='size-4' /></Link>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
