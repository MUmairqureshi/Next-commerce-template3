/* eslint-disable @next/next/no-img-element */
'use client';

const OurLook = () => {
  const images = [
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/Alles-over-Nike-Air-Force-1-en-Air-Force-1.07-bij-Allesoverschoenen.nl.jpg?v=1695222962&width=960&height=220',
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/Air-Jordan-1-Low-Chicago-Flip.jpg?v=1695223354&width=320&height=220',
    'https://cdn.shopify.com/s/files/1/0778/1679/1364/files/maxresdefault.jpg?v=1695223537&width=400&height=960'
  ];

  return (
    <div className="items-center justify-center px-5 py-10 text-center md:px-2 xl:px-28 2xl:px-[650px]">
      <h1 className="text-2xl font-bold">Our Lookbook</h1>
      <p className="py-3 text-xs text-slate-600">All Time Best Seller</p>
      <div className="flex flex-col items-center justify-center gap-x-4 gap-y-4 py-4 md:grid md:grid-cols-3">
        {images.map((imageUrl, index) => (
          <div key={index} className=" mx-auto overflow-hidden rounded-xl">
            <img
              alt={`brand-logo-${index}`}
              className="h-full w-full rounded-xl object-cover"
              src={imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLook;
