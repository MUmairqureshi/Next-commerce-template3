import { BadgeDollarSign, Undo2, User, WalletCards } from 'lucide-react';

const FourBoxes = () => {
  return (
    <div className="grid w-full grid-cols-2 justify-center gap-y-4 px-8 py-20 md:flex md:gap-x-12 lg:gap-x-28 lg:px-16 xl:px-28 2xl:px-[650px]">
      <div className="mx-auto flex max-w-[128px] flex-col items-center gap-x-6 text-center md:max-w-none md:flex-row md:gap-x-3 md:text-start">
        <WalletCards size={40} strokeWidth={0.9} />
        <div>
          <h1 className="font-bold">FREE SHIPPING</h1>
          <p className="text-sm">When you spend £100</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[128px] flex-col items-center gap-x-6 text-center md:max-w-none md:flex-row md:gap-x-3 md:text-start">
        <Undo2 size={40} strokeWidth={0.9} />
        <div>
          <h1 className="font-bold">FREE RETURNS</h1>
          <p className="text-sm">Within 30 days</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[128px] flex-col items-center gap-x-6 text-center md:max-w-none md:flex-row md:gap-x-3 md:text-start">
        <BadgeDollarSign size={40} strokeWidth={0.9} />
        <div>
          <h1 className="font-bold">SECURED PAYMENTS</h1>
          <p className="text-sm">Pay On Instalment Via Clearpay</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[128px] flex-col items-center gap-x-6 text-center md:hidden md:max-w-none md:flex-row md:gap-x-3 md:text-start xl:flex">
        <User size={40} strokeWidth={0.9} />
        <div>
          <h1 className="font-bold">SUPPORT 24/7</h1>
          <p className="text-sm">Ready to help our clients</p>
        </div>
      </div>
    </div>
  );
};

export default FourBoxes;
