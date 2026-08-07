import type { Metadata } from 'next';
import HeroSection from '@/components/HomeComponents/HeroSection';
import HighlightSection from '@/components/HomeComponents/HighlightSection';
import FeaturedServices from '@/components/HomeComponents/FeaturedServices';
import CTABanner from '@/components/HomeComponents/CTABanner';
import MailInRepair from '@/components/HomeComponents/MailInRepair';
import LocalRepairSection from '@/components/HomeComponents/LocalRepairSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Electronic Device Repair in Winston-Salem, NC | Green Wireless',
  },
  description:
    'Green Wireless provides professional iPhone, iPad, MacBook, PS5 and Xbox repair, secure mail-in service and electronics repair training in Winston-Salem, NC.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Electronic Device Repair in Winston-Salem, NC',
    description:
      'Professional device repair, mail-in service and hands-on electronics training from Green Wireless.',
    url: '/',
    images: ['/GW-Hero.png'],
  },
};
const Page = () => {
  return (
    <>
      <HeroSection />
      <HighlightSection />
      <FeaturedServices />
      <LocalRepairSection />
      <MailInRepair />
      <CTABanner />
    </>
  );
};

export default Page;
