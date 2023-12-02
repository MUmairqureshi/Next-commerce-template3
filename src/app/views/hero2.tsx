'use client';
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import Image from 'next/image';

import mobilebanner1 from 'components/images/Air-Jordan-4-Black-Cat-banners.webp';
import banner1 from 'components/images/Air-Jordan-4-Black-Cat-desktop--banners.webp';
import mobilebanner2 from 'components/images/Nike-Air-VaporMax-Plus-banner_207fa011-bc07-4f61-9e4f-97b364d9d8b2.webp';
import banner2 from 'components/images/Nike-Air-VaporMax-Plus-desktop-banner_1602b662-4461-438c-8820-126a74d434b5.webp';
import mobilebanner3 from 'components/images/Nike-Dunk-Low-bvanner_b43e4fed-b5b5-4ff4-a999-3d4e42d301f6.webp';
import banner3 from 'components/images/Nike-Dunk-Low-desktop-banner.webp';

const customTheme: CustomFlowbiteTheme['carousel'] = {
  root: {
    base: 'relative h-full w-full',
    leftControl:
      'absolute -top-2 right-24 w-1/2 flex h-full items-end justify-start px-2 focus:outline-none',
    rightControl:
      'absolute -top-2 left-24 flex w-1/2 h-full items-end justify-end px-2 focus:outline-none'
  },
  indicators: {
    active: {
      off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
      on: 'bg-white dark:bg-gray-800'
    },
    base: 'h-3 w-3 rounded-full',
    wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3'
  },
  item: {
    base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    wrapper: {
      off: 'w-full flex-shrink-0 transform cursor-default snap-center',
      on: 'w-full flex-shrink-0 transform cursor-grab snap-center'
    }
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-white/50 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-white hover:text-black dark:text-gray-800 sm:h-6 sm:w-6'
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
    snap: 'snap-x'
  }
};

export default function Hero2() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-square h-[70vh] w-full flex-none transform transition-transform 2xl:h-[30vh]">
        <Carousel theme={customTheme} className="block md:hidden">
          <Image src={mobilebanner1} alt="a" className="h-full w-full object-cover" />
          <Image src={mobilebanner2} alt="a" className="h-full w-full object-cover" />
          <Image src={mobilebanner3} alt="a" className="h-full w-full object-cover" />
        </Carousel>
        <Carousel theme={customTheme} className="hidden md:block">
          <Image src={banner1} alt="a" className="h-full w-full object-cover" />
          <Image src={banner2} alt="a" className="h-full w-full object-cover" />
          <Image src={banner3} alt="a" className="h-full w-full object-cover" />
        </Carousel>
      </div>
    </div>
  );
}
