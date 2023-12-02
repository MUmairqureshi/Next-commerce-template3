/* eslint-disable @next/next/no-img-element */
'use client';
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default class SimpleSlider extends Component {
  render() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const isTab = window.matchMedia('(max-width: 1023px) and (min-width: 768px)').matches;
    const isLaptop = window.matchMedia('(max-width: 2561px) and (min-width: 1024px)').matches;

    let slidesToShow = 5; // Default for laptop

    if (isMobile) {
      slidesToShow = 2;
    } else if (isTab) {
      slidesToShow = 4;
    } else if (isLaptop) {
      slidesToShow = 5;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      arrows: false,
      className: ''
      // slidesPerRow: slidesToShow,
    };

    return (
      <div className="mx-auto mt-8 justify-center rounded-lg p-6 px-5 text-center md:px-10 xl:px-28 2xl:px-[700px]">
        <h1 className="pb-2 text-2xl font-bold">Our Brands</h1>
        <p className="pb-8 text-xs text-slate-600">Advanced product filter by vendors</p>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="flex h-32 items-center justify-center">
            <img
              alt={`brand-logo`}
              className="h-full w-full rounded-xl object-cover"
              src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/brand-logo.png?v=1695222423&width=303"
            />
          </div>

          {/* Slide 2 */}
          <div className="flex h-32 items-center justify-center">
            <img
              alt={`brand-logo`}
              className="h-full w-full rounded-xl object-cover"
              src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/nike.png?v=1695222582&width=303"
            />
          </div>

          {/* Slide 3 */}
          <div className="flex h-32 items-center justify-center">
            <img
              alt={`brand-logo`}
              className="h-full w-full rounded-xl object-cover"
              src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/adidas.png?v=1695222585&width=303"
            />
          </div>

          {/* Slide 4 */}
          <div className="flex h-32 items-center justify-center">
            <img
              alt={`brand-logo`}
              className="h-full w-full rounded-xl object-cover"
              src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/new-balance_c309c130-fd69-4f57-be8b-36cdcb1ce661.png?v=1695222642&width=303"
            />
          </div>

          {/* Slide 5 */}
          <div className="flex h-32 items-center justify-center">
            <img
              alt={`brand-logo`}
              className="h-full w-full rounded-xl object-cover"
              src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/yeezy_66ebec3c-268a-4efc-93dc-e80259a5925d.png?v=1695222660&width=303"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
