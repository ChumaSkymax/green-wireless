'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
    { label: 'Training', href: '/training' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
] as const;

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => setMobileOpen(false);

    return (
        <header className='sticky top-0 z-50 w-full border-b border-brand-silver/60 bg-white/95 backdrop-blur'>
            <nav
                aria-label='Main navigation'
                className='mx-auto flex min-h-[4.75rem] w-full max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8'
            >
                <Link
                    href='/'
                    onNavigate={closeMenu}
                    className='flex shrink-0 items-center gap-2.5 text-brand-graphite'
                    aria-label='Green Wireless home'
                >
                    <span className='flex h-14 w-28 items-center overflow-hidden sm:w-32'>
                        <Image
                            src='/green-logo.png'
                            alt='Green Wireless Repair'
                            width={1536}
                            height={1024}
                            sizes='(max-width: 640px) 112px, 128px'
                            className='h-auto w-full scale-125 object-contain'
                            priority
                        />
                    </span>
                </Link>

                <div className='hidden items-center gap-1 rounded-full border border-brand-silver/70 bg-[#f7f9f7] p-1 md:flex'>
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className='rounded-full px-4 py-2 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-white hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green'
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href='/book-repair'
                    className='hidden min-h-11 items-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green md:inline-flex'
                >
                    Book a Repair
                </Link>

                <button
                    type='button'
                    aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileOpen}
                    aria-controls='mobile-navigation'
                    onClick={() => setMobileOpen((open) => !open)}
                    className='grid size-11 place-items-center rounded-xl border border-brand-green/20 bg-brand-green-light text-brand-green transition-colors hover:bg-brand-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green md:hidden'
                >
                    {mobileOpen ? (
                        <svg aria-hidden='true' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                            <path d='M18 6 6 18' />
                            <path d='m6 6 12 12' />
                        </svg>
                    ) : (
                        <svg aria-hidden='true' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                            <path d='M4 6h16' />
                            <path d='M4 12h16' />
                            <path d='M4 18h16' />
                        </svg>
                    )}
                </button>
            </nav>

            <div
                id='mobile-navigation'
                className={`${mobileOpen ? 'grid' : 'hidden'} border-t border-brand-silver/60 bg-white px-4 py-5 shadow-card md:hidden`}
            >
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onNavigate={closeMenu}
                        className='rounded-xl px-4 py-3 font-semibold text-brand-charcoal transition-colors hover:bg-brand-green-light hover:text-brand-green-dark'
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href='/book-repair'
                    onNavigate={closeMenu}
                    className='mt-3 rounded-full bg-brand-green px-5 py-3 text-center font-semibold text-white shadow-card transition-colors hover:bg-brand-green-dark'
                >
                    Book a Repair
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
