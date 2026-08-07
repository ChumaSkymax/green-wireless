import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, GraduationCap } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className='relative w-full flex-1 overflow-hidden bg-background'>
            <div
                aria-hidden='true'
                className='absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(25,117,43,0.13),transparent_65%)]'
            />

            <div className='relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex min-h-[calc(100vh-80px)] w-full flex-col items-center border-x border-dashed border-brand-silver/70 px-4 sm:px-8'>
                    <div className='mt-20 inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green-light px-4 py-2 text-brand-green-dark shadow-sm sm:mt-24 lg:mt-28'>
                        <BadgeCheck aria-hidden='true' className='size-4 text-brand-green' />
                        <p className='text-sm font-semibold'>Trusted Repair Technicians in Winston-Salem</p>
                    </div>

                    <h1 className='mx-auto mt-5 max-w-4xl text-balance text-center font-heading text-4xl font-bold leading-[1.08] tracking-tight text-brand-graphite sm:text-5xl lg:text-6xl xl:text-7xl'>
                        Professional Electronic Device Repair in{' '}
                        <span className='text-brand-green'>Winston-Salem, NC</span>
                    </h1>

                    <p className='mx-auto mt-6 max-w-2xl text-pretty text-center text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8'>
                        Green Wireless Repair provides professional iPhone, iPad, MacBook,
                        PS5 and Xbox repair with careful diagnostics and clear recommendations.
                        Visit our local workshop, use our mail-in service, or explore hands-on
                        electronics repair training.
                    </p>

                    <div className='mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center'>
                        <Link
                            href='/book-repair'
                            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green'
                        >
                            Book a Repair
                            <ArrowUpRight aria-hidden='true' className='size-5' strokeWidth={2} />
                        </Link>

                        <Link
                            href='/training'
                            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-graphite/25 bg-white px-6 py-3 text-base font-semibold text-brand-graphite transition duration-200 hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-green-light hover:text-brand-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green'
                        >
                            <GraduationCap aria-hidden='true' className='size-5' strokeWidth={2} />
                            Explore Training Programs
                        </Link>
                    </div>

                    <div className='mt-12 w-full pb-8 sm:px-4 lg:mt-14'>
                        <div className='mx-auto max-w-6xl rounded-2xl border border-brand-silver bg-white p-2 shadow-card sm:p-3'>
                            <Image
                                className='max-h-64 w-full rounded-xl object-cover object-top sm:max-h-80 lg:max-h-[28rem]'
                                src='/GW-Hero.png'
                                alt='Green Wireless electronic device repair services'
                                width={1100}
                                height={500}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
