import Link from 'next/link';
import {
  ArrowRight,
  ClipboardList,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Start Your Repair Request',
    description: 'Tell us about your device and the problem. We’ll review your request and send you shipping instructions.',
  },
  {
    icon: PackageCheck,
    title: 'Mail Your Device',
    description: 'Package your device carefully and send it to us using the instructions provided and a trackable service.',
  },
  {
    icon: SearchCheck,
    title: 'We Diagnose Your Device',
    description: 'Our technicians perform a complete inspection to identify the problem and the repair required.',
  },
  {
    icon: ShieldCheck,
    title: 'Approve Your Repair',
    description: 'We’ll share the diagnosis and repair cost. No repair begins until you approve the service.',
  },
  {
    icon: Wrench,
    title: 'We Repair & Test It',
    description: 'After approval, we complete the repair and thoroughly test your device before it leaves our workshop.',
  },
  {
    icon: Truck,
    title: 'We Ship It Back',
    description: 'Your repaired device is securely packaged and shipped back to you with tracking information.',
  },
] as const;

export default function MailInRepair() {
  return (
    <section className='relative isolate overflow-hidden bg-[#f7f9f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div aria-hidden='true' className='absolute -right-28 top-20 -z-10 size-96 rounded-full bg-brand-green/10 blur-3xl' />
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-8 border-b border-brand-silver pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green-light px-4 py-2 text-sm font-semibold text-brand-green-dark'>
              <Truck aria-hidden='true' className='size-4' />
              Nationwide mail-in service
            </span>
            <h2 className='mt-5 max-w-3xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-brand-graphite sm:text-4xl lg:text-5xl'>
              Can’t visit us? <span className='text-brand-green'>Mail your device for repair.</span>
            </h2>
          </div>
          <p className='max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end'>
            Get professional device repair from wherever you are. Send us your iPhone, iPad, MacBook, PS5, Xbox, or other supported device, and we’ll diagnose, repair, test, and ship it back to you.
          </p>
        </div>

        <div className='mt-10 flex items-end justify-between gap-6'>
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.16em] text-brand-green'>Simple and secure</p>
            <h3 className='mt-2 text-2xl font-bold text-brand-graphite sm:text-3xl'>How mail-in repair works</h3>
          </div>
          <span className='hidden text-sm font-semibold text-muted-foreground sm:block'>Six easy steps</span>
        </div>

        <ol className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className='group relative overflow-hidden rounded-2xl border border-brand-silver/80 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-card-hover'>
              <div className='flex items-center justify-between'>
                <span className='grid size-11 place-items-center rounded-xl bg-brand-green-light text-brand-green'><Icon aria-hidden='true' className='size-5' /></span>
                <span className='font-heading text-4xl font-bold text-brand-green/10'>0{index + 1}</span>
              </div>
              <h4 className='mt-5 text-lg font-bold text-brand-graphite'>{title}</h4>
              <p className='mt-2 text-sm leading-6 text-muted-foreground'>{description}</p>
            </li>
          ))}
        </ol>

        <div className='mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-graphite px-6 py-7 sm:flex-row sm:items-center sm:px-8'>
          <div>
            <h3 className='text-xl font-bold text-white sm:text-2xl'>Ready to send in your device?</h3>
            <p className='mt-2 text-sm leading-6 text-white/65'>Start your request first—we’ll send shipping instructions after reviewing it.</p>
          </div>
          <Link href='/book-repair' className='inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
            Start a Mail-In Repair
            <ArrowRight aria-hidden='true' className='size-5' />
          </Link>
        </div>
      </div>
    </section>
  );
}
