'use client';
import ReviewCard from 'components/reviewcard';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const cards1 = {
  name: 'Nancy',
  location: 'EdinBurgh',
  image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73.png?v=1695225086&width=73',
  review:
    'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
  rating: 5
};

const cards2 = {
  name: 'Ewan Sharpe',
  location: 'Liverpool',
  image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_1.png?v=1695225188&width=73',
  review:
    'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
  rating: 4
};

const cards3 = {
  name: 'Alisha Finch',
  location: 'Bristol',
  image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_2.png?v=1695225212&width=73',
  review:
    'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
  rating: 5
};

const cards4 = {
  name: 'Sara Eldred',
  location: 'Birmingham',
  image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_2.png?v=1695225212&width=73',
  review:
    'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
  rating: 5
};
// const customTheme: CustomFlowbiteTheme['carousel'] = {
//     "root": {
//       "base": "relative h-full w-full bg-blue-400",
//       "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-2 focus:outline-none",
//       "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-2 focus:outline-none"
//     },
//     "indicators": {
//       "active": {
//         "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
//         "on": "bg-white dark:bg-gray-800"
//       },
//       "base": "h-3 w-3 rounded-full",
//       "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
//     },
//     "item": {
//       "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
//       "wrapper": {
//         "off": "w-full flex-shrink-0 transform cursor-default snap-center",
//         "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
//       }
//     },
//     "control": {
//       "base": "inline-flex h-12 w-12 items-center justify-center rounded-full group-hover:bg-white/50 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-14 sm:w-14", // Increase the values for h and w
//       "icon": "h-7 w-7 text-white hover:text-black dark:text-gray-800 sm:h-8 sm:w-8" // Adjust these sizes as well
//     },
//     "scrollContainer": {
//       "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
//       "snap": "snap-x"
//     }
//   }

export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%',
        background: isHovered ? 'black' : 'grey',
        transform: 'scale(1.5)'
        // borderWidth:100,
        // borderColor:"black"
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%',
        background: isHovered ? 'black' : 'grey',
        transform: 'scale(1.5)'
        // borderWidth:100,
        // borderColor:"black"
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default function WhatPeopleSayy() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // appendDots: (dots:any) => (
    //     <div
    //       style={{
    //         backgroundColor: "#ddd",
    //         borderRadius: "10px",
    //         padding: "10px"
    //       }}
    //     >
    //       <ul style={{ margin: "0px" }}> {dots} </ul>
    //     </div>
    //   ),
    nextArrow: <SampleNextArrow icon={ChevronRightCircle} />,
    prevArrow: <SamplePrevArrow icon={ChevronLeftCircle} />
  };
  return (
    <>
      <div className="mx-auto mt-8 rounded-lg p-6 px-5 text-center md:px-10 xl:px-40 2xl:px-[700px]">
        <h1 className="text-2xl font-bold">What People Say</h1>
        <p className="py-3 text-xs text-slate-600">Real customer reviews from themeforest.net</p>
        <div className="">
          {/* <Carousel theme={customTheme}> */}
          <Slider {...settings}>
            <div className="flex items-center justify-center">
              <ReviewCard card={cards1} />
            </div>

            {/* Slide 2 */}
            <div className="flex items-center justify-center">
              <ReviewCard card={cards2} />
            </div>

            {/* Slide 3 */}
            <div className="flex items-center justify-center">
              <ReviewCard card={cards3} />
            </div>

            {/* Slide 4 */}
            <div className="flex items-center justify-center">
              <ReviewCard card={cards4} />
            </div>
          </Slider>
          {/* </Carousel> */}
        </div>
      </div>
      {/* <div className="w-full relative">
        <div className="relative aspect-square h-[70vh] 2xl:h-[30vh] w-full flex-none transition-transform transform">
          <Carousel theme={customTheme} className='block md:hidden'>
            <Image src={mobilebanner1} alt="a" className='h-full object-cover w-full' />
            <Image src={mobilebanner2} alt="a" className='h-full object-cover w-full' />
            <Image src={mobilebanner3} alt="a" className='h-full object-cover w-full' />
          </Carousel>
          <Carousel theme={customTheme} className='hidden md:block'>
            <Image src={banner1} alt="a" className='h-full object-cover w-full' />
            <Image src={banner2} alt="a" className='h-full object-cover w-full' />
            <Image src={banner3} alt="a" className='h-full object-cover w-full' />
          </Carousel>
          <Carousel theme={customTheme} className='hidden md:block'>
            <Image src={banner1} alt="a" className='h-full object-cover w-full' />
            <Image src={banner2} alt="a" className='h-full object-cover w-full' />
            <Image src={banner3} alt="a" className='h-full object-cover w-full' />
          </Carousel>
        </div>
      </div> */}
    </>
  );
}
// /* eslint-disable @next/next/no-img-element */
// "use client"
// import ReviewCard from "components/reviewcard";
// import { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// export default class SimpleSlider extends Component {
//     render() {
//     const isMobile = window.matchMedia('(max-width: 767px)').matches;
//     const isTab = window.matchMedia('(max-width: 1023px) and (min-width: 768px)').matches;
//     const isLaptop = window.matchMedia('(max-width: 2561px) and (min-width: 1024px)').matches;

//     let slidesToShow = 3; // Default for laptop

//         if (isMobile) {
//           slidesToShow = 1;
//         } else if (isTab) {
//           slidesToShow = 2;
//         } else if (isLaptop) {
//             slidesToShow = 3;
//         }

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: slidesToShow,
//         slidesToScroll: 1
//     };

//     const cards1 = {
//         name: 'Nancy',
//         location: 'EdinBurgh',
//         image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73.png?v=1695225086&width=73',
//         review: 'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
//         rating: 5,
//     }

//     const cards2 = {
//         name: 'Ewan Sharpe',
//         location: 'Liverpool',
//         image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_1.png?v=1695225188&width=73',
//         review: 'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
//         rating: 4,
//     }

//     const cards3 = {
//         name: 'Alisha Finch',
//         location: 'Bristol',
//         image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_2.png?v=1695225212&width=73',
//         review: 'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
//         rating: 5,
//     }

//     const cards4 = {
//         name: 'Sara Eldred',
//         location: 'Birmingham',
//         image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_2.png?v=1695225212&width=73',
//         review: 'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
//         rating: 5,
//     }

//     return (
//     <div className="px-5 md:px-10 xl:px-40 2xl:px-[700px] mx-auto mt-8 p-6 text-center rounded-lg">
//       <h1 className="font-bold text-2xl">What People Say</h1>
//       <p className="text-xs text-slate-600 py-3">Real customer reviews from themeforest.net</p>
//         <Slider {...settings}>
//           {/* Slide 1 */}
//           <div className="flex items-center justify-center">
//             <ReviewCard card={cards1}/>
//           </div>

//           {/* Slide 2 */}
//           <div className="flex items-center justify-center">
//             <ReviewCard card={cards2}/>
//           </div>

//           {/* Slide 3 */}
//           <div className="flex items-center justify-center">
//             <ReviewCard card={cards3}/>
//           </div>

//           {/* Slide 4 */}
//           <div className="flex items-center justify-center">
//             <ReviewCard card={cards4}/>
//           </div>

//         </Slider>
//     </div>
//     );
//   }
// }
