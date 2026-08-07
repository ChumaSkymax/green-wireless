'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, ChevronDown, Gamepad, Gamepad2, GraduationCap, Smartphone, Tablet } from 'lucide-react';

const trainingPrograms = [
  { key: 'iphone', icon: Smartphone, title: 'iPhone Repair & Diagnostics Training', description: 'Learn how to professionally diagnose and repair iPhones, from basic repairs to advanced motherboard troubleshooting.', topics: ['Complete device diagnostics', 'Charging issues', 'Battery replacement', 'Screen replacement', 'Display troubleshooting', 'Boot loop diagnosis', 'Water damage repair', 'Face ID troubleshooting', 'Camera repairs', 'Logic board diagnostics', 'Microsoldering fundamentals', 'Board-level repair', 'Data recovery basics'] },
  { key: 'ipad', icon: Tablet, title: 'iPad Repair & Diagnostics Training', description: 'Master professional iPad repair techniques through guided, hands-on practical training.', topics: ['LCD replacement', 'Digitizer replacement', 'Charging issues', 'Touchscreen problems', 'Power failures', 'Audio troubleshooting', 'Logic board repair', 'Microsoldering techniques'] },
  { key: 'ps5', icon: Gamepad2, title: 'PS5 Repair & Diagnostics Training', description: 'Develop the skills needed to repair modern gaming consoles using advanced diagnostic methods.', topics: ['HDMI port replacement', 'HDMI encoder diagnostics', 'No display troubleshooting', 'Power supply diagnostics', 'USB port repair', 'Southbridge diagnosis', 'Cooling system repair', 'Overheating solutions', 'Board-level troubleshooting'] },
  { key: 'xbox', icon: Gamepad, title: 'Xbox Repair & Diagnostics Training', description: 'Become proficient in Xbox console diagnostics and repair through practical instruction.', topics: ['HDMI port replacement', 'No power diagnosis', 'Board-level repair', 'Disc drive troubleshooting', 'Power rail diagnostics', 'Overheating repairs', 'Complete console diagnostics'] },
] as const;

export default function TrainingAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className='flex flex-col gap-4'>
      {trainingPrograms.map(({ key, icon: Icon, title, description, topics }, index) => {
        const isOpen = openIndex === index;
        const triggerId = `training-trigger-${key}`;
        const panelId = `training-panel-${key}`;

        return (
          <article key={key} data-open={isOpen} className='overflow-hidden rounded-2xl border border-brand-silver bg-card shadow-card transition duration-300 data-[open=true]:border-brand-green/60 data-[open=true]:shadow-card-hover'>
            <button type='button' id={triggerId} aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)} className='flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6'>
              <span data-open={isOpen} className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-graphite text-white transition-colors duration-200 data-[open=true]:bg-brand-green'>
                <Icon aria-hidden='true' className='size-6' strokeWidth={1.8} />
              </span>
              <span className='min-w-0 flex-1'>
                <span className='block font-heading text-lg font-bold text-brand-graphite sm:text-xl'>{title}</span>
                <span className='mt-1.5 hidden max-w-3xl text-sm leading-6 text-muted-foreground sm:block'>{description}</span>
              </span>
              <span data-open={isOpen} className='flex shrink-0 items-center gap-2 rounded-md bg-brand-silver/50 px-3 py-1 text-sm font-medium data-[open=true]:bg-brand-green-light'>
                <span className='hidden sm:inline'>Learn More</span>
                <ChevronDown aria-hidden='true' className={`size-5 text-muted-foreground transition duration-300 ${isOpen ? 'rotate-180 text-brand-green' : ''}`} />
              </span>
            </button>

            <div id={panelId} role='region' aria-labelledby={triggerId} className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className='overflow-hidden'>
                <div className='border-t border-brand-silver/70 px-5 pb-6 pt-5 sm:ml-[5.25rem] sm:px-6 sm:pb-7 sm:pt-6'>
                  <p className='text-sm leading-6 text-muted-foreground sm:hidden'>{description}</p>
                  <p className='mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green sm:mt-0'>Training covers</p>
                  <ul className='mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
                    {topics.map((topic) => (
                      <li key={topic} className='flex items-start gap-2.5 text-sm font-medium leading-6 text-brand-graphite'>
                        <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-green-light text-brand-green'>
                          <Check aria-hidden='true' className='size-3.5' strokeWidth={3} />
                        </span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Link href='/book-training' className='group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:text-base'>
                    <GraduationCap aria-hidden='true' className='size-5' />
                    Book Training
                    <ArrowUpRight aria-hidden='true' className='size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
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
