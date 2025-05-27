import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import { linkList } from '@/utils/constant';
import { Separator } from '@/components/ui/separator';
import Button from '@/components/common/Button';

function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <div
          className={
            'h-12 w-12 border border-dark-green p-2 rounded-xl flex items-center justify-center lg:hidden'
          }
        >
          <Image src={'/menu.svg'} width={20} height={20} alt={''} />
        </div>
      </SheetTrigger>
      <SheetContent className={'w-full sm:w-[45%]'}>
        <SheetHeader>
          <Logo />
          <div className={'flex gap-10 flex-col py-10'}>
            <div className={'flex gap-10 flex-col  '}>
              {linkList.map((link, index) => (
                <>
                  <a
                    key={link.label}
                    href={link.href}
                    className={'font-sans text-dark-green text-2xl'}
                  >
                    {link.label}
                  </a>
                </>
              ))}
            </div>
            <Button label={'Hubungi Whatsapp'} href={'#'} />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
