'use client';
/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const WhatPeopleSay = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const cards = [
    {
      name: 'Nancy',
      location: 'EdinBurgh',
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73.png?v=1695225086&width=73',
      review:
        'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
      rating: 5
    },
    {
      name: 'Ewan Sharpe',
      location: 'Liverpool',
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_1.png?v=1695225188&width=73',
      review:
        'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
      rating: 4
    },
    {
      name: 'Alisha Finch',
      location: 'Bristol',
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_2.png?v=1695225212&width=73',
      review:
        'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
      rating: 5
    },
    {
      name: 'Sara Eldred',
      location: 'Birmingham',
      image:
        'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/73x73_2.png?v=1695225212&width=73',
      review:
        'Process was quick and easy. Price considerably lower than retail Authenticity verified - great tool to ease shopper"s minds. 1st experience with Shoezec a great one and i LOVE my Nike Air Max sneakers!!',
      rating: 5
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const isTab = window.matchMedia('(max-width: 1025px) and (min-width: 768px)').matches;
      const isLaptop = window.matchMedia('(max-width: 2561px) and (min-width: 1026px)').matches;
      if (isMobile) {
        setStartIndex(0);
        setNumCardsToShow(1);
      } else if (isTab) {
        setStartIndex(0);
        setNumCardsToShow(2);
      } else if (isLaptop) {
        setStartIndex(0);
        setNumCardsToShow(3);
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
    setStartIndex(startIndex + numCardsToShow);
  };

  const showPreviousCards = () => {
    setStartIndex(Math.max(0, startIndex - numCardsToShow));
  };

  return (
    <div className="items-center justify-center px-5 py-10 text-center xl:px-28 2xl:px-[650px]">
      <h1 className="text-2xl font-bold">What People Say</h1>
      <p className="py-3 text-xs text-slate-600">Real customer reviews from themeforest.net</p>
      <div className="relative flex gap-x-4 overflow-hidden">
        {cards.slice(startIndex, startIndex + numCardsToShow).map((card, index) => (
          <div
            key={index}
            className={`${
              index === 1 ? 'xl:w-2/4' : 'xl:w-1/4'
            } relative mx-auto mt-20 rounded-xl py-4`}
          >
            <div
              className={`bg-black'} absolute -top-14 left-1/2 h-28 w-28 -translate-x-1/2 transform`}
            >
              <img
                alt={`brand-logo`}
                className="h-full w-full rounded-full object-cover"
                src={card.image}
              />
            </div>
            <h1 className="pt-20 text-lg font-medium">{card.name}</h1>
            <h2 className="text-xs">{card.location}</h2>
            <p className="mx-auto px-8 py-6 text-sm text-slate-600">{card.review}</p>
            <div className="flex items-center justify-center gap-x-1">
              {[...Array(card.rating)].map((_, i) => (
                <Star key={i} size={12} strokeWidth={0.5} fill="black" />
              ))}
            </div>
            <h3 className="py-6 text-sm">{card.location}</h3>
          </div>
        ))}
      </div>
      <div className="my-6 flex justify-center">
        <button
          className="mr-4 bg-blue-500 px-4 py-2 text-white"
          onClick={showPreviousCards}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white"
          onClick={showNextCards}
          disabled={startIndex + numCardsToShow >= cards.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
