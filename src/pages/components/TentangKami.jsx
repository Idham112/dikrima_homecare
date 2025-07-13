import Image from 'next/image';
import { useState } from 'react';
import {
  tentangKami,
  patient,
  since,
  partnerKesehatan,
  testimony,
  tentangKamiTeam,
} from '../../utils/tentangkami';
import Button from '@/components/common/Button';

const TentangKamiPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [tentangKamiTeam.head, tentangKamiTeam.team];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row mt-12 sm:mt-[120px]">
      <div className="text-black basis-full lg:basis-2/3">
        <div className="flex flex-col gap-7 w-full lg:w-[700px] px-4 lg:px-0 text-center lg:text-left">
          <h3 className="text-base text-[#238C7E] font-serif">
            {tentangKami.title}
          </h3>

          <h2 className="text-2xl  lg:text-4xl text-[#3D5f5A] font-serif font-bold">
            {tentangKami.desc}
          </h2>

          <p className="text-base font-sans text-[#4A4A4A] w-full lg:w-[680px] leading-[165%]">
            {tentangKami.cont}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 justify-center lg:justify-start mb-4 sm:mb-20">
            <Button
              href={'#Layanan-Kami'}
              label={'Lihat Layanan Kami'}
              type={'outline'}
              size={'lg'}
            />
            <Button
              href="https://wa.me/6282299299124"
              label={'Booking Sekarang'}
              type={'fill'}
              size={'lg'}
            />
          </div>

          <div className="flex flex-col basis-full lg:basis-1/3 mt-8 sm:mt-20 lg:mt-8 mb-6 ml-0 lg:ml-0 items-center lg:items-end px-4 lg:px-0">
            <div className="flex flex-col gap-6 lg:gap-12">
              <div className="flex flex-col sm:flex sm:flex-row gap-5">
                <div className="flex flex-row gap-5 ">
                  <div className="w-[58px] h-[58px] rounded-xl bg-[#F8F7F7] shadow-sm flex items-center justify-center">
                    <Image
                      src="/hospice_1.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full max-w-[310px]">
                    <h4 className="text-xl text-[#121212] font-bold font-sans">
                      {patient.number}
                    </h4>
                    <p className="text-sm text-[#4A4A4A] font-sans">
                      {patient.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-5 ">
                  <div className="w-[58px] h-[58px] rounded-xl bg-[#F8F7F7] shadow-sm flex items-center justify-center">
                    <Image
                      src="/hospice_1.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full max-w-[310px]">
                    <h4 className="text-xl text-[#121212] font-bold font-sans">
                      {since.number}
                    </h4>
                    <p className="text-sm text-[#4A4A4A] font-sans">
                      {since.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative w-[400px] h-[480px] overflow-hidden rounded-lg">
          {/* Image container with smooth sliding transition */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <Image
                  src={image}
                  alt={`Foto Tim Tentang Kami ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentImage === index ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKamiPage;
