'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

const ShoezecImages = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const cards = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/P7.jpg?v=1695129533&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/acncaca.jpg?v=1695134400&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20220105-WA0083.jpg?v=1695134400&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20230802-WA0023.jpg?v=1695134401&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/shoesstyle-asset-back.jpg?v=1695134402&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20211208-WA0039.jpg?v=1695134401&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/IMG-20220225-WA0043.jpg?v=1695134400&width=190'
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/99a13b6f-8188-4b92-a4ca-08b28435aede.jpg?v=1695134400&width=190'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const isTab = window.matchMedia('(max-width: 1023px) and (min-width: 768px)').matches;
      const isLaptop = window.matchMedia('(max-width: 2561px) and (min-width: 1024px)').matches;
      if (isMobile) {
        setStartIndex(0);
        setNumCardsToShow(2);
      } else if (isTab) {
        setStartIndex(0);
        setNumCardsToShow(4);
      } else if (isLaptop) {
        setStartIndex(0);
        setNumCardsToShow(8);
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
  }, [cards.length]);

  const showNextCards = () => {
    const newStartIndex = (startIndex + 1) % cards.length;
    setStartIndex(newStartIndex);
  };

  const showPreviousCards = () => {
    const newStartIndex = (startIndex - 1 + cards.length) % cards.length;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="relative items-center justify-center px-5 py-10 text-center md:px-2 xl:px-28 2xl:px-[650px]">
      <h1 className="text-2xl font-bold">@Shoezec</h1>
      <div className="flex items-center justify-center gap-x-4 py-10 lg:gap-x-3 xl:gap-x-6">
        {cards.slice(startIndex, startIndex + numCardsToShow).map((card, index) => (
          <div key={index} className="md:h-48 lg:h-32">
            <img
              alt={`brand-logo`}
              className="h-full w-full rounded-xl object-cover"
              src={card.image}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-6 flex items-center justify-between gap-x-6 px-4 md:top-4 md:px-16 lg:hidden">
        <button
          type="button"
          onClick={showPreviousCards}
          disabled={startIndex === 0}
          className="rounded-full bg-white p-1 shadow-lg"
        >
          <ChevronLeft size={36} color="black" strokeWidth={0.5} />
        </button>
        <div className="flex items-center">
          {cards.map((_, index) => (
            <span key={index} className={`bg-black} mx-2 h-2 rounded-full`}></span>
          ))}
        </div>
        <button
          type="button"
          onClick={showNextCards}
          disabled={startIndex + numCardsToShow >= cards.length}
          className="rounded-full bg-white p-1 shadow-lg"
        >
          <ChevronRight size={36} color="black" strokeWidth={0.5} />
        </button>
      </div>
      {/* <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-4"
          onClick={showPreviousCards}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={showNextCards}
          disabled={startIndex + numCardsToShow >= cards.length}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ShoezecImages;
