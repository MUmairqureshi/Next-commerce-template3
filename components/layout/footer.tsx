import logo from 'components/images/logo_white.webp';
import FooterMenu from 'components/layout/footer-menu';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  // const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  // const menu = await getMenu('next-js-frontend-footer-menu');
  const menu = [
    {
      title: 'FAQs',
      path: '/faqs'
    },
    {
      title: 'Track Your Order',
      path: '/trackyourorder'
    },
    {
      title: 'Contact Us',
      path: '/contactus'
    },
    {
      title: 'Pay With Clearpay',
      path: '/paywithclearpay'
    },
    {
      title: 'Size Guide',
      path: '/sizeguide'
    }
  ];

  const menu1 = [
    {
      title: 'Payment Policy',
      path: '/paymentpolicy'
    },
    {
      title: 'Terms Of Service',
      path: '/termsofservice'
    },
    {
      title: 'Shipping Policy',
      path: '/shippolicy'
    },
    {
      title: 'Return & Refund Policy',
      path: '/returnandrefundpolicy'
    },
    {
      title: 'Privacy Policy',
      path: '/privacypolicy'
    }
  ];

  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-black text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-6 text-sm dark:border-neutral-700 lg:flex-row lg:gap-12 lg:px-16 lg:py-24 min-[1439px]:px-0">
        <div className="flex flex-col items-center lg:w-4/12 lg:items-start">
          <Link className="gap-2 text-black dark:text-white lg:pt-1" href="/">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={logo} alt="brand-logo" width={150} height={150} />
            </div>
            {/* <LogoSquare size="sm" /> */}
            <p className="hidden py-6 text-white md:block">
              Worldwide fashion store with wide collection of styles with over 100 international
              fashion brands.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-0 lg:justify-start">
              <Instagram color="white" strokeWidth={1} size={35} />
              <Facebook color="white" fill="white" size={35} />
              <Twitter color="white" fill="white" size={35} />
              <Youtube color="white" strokeWidth={1} size={35} />
            </div>
            {/* <span className="uppercase">{SITE_NAME}</span> */}
          </Link>
        </div>
        {/* <Suspense
          fallback={
            <div className="flex h-[188px] flex-col gap-2 w-1/3">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
        </Suspense> */}
        <div className="flex flex-col items-center gap-y-6 text-center lg:grid lg:w-4/12 lg:grid-cols-2 lg:items-start lg:text-start">
          <div>
            <h2 className="pb-5 text-lg font-semibold text-white">QUICK LINKS</h2>
            <FooterMenu menu={menu} />
          </div>
          <div>
            <h2 className="pb-5 text-lg font-semibold text-white">POLICIES</h2>
            <FooterMenu menu={menu1} />
          </div>
        </div>
        <div className="flex flex-col items-center text-center lg:w-4/12 lg:items-start lg:text-start">
          <h2 className="pb-7 text-xl font-semibold text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className="relative">
            <div className="flex w-full max-w-xs items-center justify-center space-x-2">
              <Input type="email" placeholder="Enter Your Email Here" className="rounded-3xl p-6" />
              <Button
                type="submit"
                className="absolute right-0 top-0 rounded-3xl px-2 py-[25px] text-white lg:px-7"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <p className="py-4 font-medium text-white">
            Follow news, promotions and interesting events. Stay tuned with us!
          </p>
        </div>
      </div>
      <div className="py-6 text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 text-white md:flex-row md:gap-0 md:px-16 min-[1439px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} | Every Style of
            Jordan&quot;s Available | All Right Reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          {/* <p className="md:ml-auto">
            Crafted by{' '}
            <a href="https://vercel.com" className="text-black dark:text-white">
              ▲ Vercel
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
