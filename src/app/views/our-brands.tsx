/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';

const OurBrands = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [numImagesToShow, setNumImagesToShow] = useState(4);
  const images = [
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/brand-logo.png?v=1695222423&width=303',
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/nike.png?v=1695222582&width=303',
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/adidas.png?v=1695222585&width=303',
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/new-balance_c309c130-fd69-4f57-be8b-36cdcb1ce661.png?v=1695222642&width=303',
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/yeezy_66ebec3c-268a-4efc-93dc-e80259a5925d.png?v=1695222660&width=303'
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      if (isMobile) {
        setStartIndex(0);
        setNumImagesToShow(4);
      } else {
        setStartIndex(0);
        setNumImagesToShow(images.length);
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images.length]);

  const showNextImages = () => {
    setStartIndex(startIndex + numImagesToShow);
  };

  const showPreviousImages = () => {
    setStartIndex(Math.max(0, startIndex - numImagesToShow));
  };

  return (
    <div className="items-center justify-center px-5 text-center md:px-2 xl:px-28 2xl:px-[650px]">
      <h1 className="text-2xl font-bold">Our Brands</h1>
      <p className="py-3 text-xs text-slate-600">Advanced product filter by vendors</p>
      <div className="grid grid-cols-2 items-center justify-center gap-x-4 gap-y-4 py-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.slice(startIndex, startIndex + numImagesToShow).map((imageUrl, index) => (
          <div key={index} className="mx-auto w-[130px] overflow-hidden rounded-xl md:w-[220px]">
            <img
              alt={`brand-logo-${index}`}
              className="h-full w-full rounded-xl object-cover"
              src={imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center md:hidden">
        <button
          className="mr-4 bg-blue-500 px-4 py-2 text-white"
          onClick={showPreviousImages}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white"
          onClick={showNextImages}
          disabled={startIndex + numImagesToShow >= images.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OurBrands;
