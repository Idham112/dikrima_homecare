import React from 'react';
import Button from '../common/Button';
import { Separator } from '../ui/separator';
import { linkList } from '@/utils/constant';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#F1FFFD] w-full py-8 px-4 md:px-8 my-[54px]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        {/* Div Kiri Logo */}
        <div className="flex-shrink-0">
          <Image
            src={'/icon/Mainlogo.svg'}
            alt="logo icon"
            width={168}
            height={125}
          />
        </div>

        {/* Div Kanan: Link, Tagline, Button, Copyright */}
        <div className="flex flex-col w-full">
          {/* Links + Social */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full md:w-auto gap-4 lg:gap-0 mb-5 md:mb-8">
            <div>
              <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center text-dark-green text-sm">
                {linkList.map((link, index) => (
                  <React.Fragment key={link.label}>
                    <a
                      href={link.href}
                      className="cstm-font-sans hover:text-primary-green transition duration-200"
                    >
                      {link.label}
                    </a>
                    {index < linkList.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="bg-[#4a4a4a] w-1 h-5 inline-block"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex gap-6">
              <a
                href="http://wa.me/6281215202124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icon/Whatsapp.svg"
                  alt="Whatsapp icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>

              <a
                href="https://www.instagram.com/dikrimahomecare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icon/Instagram.svg"
                  alt="Instagram icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-[#C3D4D1] mb-5"></div>

          {/* Tagline + Button + Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-[27px] w-full md:w-auto">
              <p className="font-bold text-sm text-teal-900 text-center sm:text-left lg:max-w-[200px]">
                Sehat Lebih Mudah Dimana Saja dan Kapan Saja
              </p>
              <Button
                type={'fill'}
                className={'w-full sm:w-auto'}
                label={'Hubungi Whatsapp'}
                href={'#'}
                size='lg'
              />
            </div>
            <div className="text-sm text-gray-700 text-center md:text-right max-w-[325px]">
              <p>
                <strong>© 2025 Dikrima Homecare.</strong> All rights reserved.
                Designed by LokaWeb, your digital superheroes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
