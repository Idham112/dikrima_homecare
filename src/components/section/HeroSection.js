import React from 'react';
import Button from '@/components/common/Button';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className={'relative max-w-[1024px] mx-auto mt-6  md:mt-16'}>
      <Image
        src={'/imageLeft.png'}
        className={'hidden absolute md:block md:-left-[300px] h-[350px] w-auto'}
        width={325}
        height={400}
      />
      <Image
        src={'/imageRight.png'}
        className={
          'hidden absolute md:block md:-right-[300px] h-[350px] w-auto'
        }
        width={325}
        height={400}
      />
      <div className={'flex flex-col gap-4 text-center mb-10'}>
        <h4 className={'font-sans text-[#121212] text-base md:text-xl '}>
          Sehat Tanpa Harus Keluar Rumah
        </h4>
        <h1
          className={
            'font-sans  font-medium text-text-primary leading-[120%] text-4xl md:text-6xl'
          }
        >
          Layanan Dokter, Vitamin, dan Terapi Langsung ke Rumah Anda
        </h1>
        <p
          className={
            'font-serif text-text-secondary leading-[160%] max-w-[450px] mx-auto'
          }
        >
          Siap sehat tanpa ribet? Klik WhatsApp sekarang dan jadwalkan kunjungan
          dokter ke rumah Anda.
        </p>
      </div>
      <Button
        type={'fill'}
        className={'w-full sm:w-fit mx-auto'}
        label={'Booking Sekarang'}
        href="https://wa.me/6281215202124"
      />
    </section>
  );
}

export default HeroSection;
