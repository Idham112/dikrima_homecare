import React from 'react';
import { Separator } from '@/components/ui/separator';
import Button from '@/components/common/Button';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import Logo from '@/components/common/Logo';
import { linkList } from '@/utils/constant';

function NavigationBar() {
  return (
    <section className={'max-w-[1024px] mx-auto py-2'}>
      <div className={'flex justify-between items-center'}>
        <Logo />
        <div className={'flex gap-6 items-center lg:gap-10'}>
          <div className={'hidden  lg:flex lg:gap-5 lg:items-center'}>
            {linkList.map((link, index) => (
              <>
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    'font-sans text-dark-green text-sm hover:text-primary-green transition duration-200'
                  }
                >
                  {link.label}
                </a>
                {index < linkList.length - 1 && (
                  <Separator
                    key={index}
                    orientation="vertical"
                    className={'bg-[#4a4a4a]  w-1'}
                  />
                )}
              </>
            ))}
          </div>
          <Button
            type={'fill'}
            className={'hidden sm:flex'}
            label={'Hubungi Whatsapp'}
            href={'#'}
          />
          <MobileNavigation />
        </div>
      </div>
    </section>
  );
}

export default NavigationBar;
