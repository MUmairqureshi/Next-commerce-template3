import OpenCart from 'components/cart/open-cart';
import logo from 'components/images/logo.webp';
import { Heart, Mail, Mails, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "src/components/ui/navigation-menu";
import MobileMenu from './mobile-menu';
import Search from './search';

// const { SITE_NAME } = process.env;

export default async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const menu = [
    { title: 'Air Max', path: 'none', options: { title: 'a' } },
    { title: 'Jordans', path: 'none' },
    { title: 'Vapormax', path: 'none' },
    { title: 'Air Force', path: 'none' },
    { title: 'New Balance', path: 'none' },
    { title: 'Dunk Low', path: 'none' },
    { title: 'Dunk High', path: 'none' },
    { title: 'Yeezy', path: 'none' }
  ];
  return (
    <section>
      <nav className="flex items-center justify-center  bg-black p-2 text-center text-xs text-white md:p-3">
        <div className="mx-auto w-52 md:w-full">
          Use Promo Code &quot;SHOEZEC&quot; TO Get 10% Off
        </div>
      </nav>
      <nav className="relative flex items-center justify-between p-4 lg:px-24 2xl:mx-[600px]">
        <div className="block w-full flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex w-full items-center gap-x-6">
          <div className="hidden md:flex">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <Image alt="logo" src={logo} height={250} width={250} />
              {/* <LogoSquare />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div> */}
            </Link>
            {/* {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null} */}
          </div>
          <div className="hidden justify-center md:flex md:w-full">
            <Search />
          </div>
          <div className="hidden gap-x-4 md:flex">
            <Mail strokeWidth={0.7} />
            <Mails strokeWidth={0.7} />
            <Heart strokeWidth={0.7} />
            <Suspense fallback={<OpenCart />}>
              {/* <Cart /> */}
              <ShoppingBasket strokeWidth={0.7} />
            </Suspense>
          </div>
        </div>
      </nav>
      <nav className="font hidden flex-none items-center justify-center gap-x-6 bg-black p-3 text-white xl:flex">
        <div>Air Max</div>
        <div>Jordans</div>
        <div>Vapormax</div>
        <div>Air Force</div>
        <div>New Balance</div>
        <div>Dunk Low</div>
        <div>Dunk High</div>
        <div>Yeezy</div>
        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Air Max</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Air Max 1</NavigationMenuLink>
                <NavigationMenuLink>Air Max 2021</NavigationMenuLink>
                <NavigationMenuLink>Air Max 2090</NavigationMenuLink>
                <NavigationMenuLink>Air Max 270</NavigationMenuLink>
                <NavigationMenuLink>Air Max 720</NavigationMenuLink>
                <NavigationMenuLink>Air Max 90</NavigationMenuLink>
                <NavigationMenuLink>Air Max 95</NavigationMenuLink>
                <NavigationMenuLink>Air Max 97</NavigationMenuLink>
                <NavigationMenuLink>Air Max Plus</NavigationMenuLink>
                <NavigationMenuLink>Air Max Plus 3</NavigationMenuLink>
                <NavigationMenuLink>Air Max Pre Day</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Jordans</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Air Jordan 1</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 11</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 12</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 13</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 3</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 36</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 4</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 5</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 6</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 7</NavigationMenuLink>
                <NavigationMenuLink>Air Jordan 8</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Vapormax</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Air Vapormax 2019</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax 2020</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax 2021</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax EVO</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax Flyknit</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax Flyknit 2</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax Flyknit 3</NavigationMenuLink>
                <NavigationMenuLink>Air Vapormax Plus</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>Air Force</NavigationMenuItem>
            <NavigationMenuItem>New Balance</NavigationMenuItem>
            <NavigationMenuItem>Dunk Low</NavigationMenuItem>
            <NavigationMenuItem>Dunk High</NavigationMenuItem>
            <NavigationMenuItem>Yeezy</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
      </nav>
    </section>
  );
}
