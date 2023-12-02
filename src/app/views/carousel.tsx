'use client';
/* eslint-disable @next/next/no-img-element */

import { Carousel } from 'flowbite-react';

export default function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-40 xl:w-56 2xl:h-96">
      <Carousel className="bg-blue-500">
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/brand-logo.png?v=1695222423&width=303"
          alt="..."
        />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}
