import FourBoxes from './views/four-boxes';
import { default as OurBrandss } from './views/our-brandss';
import { default as SimpleSlider } from './views/slider';

import Hero2 from './views/hero2';
import OurLook from './views/our-look';
import WhatPeopleSayy from './views/what-people-sayy';
// import WhatPeopleSayy from './views/what-people-sayy';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div>
        {/* <Hero/> */}
        <Hero2 />
        <FourBoxes />
        <OurBrandss />
        <OurLook />
        {/* <Component/> */}
        {/* <WhatPeopleSay/> */}
        <WhatPeopleSayy />
        {/* <ShoezecImages/> */}
        <SimpleSlider />
        {/* <Slider2/> */}
        {/* <WhatPeopleSay2/> */}
        {/* <Button>Click me</Button> */}
      </div>
      {/* <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense> */}
    </>
  );
}
