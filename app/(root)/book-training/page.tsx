import type { Metadata } from 'next';
import { BookOpenCheck, GraduationCap, Wrench } from 'lucide-react';
import TrainingForm from '@/components/BookingComponents/TrainingForm';

export const metadata: Metadata = {
  title: 'Book Electronics Repair Training in Winston-Salem',
  description:
    'Request hands-on electronics repair training for iPhone, iPad, PS5 or Xbox repair in Winston-Salem, NC. Programs are available for all experience levels.',
  alternates: {
    canonical: '/book-training',
  },
  openGraph: {
    title: 'Book Electronics Repair Training',
    description:
      'Choose a hands-on repair training program that matches your experience and career goals.',
    url: '/book-training',
    images: ['/training-img.png'],
  },
};

const benefits = [
  { icon: Wrench, title: 'Hands-on learning', text: 'Practice with real devices and professional repair tools.' },
  { icon: GraduationCap, title: 'Expert instruction', text: 'Learn practical techniques directly from experienced technicians.' },
  { icon: BookOpenCheck, title: 'Training for every level', text: 'Choose a program that matches your experience and career goals.' },
];

export default function BookTrainingPage() {
  return (
    <main className='overflow-hidden bg-[#f7f9f7]'>
      <section className='relative isolate border-b border-brand-silver/70 px-4 py-14 sm:px-6 lg:px-8'>
        <div aria-hidden='true' className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,117,43,0.16),transparent_42%)]' />
        <div className='mx-auto max-w-7xl'>
          <p className='text-sm font-bold uppercase tracking-[0.18em] text-brand-green'>Build practical repair skills</p>
          <h1 className='mt-4 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl'>Book your <span className='text-brand-green'>training</span></h1>
          <p className='mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>Tell us which repair skills you want to learn. We’ll help you choose the right program and contact you with dates, fees, and availability.</p>
        </div>
      </section>
      <section className='px-4 py-14 sm:px-6 lg:px-8 lg:py-20'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14'>
          <aside className='lg:pt-6'>
            <h2 className='text-2xl font-bold text-brand-graphite'>What to expect</h2>
            <p className='mt-3 leading-7 text-muted-foreground'>A focused learning experience built around practical, in-demand repair skills.</p>
            <div className='mt-8 grid gap-6'>
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className='flex gap-4'>
                  <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-brand-green-light text-brand-green'><Icon aria-hidden='true' className='size-5' /></span>
                  <div><h3 className='text-base font-bold text-brand-graphite'>{title}</h3><p className='mt-1 text-sm leading-6 text-muted-foreground'>{text}</p></div>
                </div>
              ))}
            </div>
          </aside>
          <TrainingForm />
        </div>
      </section>
    </main>
  );
}
