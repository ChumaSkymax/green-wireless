import type { Metadata } from 'next';
import { CalendarCheck, Clock3, ShieldCheck } from 'lucide-react';
import DiagnosisForm from '@/components/BookingComponents/DiagnosisForm';

export const metadata: Metadata = {
  title: 'Book an Electronic Device Repair in Winston-Salem',
  description:
    'Request professional iPhone, iPad, MacBook, PS5 or Xbox repair in Winston-Salem. Choose a workshop visit or secure mail-in repair service.',
  alternates: {
    canonical: '/book-repair',
  },
  openGraph: {
    title: 'Book a Repair with Green Wireless',
    description:
      'Start your device repair request and choose workshop drop-off or mail-in service.',
    url: '/book-repair',
    images: ['/GW-Hero.png'],
  },
};

const benefits = [
  { icon: Clock3, title: 'Quick assessment', text: 'We inspect your device and identify the likely cause.' },
  { icon: ShieldCheck, title: 'Clear recommendation', text: 'You receive an honest explanation before any repair begins.' },
  { icon: CalendarCheck, title: 'Easy scheduling', text: 'Choose a preferred date and we will confirm your appointment.' },
];

export default function BookDiagnosisPage() {
  return (
    <main className='overflow-hidden bg-[#f7f9f7]'>
      <section className='relative isolate border-b border-brand-silver/70 px-4 py-14 sm:px-6 sm:py-18 lg:px-8'>
        <div aria-hidden='true' className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,117,43,0.16),transparent_42%)]' />
        <div className='mx-auto max-w-7xl'>
          <p className='text-sm font-bold uppercase tracking-[0.18em] text-brand-green'>Device care starts here</p>
          <h1 className='mt-4 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl'>Book a <span className='text-brand-green'>repair</span></h1>
          <p className='mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>Tell us about your device and the problem you are experiencing. We will follow up to confirm a convenient appointment.</p>
        </div>
      </section>
      <section className='px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14'>
          <aside className='lg:pt-6'>
            <h2 className='text-2xl font-bold text-brand-graphite'>What to expect</h2>
            <p className='mt-3 leading-7 text-muted-foreground'>A simple first step toward getting your device working properly again.</p>
            <div className='mt-8 grid gap-6'>
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className='flex gap-4'>
                  <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-brand-green-light text-brand-green'><Icon aria-hidden='true' className='size-5' /></span>
                  <div><h3 className='text-base font-bold text-brand-graphite'>{title}</h3><p className='mt-1 text-sm leading-6 text-muted-foreground'>{text}</p></div>
                </div>
              ))}
            </div>
          </aside>
          <DiagnosisForm />
        </div>
      </section>
    </main>
  );
}
