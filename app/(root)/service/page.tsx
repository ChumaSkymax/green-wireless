import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import RepairServicesAccordion from '../../../components/ServiceComponent/RepairServicesAccordion';

export const metadata: Metadata = {
  title: 'Phone, MacBook & Game Console Repair in Winston-Salem',
  description:
    'Professional iPhone, iPad, MacBook, PS5 and Xbox repair in Winston-Salem, NC. Get expert diagnostics and dependable device repairs.',
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: 'Electronic Device Repair in Winston-Salem',
    description:
      'Expert phone, tablet, MacBook and game console repair from Green Wireless.',
    url: '/service',
    images: ['/GW-Hero.png'],
  },
};

export default function ServicesPage() {
  return (
    <main className='overflow-hidden bg-background'>
      <section className='relative isolate border-b border-brand-silver/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
        <div
          aria-hidden='true'
          className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,117,43,0.14),transparent_38%)]'
        />
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-4xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green-light px-4 py-2 text-sm font-semibold text-brand-green-dark'>
              <BadgeCheck aria-hidden='true' className='size-4 text-brand-green' />
              Professional diagnostics and repair
            </div>
            <h1 className='mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl'>
              Our Repair <span className='text-brand-green'>Services</span>
            </h1>
            <p className='mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8'>
              Select a device below to explore our complete repair capabilities.
              Every service begins with careful diagnostics so we can identify
              the root cause and recommend the right solution.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-7xl'>
          <RepairServicesAccordion />

          <div className='mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-graphite px-6 py-7 sm:flex-row sm:items-center sm:px-8'>
            <div>
              <h2 className='font-heading text-xl font-bold text-white sm:text-2xl'>
                Not sure what is wrong with your device?
              </h2>
              <p className='mt-2 text-sm leading-6 text-white/65 sm:text-base'>
                Bring it in for professional diagnostics and a clear repair recommendation.
              </p>
            </div>
            <Link
              href='/book-repair'
              className='inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Book a Repair
              <ArrowUpRight aria-hidden='true' className='size-5' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
