import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, Check, GraduationCap } from 'lucide-react';
import TrainingAccordion from '../../../components/TrainingComponent/TrainingAccordion';

export const metadata: Metadata = {
  title: 'Electronics Repair Training in Winston-Salem',
  description:
    'Get hands-on iPhone, iPad, PS5, Xbox, microsoldering and board-level electronics repair training in Winston-Salem, NC.',
  alternates: {
    canonical: '/training',
  },
  openGraph: {
    title: 'Hands-On Electronics Repair Training',
    description:
      'Build practical repair skills with professional tools, real devices and expert instruction from Green Wireless.',
    url: '/training',
    images: ['/training-img.png'],
  },
};

const practicalTraining = ['Real customer devices', 'Professional repair tools', 'Industry-standard diagnostic equipment', 'Microsoldering stations', 'Board-level repair techniques', 'One-on-one practical instruction'] as const;

export default function TrainingPage() {
  return (
    <main className='overflow-hidden bg-background'>
      <section className='relative isolate border-b border-brand-silver/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
        <div aria-hidden='true' className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,117,43,0.14),transparent_38%)]' />
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-4xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green-light px-4 py-2 text-sm font-semibold text-brand-green-dark'>
              <BadgeCheck aria-hidden='true' className='size-4 text-brand-green' />
              Professional electronics repair training
            </div>
            <h1 className='mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl'>
              Build a Career in <span className='text-brand-green'>Electronic Device Repair</span>
            </h1>
            <p className='mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8'>
              Whether you are starting a new career, expanding your repair business, or becoming a professional microsoldering technician, our comprehensive hands-on programs prepare you for today&apos;s electronics repair industry.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 grid gap-8 rounded-2xl border border-brand-silver bg-brand-green-light/55 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.14em] text-brand-green'>Practical learning, not just theory</p>
              <h2 className='mt-3 font-heading text-2xl font-bold leading-tight text-brand-graphite sm:text-3xl'>Train with the tools and devices professionals use every day.</h2>
              <p className='mt-4 text-sm leading-7 text-muted-foreground sm:text-base'>Graduate with the confidence, technical knowledge, and real-world experience needed to succeed as a professional repair technician.</p>
            </div>
            <ul className='grid gap-3 sm:grid-cols-2'>
              {practicalTraining.map((item) => (
                <li key={item} className='flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium leading-6 text-brand-graphite shadow-sm'>
                  <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-green text-white'>
                    <Check aria-hidden='true' className='size-3.5' strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-8 max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.14em] text-brand-green'>Explore our programs</p>
            <h2 className='mt-3 font-heading text-3xl font-bold text-brand-graphite sm:text-4xl'>Hands-on training for in-demand repairs</h2>
          </div>

          <TrainingAccordion />

          <div className='mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-graphite px-6 py-7 sm:flex-row sm:items-center sm:px-8'>
            <div>
              <h2 className='font-heading text-xl font-bold text-white sm:text-2xl'>Ready to build your repair career?</h2>
              <p className='mt-2 text-sm leading-6 text-white/65 sm:text-base'>Talk to us about the right training program for your goals and experience level.</p>
            </div>
            <Link href='/book-training' className='inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
              <GraduationCap aria-hidden='true' className='size-5' />
              Book Training
              <ArrowUpRight aria-hidden='true' className='size-5' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
