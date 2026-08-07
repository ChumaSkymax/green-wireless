import Link from 'next/link';
import {
    ArrowRight,
    Gamepad,
    Gamepad2,
    HardDrive,
    Laptop,
    Smartphone,
    Tablet,
} from 'lucide-react';

const services = [
    {
        title: 'iPhone Repair',
        description:
            'Screen replacement, battery replacement, charging issues, Face ID repair, motherboard repair and more.',
        icon: Smartphone,
    },
    {
        title: 'iPad Repair',
        description:
            'Display repair, charging problems, touch issues, power failures, diagnostics and board repair.',
        icon: Tablet,
    },
    {
        title: 'MacBook Repair',
        description:
            'Liquid damage, battery replacement, keyboard repair, logic board repair and performance optimization.',
        icon: Laptop,
    },
    {
        title: 'PS5 Repair',
        description:
            'HDMI repair, overheating, no display, power issues, USB repair and diagnostics.',
        icon: Gamepad2,
    },
    {
        title: 'Xbox Repair',
        description:
            'HDMI replacement, power failures, disc drive repair, overheating and board repair.',
        icon: Gamepad,
    },
    {
        title: 'Data Recovery',
        description:
            'Recover valuable files, photos and important documents from damaged devices.',
        icon: HardDrive,
    },
] as const;

export default function FeaturedServices() {
    return (
        <section className='bg-muted/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
            <div className='mx-auto max-w-7xl'>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-green'>
                        Quick Services
                    </p>
                    <h2 className='mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-brand-graphite sm:text-4xl lg:text-5xl'>
                        Expert Repair Services for All Your Devices
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
                        Professional diagnostics and dependable repairs for the technology
                        you rely on every day.
                    </p>
                </div>

                <div className='mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className='group relative flex min-h-64 flex-col items-center rounded-2xl border-2 border-brand-silver bg-white px-6 pb-8 pt-14 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/35 hover:shadow-card-hover sm:px-8'
                            >
                                <div
                                    aria-hidden='true'
                                    className='absolute inset-x-0 top-0 h-5 rounded-t-[14px] bg-brand-silver/60 transition-colors group-hover:bg-brand-green-light'
                                />

                                <div className='absolute -top-5 grid size-14 place-items-center rounded-full border-4 border-muted bg-brand-graphite text-white shadow-md transition-colors group-hover:bg-brand-green'>
                                    <Icon aria-hidden='true' className='size-6' strokeWidth={1.8} />
                                </div>

                                <h3 className='font-heading text-xl font-bold text-brand-graphite sm:text-2xl'>
                                    {service.title}
                                </h3>
                                <p className='mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7'>
                                    {service.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <div className='mt-12 flex justify-center'>
                    <Link
                        href='/service'
                        className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green'
                    >
                        View All Services
                        <ArrowRight aria-hidden='true' className='size-5' />
                    </Link>
                </div>
            </div>
        </section>
    );
}
