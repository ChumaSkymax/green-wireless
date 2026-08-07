import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowUpRight,
    BadgeCheck,
    Check,
    CircuitBoard,
    GraduationCap,
    Microscope,
    SearchCheck,
    ShieldCheck,
    Smartphone,
    Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Green Wireless Repair in Winston-Salem',
  description:
    'Meet Green Wireless Repair, providing professional electronic device diagnostics, dependable repairs and hands-on technician training in Winston-Salem, NC.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Green Wireless Repair',
    description:
      'Learn about our professional repair services, experienced technicians and hands-on electronics training.',
    url: '/about',
    images: ['/repair-console.jpeg'],
  },
};

const values = [
    {
        title: 'Precise Diagnostics',
        description: 'We identify the real cause before recommending the right repair.',
        icon: SearchCheck,
    },
    {
        title: 'Expert Repairs',
        description: 'Experienced technicians use professional tools and proven methods.',
        icon: Wrench,
    },
    {
        title: 'Trusted Service',
        description: 'Clear communication and careful workmanship at every stage.',
        icon: ShieldCheck,
    },
] as const;

const programs = [
    'iPhone Repair',
    'iPad Repair',
    'PS5 Repair',
    'Xbox Repair',
    'Microsoldering',
    'Board-Level Repair',
] as const;

export default function AboutPage() {
    return (
        <main className='overflow-hidden bg-background'>
            <section className='relative isolate border-b border-brand-silver/70 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28'>
                <div
                    aria-hidden='true'
                    className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(25,117,43,0.14),transparent_35%)]'
                />
                <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20'>
                    <div>
                        <div className='inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green-light px-4 py-2 text-sm font-semibold text-brand-green-dark'>
                            <BadgeCheck aria-hidden='true' className='size-4 text-brand-green' />
                            About Green Wireless Repair
                        </div>

                        <h1 className='mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl'>
                            Your Trusted Electronics{' '}
                            <span className='text-brand-green'>Repair Experts</span>
                        </h1>

                        <div className='mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8'>
                            <p>
                                Green Wireless Repair is dedicated to providing professional
                                repair solutions for smartphones, tablets, laptops, gaming
                                consoles, and other electronic devices.
                            </p>
                            <p>
                                Whether your device has physical damage, charging problems,
                                software issues, or motherboard failures, our experienced
                                technicians are equipped to diagnose and repair it with precision.
                            </p>
                        </div>

                        <Link
                            href='/service'
                            className='mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green'
                        >
                            Learn More
                            <ArrowUpRight aria-hidden='true' className='size-5' />
                        </Link>
                    </div>

                    <div className='relative mx-auto w-full max-w-xl lg:max-w-none'>
                        <div className='absolute -left-5 -top-5 -z-10 size-32 rounded-3xl bg-brand-green-light' />
                        <div className='overflow-hidden rounded-3xl border border-brand-silver bg-white p-2 shadow-card-hover sm:p-3'>
                            <Image
                                src='/repair-console.jpeg'
                                alt='Green Wireless technician repairing an electronic device'
                                width={900}
                                height={680}
                                priority
                                className='aspect-[4/3] w-full rounded-2xl object-cover'
                            />
                        </div>
                        <div className='absolute -bottom-6 left-5 right-5 flex items-center gap-4 rounded-2xl border border-brand-silver bg-white p-4 shadow-card sm:left-auto sm:right-6 sm:max-w-xs'>
                            <div className='grid size-12 shrink-0 place-items-center rounded-xl bg-brand-green text-white'>
                                <CircuitBoard aria-hidden='true' className='size-6' />
                            </div>
                            <div>
                                <p className='font-heading font-bold text-brand-graphite'>Advanced repair care</p>
                                <p className='mt-1 text-sm text-muted-foreground'>From screens to board-level faults</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 py-20 sm:px-6 lg:px-8 lg:py-24'>
                <div className='mx-auto max-w-7xl'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-green'>
                            Why choose us
                        </p>
                        <h2 className='mt-3 text-balance font-heading text-3xl font-bold text-brand-graphite sm:text-4xl'>
                            Professional care at every step
                        </h2>
                    </div>

                    <div className='mt-12 grid gap-5 md:grid-cols-3'>
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article
                                    key={value.title}
                                    className='rounded-2xl border border-brand-silver bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-card-hover sm:p-8'
                                >
                                    <div className='grid size-12 place-items-center rounded-xl bg-brand-green-light text-brand-green'>
                                        <Icon aria-hidden='true' className='size-6' />
                                    </div>
                                    <h3 className='mt-5 font-heading text-xl font-bold text-brand-graphite'>
                                        {value.title}
                                    </h3>
                                    <p className='mt-3 text-sm leading-6 text-muted-foreground sm:text-base'>
                                        {value.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div className='mt-14 rounded-2xl border border-brand-green/15 bg-brand-green-light p-6 sm:p-8'>
                        <div className='flex flex-col gap-5 sm:flex-row sm:items-center'>
                            <div className='grid size-12 shrink-0 place-items-center rounded-xl bg-brand-green text-white'>
                                <GraduationCap aria-hidden='true' className='size-6' />
                            </div>
                            <p className='max-w-4xl text-base leading-7 text-brand-green-dark sm:text-lg sm:leading-8'>
                                Beyond repairs, we empower the next generation of technicians
                                through comprehensive hands-on electronics repair training
                                programs designed to build real-world skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28'>
                <div className='relative isolate mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-brand-graphite lg:grid-cols-2'>
                    <div
                        aria-hidden='true'
                        className='absolute -left-32 -top-32 -z-10 size-96 rounded-full bg-brand-green/25 blur-3xl'
                    />

                    <div className='flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-14 lg:py-16'>
                        <div className='inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-green-200'>
                            <Microscope aria-hidden='true' className='size-4' />
                            Training Highlight
                        </div>

                        <h2 className='mt-6 text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
                            Become a Professional Electronics Repair Technician
                        </h2>

                        <p className='mt-5 text-lg font-semibold text-green-200'>
                            Looking to start a career in electronics repair?
                        </p>
                        <p className='mt-3 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8'>
                            Our practical training programs teach students how to diagnose and
                            repair today&apos;s most common electronic devices using professional
                            equipment, real customer devices, and industry-standard repair methods.
                        </p>

                        <Link
                            href='/training'
                            className='mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                        >
                            Explore Training
                            <ArrowUpRight aria-hidden='true' className='size-5' />
                        </Link>
                    </div>

                    <div className='relative min-h-[32rem] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0'>
                        <Image
                            src='/training-img.png'
                            alt='Hands-on electronics repair training at Green Wireless'
                            fill
                            sizes='(min-width: 1024px) 50vw, 100vw'
                            className='object-cover'
                        />
                        <div aria-hidden='true' className='absolute inset-0 bg-gradient-to-t from-brand-graphite/85 via-transparent to-transparent' />

                        <div className='absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-brand-graphite/30 p-5 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-6'>
                            <p className='flex items-center gap-2 font-heading text-lg font-bold text-white'>
                                <Smartphone aria-hidden='true' className='size-5 text-green-300' />
                                Programs include
                            </p>
                            <ul className='mt-4 grid gap-3 sm:grid-cols-2'>
                                {programs.map((program) => (
                                    <li key={program} className='flex items-center gap-2 text-sm font-medium text-white/85'>
                                        <span className='grid size-5 shrink-0 place-items-center rounded-full bg-brand-green text-white'>
                                            <Check aria-hidden='true' className='size-3.5' strokeWidth={3} />
                                        </span>
                                        {program}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
