'use client';
import { Dialog, Transition } from '@headlessui/react';
import logo from 'components/images/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  AlignJustify,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mails,
  Twitter,
  Youtube
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from 'src/components/ui/sheet';
import Search from './search';

const SHEET_SIDES = ['top'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search -mr-3"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent side={side} className="top-28 bg-white bg-none backdrop-blur-none">
            <Search />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

export default function MobileMenu({ menu }: { menu: any }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <div className="mx-auto flex w-full items-center justify-between">
      <div>
        <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <Image alt="logo" src={logo} height={120} width={120} />
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <div>
          <Mails strokeWidth={0.7} />
        </div>
        <div>{SheetSide()}</div>
        <button
          onClick={openMobileMenu}
          aria-label="Open mobile menu"
          className="flex items-center justify-center text-black transition-colors dark:text-white md:hidden"
        >
          <AlignJustify />
          {/* <Bars3Icon className="h-4" /> */}
        </button>
        <Transition show={isOpen}>
          <Dialog onClose={closeMobileMenu} className="relative z-50">
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom="opacity-0 backdrop-blur-none"
              enterTo="opacity-100 backdrop-blur-[.5px]"
              leave="transition-all ease-in-out duration-200"
              leaveFrom="opacity-100 backdrop-blur-[.5px]"
              leaveTo="opacity-0 backdrop-blur-none"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom="translate-x-[-100%]"
              enterTo="translate-x-0"
              leave="transition-all ease-in-out duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-[-100%]"
            >
              <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
                <div className="px-8 py-10">
                  <div className=" flex justify-between">
                    <div className="flex gap-x-5 text-lg font-medium">
                      <div>Menu</div>
                      <div className="text-slate-400">GBP &euro;</div>
                    </div>
                    <button onClick={closeMobileMenu} aria-label="Close mobile menu">
                      <XMarkIcon className="h-6" />
                    </button>
                  </div>
                  {menu.length ? (
                    <ul className="mt-8 flex h-72 w-full flex-col overflow-x-auto">
                      {menu.map((item: any) => (
                        <li
                          className="border-b-[1px] border-slate-400 py-4 text-black transition-colors hover:text-neutral-500 dark:text-white"
                          key={item.title}
                        >
                          <Link
                            href={item.path}
                            onClick={closeMobileMenu}
                            className="flex justify-between"
                          >
                            <div>{item.title}</div>
                            <div>
                              {item?.options?.title ? (
                                <ChevronRight size={26} strokeWidth={0.8} />
                              ) : null}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="mx-auto flex w-full gap-x-4 bg-black px-12 py-7">
                  <Instagram color="white" size={34} />
                  <Facebook color="white" size={34} />
                  <Twitter color="white" size={34} />
                  <Youtube color="white" size={34} />
                  <Linkedin color="white" size={34} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
