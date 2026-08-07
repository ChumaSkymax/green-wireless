import Link from 'next/link';
import { ArrowUpRight, GraduationCap, ShieldCheck, Wrench } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className='bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-graphite px-6 py-12 shadow-card-hover sm:px-10 sm:py-14 lg:px-16 lg:py-16'>
        <div
          aria-hidden='true'
          className='absolute -right-24 -top-32 -z-10 size-96 rounded-full bg-brand-green/35 blur-3xl'
        />
        <div
          aria-hidden='true'
          className='absolute -bottom-40 left-1/4 -z-10 size-80 rounded-full bg-brand-green/20 blur-3xl'
        />
        <div
          aria-hidden='true'
          className='absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]'
        />

        <div className='grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-green-200 backdrop-blur-sm'>
              <ShieldCheck aria-hidden='true' className='size-4' />
              Trusted repair specialists
            </div>

            <h2 className='mt-5 text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl'>
              Ready to bring your device back to life?
            </h2>

            <p className='mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8'>
              Get expert diagnostics, transparent service, and dependable repairs
              from technicians who care about getting it right.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/book-repair'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                <Wrench aria-hidden='true' className='size-5' />
                Book a Repair
                <ArrowUpRight aria-hidden='true' className='size-5' />
              </Link>

              <Link
                href='/training'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                <GraduationCap aria-hidden='true' className='size-5' />
                Explore Training
              </Link>
            </div>
          </div>

          <div className='hidden size-48 place-items-center rounded-full border border-white/15 bg-white/10 text-green-200 shadow-2xl backdrop-blur-sm lg:grid'>
            <div className='grid size-32 place-items-center rounded-full border border-green-300/30 bg-brand-green/25'>
              <Wrench aria-hidden='true' className='size-14' strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
