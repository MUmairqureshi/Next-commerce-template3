/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import mobilebanner1 from 'components/images/Air-Jordan-4-Black-Cat-banners.webp';
import banner1 from 'components/images/Air-Jordan-4-Black-Cat-desktop--banners.webp';
import mobilebanner2 from 'components/images/Nike-Air-VaporMax-Plus-banner_207fa011-bc07-4f61-9e4f-97b364d9d8b2.webp';
import banner2 from 'components/images/Nike-Air-VaporMax-Plus-desktop-banner_1602b662-4461-438c-8820-126a74d434b5.webp';
import mobilebanner3 from 'components/images/Nike-Dunk-Low-bvanner_b43e4fed-b5b5-4ff4-a999-3d4e42d301f6.webp';
import banner3 from 'components/images/Nike-Dunk-Low-desktop-banner.webp';

export default function Hero() {
  const products = [banner1, banner2, banner3];
  const mobileproducts = [mobilebanner1, mobilebanner2, mobilebanner3];

  if (!products?.length) return null;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    // Update isMobile on mount and window resize
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const slides = isMobile ? mobileproducts : products;

  const nextSlide = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative aspect-square h-[70vh] w-full flex-none transform transition-transform 2xl:h-[30vh]">
        <a href={`/product/`}>
          {/* Ensure that the src is a string */}
          <Image
            src={slides[currentSlide] as unknown as string}
            alt="a"
            className="h-full w-full object-cover"
          />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mb-8 flex items-center justify-center gap-x-6">
        <button type="button" onClick={prevSlide}>
          <ChevronLeft size={36} color="white" />
        </button>
        <div className="flex items-center">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`mx-2 h-2 rounded-full bg-white ${index === currentSlide ? 'w-8' : 'w-2'}`}
            ></span>
          ))}
        </div>
        <button type="button" onClick={nextSlide}>
          <ChevronRight size={36} color="white" />
        </button>
      </div>
    </div>
  );
}
