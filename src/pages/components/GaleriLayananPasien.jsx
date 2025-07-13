import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CustomMarquee = ({ children }) => {
  const [isDragging, setIsDragging] = React.useState(false);

  // Clone children and add pointer-events: none to each child
  const childrenWithNoPointer = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      key: `child-${index}`,
      style: {
        ...child.props.style,
        pointerEvents: 'none',
        userSelect: 'none',
      },
    });
  });

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex will-change-transform"
        animate={
          !isDragging
            ? {
                x: [0, -1200],
              }
            : {}
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        drag="x"
        dragConstraints={{ left: -1200, right: 1200 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setTimeout(() => setIsDragging(false), 500);
        }}
        style={{
          cursor: 'grab',
          minWidth: '300%',
        }}
        whileDrag={{
          cursor: 'grabbing',
        }}
      >
        {childrenWithNoPointer}
        {childrenWithNoPointer}
        {childrenWithNoPointer}
      </motion.div>
    </div>
  );
};

const GaleriLayananPasien = () => {
  const images = [
    {
      src: '/tentangKamiLogoRelated/testimoni_jamar_jhonson.jpeg',
      alt: 'Image 1',
      description: 'Jamar Jhonson - Timnas Basket Indonesia',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_marison.jpeg',
      alt: 'Image 2',
      description: 'H.Mafirion - Anggota DPR RI',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_milea.jpeg',
      alt: 'Image 3',
      description: 'Malea Emma - Aktris Indonesia',
    },
    {
      src: '/tentangKamiLogoRelated/testinomi_syarla_novia.jpeg',
      alt: 'Image 4',
      description: 'Syarla & Novia - Top 5 Indonesian Idol',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_taufik_hidayat.jpeg',
      alt: 'Image 5',
      description: 'Taufik Hidayat - Wakil Ketua DPRD Jawa Barat',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_ranti_maria.jpeg',
      alt: 'Image 6',
      description: 'Ranty Maria - Aktris Indonesia',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_riza_irsyadillah.jpeg',
      alt: 'Image 7',
      description: 'Riza Irsyadillah - Aktor Indonesia',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_denny_cagur.jpeg',
      alt: 'Image 8',
      description: 'Denny Cagur - Anggota DPR RI - Komisi X',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="ml-4 md:ml-20 flex justify-center items-center mt-15 md:mt-30 mb-8">
        <h2 className="font-bold text-2xl text-[#3D5f5A] md:text-3xl text-center px-4 md:px-0">
          Galeri Pasien yang Telah Kami Layani
        </h2>
      </div>

      {/* Desktop Gallery Grid */}
      <div className="hidden lg:flex flex-col gap-10">
        {/* First Row */}
        <div className="flex flex-row gap-10 ml-20">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative w-[280px] h-[350px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={280}
                height={350}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Description Box */}
              <div className="absolute bg-white flex items-center justify-center text-gray-800 w-64 h-12 bottom-3 left-3 right-3 rounded-md pt-2 pr-4 pb-2 pl-4">
                <p className="text-sm text-[#4A4A4A] leading-tight overflow-hidden text-center">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-row gap-10 ml-20">
          {images.slice(4, 8).map((image, index) => (
            <div
              key={index + 4}
              className="relative w-[280px] h-[350px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={280}
                height={350}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Description Box */}
              <div className="absolute bg-white flex items-center justify-center text-gray-800 w-64 h-12 bottom-3 left-3 right-3 rounded-md pt-2 pr-4 pb-2 pl-4">
                <p className="text-sm leading-tight overflow-hidden text-center">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Marquee */}
      <div className="hidden md:block lg:hidden w-full">
        <CustomMarquee>
          {images.map((image, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <div className="relative w-60 h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={240}
                  height={300}
                  className="w-full h-full object-cover w-60 h-[300px]"
                />
                {/* Description Box */}
                <div className="absolute bg-white flex items-center justify-center text-gray-800 w-[216px] h-12 bottom-3 left-3 right-3 rounded-md pt-2 pr-4 pb-2 pl-4">
                  <p className="text-xs leading-tight overflow-hidden text-center">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CustomMarquee>
      </div>

      {/* Mobile Marquee */}
      <div className="block md:hidden w-full">
        <CustomMarquee>
          {images.map((image, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <div className="relative w-[200px] h-[250px] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={250}
                  className="w-full h-full object-cover w-[200px] h-[250px]"
                />
                {/* Description Box */}
                <div className="absolute bg-white flex items-center justify-center text-gray-800 w-44 h-10 bottom-3 left-3 right-3 rounded-md pt-2 pr-4 pb-2 pl-4">
                  <p className="text-xs leading-tight overflow-hidden text-center">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CustomMarquee>
      </div>
    </div>
  );
};

export default GaleriLayananPasien;
