'use client';
/* eslint-disable @next/next/no-img-element */
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from './what-people-sayy';

// const customTheme: CustomFlowbiteTheme['carousel'] = {
//   "root": {
//     "base": "relative h-full w-full",
//     "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none z-10",
//     "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none z-10"
//   },
//   "indicators": {
//     "active": {
//       "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
//       "on": "bg-white dark:bg-gray-800"
//     },
//     "base": "h-3 w-3 rounded-full",
//     "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
//   },
//   "item": {
//     "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
//     "wrapper": {
//       "off": "w-1/3 flex-shrink-0 transform cursor-default snap-center", // Adjusted width to 1/3
//       "on": "w-1/3 flex-shrink-0 transform cursor-grab snap-center" // Adjusted width to 1/3
//     }
//   },
//   "control": {
//     "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
//     "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
//   },
//   "scrollContainer": {
//     "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
//     "snap": "snap-x"
//   }
// }

export default function Component() {
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
    nextArrow: <SampleNextArrow icon={ChevronRightCircle} />,
    prevArrow: <SamplePrevArrow icon={ChevronLeftCircle} />
  };
  return (
    <div className="mx-auto mt-8 justify-center rounded-lg p-6 px-5 py-10 text-center md:px-10 xl:px-40 2xl:px-[700px]">
      <h1 className="pb-2 text-2xl font-bold">Our Brands</h1>
      <p className="pb-8 text-xs text-slate-600">Advanced product filter by vendors</p>
      <Slider {...settings}>
        {/* <Carousel slide={false} theme={customTheme}> */}
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/P7.jpg?v=1695129533&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/acncaca.jpg?v=1695134400&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/shoesstyle-asset-back.jpg?v=1695134402&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20211208-WA0039.jpg?v=1695134401&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20220225-WA0043.jpg?v=1695134400&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/99a13b6f-8188-4b92-a4ca-08b28435aede.jpg?v=1695134400&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20220105-WA0083.jpg?v=1695134400&width=190"
          alt="..."
          className="h-full"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20230802-WA0023.jpg?v=1695134401&width=190"
          alt="..."
          className="h-full"
        />
        {/* </Carousel> */}
      </Slider>
    </div>
  );
}
/* eslint-disable @next/next/no-img-element */
// "use client"
// import { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// export default class SimpleSlider extends Component {
//     render() {
//         const isMobile = window.matchMedia('(max-width: 767px)').matches;
//         const isTab = window.matchMedia('(max-width: 1023px) and (min-width: 768px)').matches;
//         const isLaptop = window.matchMedia('(max-width: 2561px) and (min-width: 1024px)').matches;

//         let slidesToShow = 8; // Default for laptop

//         if (isMobile) {
//           slidesToShow = 2;
//         } else if (isTab) {
//           slidesToShow = 4;
//         } else if (isLaptop) {
//             slidesToShow = 8;
//         }

//         const settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: slidesToShow,
//           slidesToScroll: 1
//         };

//     return (
//     <div className="px-5 md:px-10 xl:px-40 2xl:px-[700px] mx-auto mt-8 bg-pink-500 p-6 text-center rounded-lg">
//         <h1 className="font-bold text-2xl py-10">@Shoezec</h1>
//         <Slider {...settings}>
//           {/* Slide 1 */}
//           <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/P7.jpg?v=1695129533&width=190"
//             />
//           </div>

//           {/* Slide 2 */}
//           <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/acncaca.jpg?v=1695134400&width=190"
//             />
//           </div>

//           {/* Slide 3 */}
//           <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20220105-WA0083.jpg?v=1695134400&width=190"
//             />
//           </div>

//           {/* Slide 4 */}
//           <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20230802-WA0023.jpg?v=1695134401&width=190"
//             />
//           </div>

//           {/* Slide 5 */}
//           <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/shoesstyle-asset-back.jpg?v=1695134402&width=190"
//             />
//           </div>

//           {/* Slide 6 */}
//           <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20211208-WA0039.jpg?v=1695134401&width=190"
//             />
//           </div>

//             {/* Slide 7 */}
//             <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20220225-WA0043.jpg?v=1695134400&width=190"
//             />
//           </div>

//             {/* Slide 8 */}
//             <div className="h-32 flex items-center justify-center">
//             <img
//                 alt={`brand-logo`}
//                 className="h-full w-full object-cover rounded-xl"
//                 src="https://cdn.shopify.com/s/files/1/0778/1679/1364/files/99a13b6f-8188-4b92-a4ca-08b28435aede.jpg?v=1695134400&width=190"
//             />
//           </div>

//         </Slider>
//     </div>
//     );
//   }
// }
