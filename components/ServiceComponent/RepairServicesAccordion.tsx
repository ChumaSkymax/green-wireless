'use client';

import { useState } from 'react';
import { ArrowUpRight, CalendarCheck, Check, ChevronDown, Gamepad, Gamepad2, HardDriveDownload, Laptop, Smartphone, Tablet } from 'lucide-react';
import Link from 'next/link';

const repairServices = [
  {
    key: 'iphone-repair', icon: Smartphone, title: 'iPhone Repair & Diagnostics',
    description: 'We provide professional iPhone repair services for all major models using high-quality replacement parts and advanced diagnostic tools.',
    services: ['Screen replacement', 'Battery replacement', 'Charging port repair', 'Water damage repair', 'Face ID repair', 'Camera repair', 'Speaker and microphone repair', 'Boot loop diagnosis', 'Logic board repair', 'Microsoldering', 'Software troubleshooting', 'Complete device diagnostics'],
    closing: 'Whether your iPhone will not turn on, will not charge, or has motherboard issues, our technicians can accurately diagnose and repair the problem.',
  },
  {
    key: 'ipad-repair', icon: Tablet, title: 'iPad Repair & Diagnostics',
    description: 'Our certified technicians repair all generations of iPads for both hardware and software-related problems.',
    services: ['LCD replacement', 'Touchscreen digitizer replacement', 'Charging port repair', 'Battery replacement', 'Power failure diagnosis', 'Audio repair', 'Camera repair', 'Logic board repair', 'Microsoldering', 'Water damage repair', 'Complete diagnostics'],
    closing: 'We restore your iPad quickly while maintaining the highest repair standards.',
  },
  {
    key: 'macbook-repair', icon: Laptop, title: 'MacBook Repair',
    description: 'Green Wireless Repair offers expert MacBook repair services for personal and business users.',
    services: ['Liquid damage', 'Charging issues', 'Keyboard replacement', 'Trackpad repair', 'Screen replacement', 'Battery replacement', 'SSD upgrades', 'macOS troubleshooting', 'Logic board repair', 'Data recovery', 'Performance optimization'],
    closing: 'Whether your MacBook is running slowly or refuses to power on, we provide professional repair solutions that extend the life of your device.',
  },
  {
    key: 'ps5-repair', icon: Gamepad2, title: 'PS5 Repair & Diagnostics',
    description: 'We specialize in PlayStation 5 repair using professional diagnostic equipment and board-level repair techniques.',
    services: ['HDMI port replacement', 'HDMI encoder repair', 'No display troubleshooting', 'No power repair', 'USB port repair', 'Power supply diagnostics', 'Southbridge diagnosis', 'Overheating repair', 'Fan replacement', 'Board-level repair', 'Complete console diagnostics'],
    closing: 'Our technicians diagnose the root cause before performing repairs to ensure long-lasting results.',
  },
  {
    key: 'xbox-repair', icon: Gamepad, title: 'Xbox Repair & Diagnostics',
    description: 'Our Xbox repair specialists diagnose and repair all common Xbox hardware failures.',
    services: ['HDMI port replacement', 'No power diagnosis', 'Disc drive repair', 'Cooling system repair', 'Overheating issues', 'Power rail diagnostics', 'Board-level repair', 'Logic board troubleshooting', 'Complete diagnostics'],
    closing: 'We help gamers get back to playing with fast, reliable console repairs.',
  },
  {
    key: 'data-recovery', icon: HardDriveDownload, title: 'Professional Data Recovery Services',
    description: 'Lost important files? We provide secure and professional data recovery services for damaged or malfunctioning electronic devices.',
    services: ['Deleted file recovery', 'Phone data recovery', 'MacBook data recovery', 'Water-damaged device recovery', 'Logic board data extraction', 'Storage device recovery'],
    closing: 'We use professional recovery methods to maximize the chances of retrieving your valuable photos, videos, documents, and business data.',
  },
] as const;

export default function RepairServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className='flex flex-col gap-4'>
      {repairServices.map(({ key, icon: Icon, title, description, services, closing }, index) => {
        const isOpen = openIndex === index;
        const triggerId = `service-trigger-${key}`;
        const panelId = `service-panel-${key}`;

        return (
          <article
            key={key}
            data-open={isOpen}
            className='overflow-hidden rounded-2xl border border-brand-silver bg-card shadow-card transition duration-300 data-[open=true]:border-brand-green/60 data-[open=true]:shadow-card-hover'
          >
            <button
              type='button'
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              id={triggerId}
              className='flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6'
            >
              <span
                data-open={isOpen}
                className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-graphite text-white transition-colors duration-200 data-[open=true]:bg-brand-green'
              >
                <Icon className='size-6' aria-hidden='true' strokeWidth={1.8} />
              </span>

              <span className='min-w-0 flex-1'>
                <span className='block font-heading text-lg font-bold text-brand-graphite sm:text-xl'>
                  {title}
                </span>
                <span className='mt-1.5 hidden max-w-3xl text-sm leading-6 text-muted-foreground sm:block'>
                  {description}
                </span>
              </span>

              <div className='flex items-center justify-center'>
                <span className="flex items-center justify-center gap-2 rounded-md bg-brand-silver/50 py-1 px-3 transition-colors duration-200 data-[open=true]:bg-brand-green-light'">
                  Learn More
                  <ChevronDown
                    aria-hidden='true'
                    className={`size-5 shrink-0 text-muted-foreground transition duration-300 ${isOpen ? 'rotate-180 text-brand-green' : ''}`}
                  />
                </span>

              </div>


            </button>

            <div
              id={panelId}
              role='region'
              aria-labelledby={triggerId}
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className='overflow-hidden'>
                <div className='border-t border-brand-silver/70 px-5 pb-6 pt-5 sm:ml-[5.25rem] sm:px-6 sm:pb-7 sm:pt-6'>
                  <p className='text-sm leading-6 text-muted-foreground sm:hidden'>
                    {description}
                  </p>
                  <p className='mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green sm:mt-0'>
                    Services include
                  </p>
                  <ul className='mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service) => (
                      <li key={service} className='flex items-start gap-2.5 text-sm font-medium leading-6 text-brand-graphite'>
                        <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-green-light text-brand-green'>
                          <Check aria-hidden='true' className='size-3.5' strokeWidth={3} />
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <p className='mt-6 rounded-xl border border-brand-green/15 bg-brand-green-light px-4 py-3 text-sm leading-6 text-brand-green-dark sm:text-base sm:leading-7'>
                    {closing}
                  </p>

                  <Link
                    href='/book-repair'
                    className='group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:text-base'
                  >
                    <CalendarCheck aria-hidden='true' className='size-5' />
                    Book a Repair
                    <ArrowUpRight
                      aria-hidden='true'
                      className='size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
