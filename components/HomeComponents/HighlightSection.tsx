import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Wrench } from 'lucide-react';

const highlights = [
    {
        eyebrow: 'Expert device care',
        title: 'Trusted Electronics Repair Experts',
        description:
            'Dedicated to providing professional repair solutions for smartphones, tablets, laptops, gaming consoles, and other electronic devices.',
        href: '/service',
        cta: 'Explore Repairs',
        image: '/repair-console.jpeg',
        imageAlt: 'A gaming console being professionally repaired',
        icon: Wrench,
    },
    {
        eyebrow: 'Learn practical skills',
        title: 'Repair Training Programs',
        description:
            'Build hands-on electronics repair skills with guidance from experienced technicians.',
        href: '/training',
        cta: 'View Programs',
        image: '/training-img.png',
        imageAlt: 'Green Wireless electronics repair training session',
        icon: GraduationCap,
    },
] as const;

export default function HighlightSection() {
    return (
        <section className='bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
            <div className='mx-auto max-w-7xl'>
                <div className='mb-8 max-w-2xl'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-green'>
                        Repair. Learn. Grow.
                    </p>
                    <h2 className='mt-2 font-heading text-3xl font-bold tracking-tight text-brand-graphite sm:text-4xl'>
                        Services designed around you
                    </h2>
                </div>

                <div className='grid gap-5 lg:grid-cols-2'>
                    {highlights.map((highlight) => {
                        const Icon = highlight.icon;

                        return (
                            <article
                                key={highlight.title}
                                className='group relative isolate min-h-80 overflow-hidden rounded-2xl border border-brand-silver bg-brand-graphite shadow-card sm:min-h-96'
                            >
                                <Image
                                    src={highlight.image}
                                    alt={highlight.imageAlt}
                                    fill
                                    sizes='(min-width: 1024px) 50vw, 100vw'
                                    className='-z-20 object-cover object-center transition duration-700 group-hover:scale-105'
                                />

                                <div
                                    aria-hidden='true'
                                    className='absolute inset-0 -z-10 bg-gradient-to-r from-brand-graphite via-brand-graphite/85 to-brand-graphite/10 sm:via-brand-graphite/70'
                                />

                                <div className='flex min-h-80 max-w-md flex-col items-start justify-center p-7 sm:min-h-96 sm:p-10'>
                                    <div className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white backdrop-blur-sm'>
                                        <Icon aria-hidden='true' className='size-4 text-green-300' />
                                        <span className='text-xs font-semibold uppercase tracking-[0.12em]'>
                                            {highlight.eyebrow}
                                        </span>
                                    </div>

                                    <h3 className='mt-5 text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-4xl'>
                                        {highlight.title}
                                    </h3>

                                    <p className='mt-3 max-w-sm text-sm leading-6 text-white/80 sm:text-base sm:leading-7'>
                                        {highlight.description}
                                    </p>

                                    <Link
                                        href={highlight.href}
                                        className='mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                                    >
                                        {highlight.cta}
                                        <ArrowUpRight aria-hidden='true' className='size-4' />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
