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

const PartnerKesehatan = () => {
  const partners = [
    {
      src: '/tentangKamiLogoRelated/regenic.png',
      alt: 'Regenic',
      width: 217,
      height: 64,
    },
    {
      src: '/tentangKamiLogoRelated/kalbe.png',
      alt: 'Kalbe',
      width: 116,
      height: 64,
    },
    {
      src: '/tentangKamiLogoRelated/biofarma.png',
      alt: 'Biofarma',
      width: 132,
      height: 64,
    },
    {
      src: '/tentangKamiLogoRelated/prodia.png',
      alt: 'Prodia',
      width: 90,
      height: 72,
    },
  ];

  return (
    <div className="text-black flex flex-col md:flex-row lg:flex-row mt-15 md:mt-30 mx-0 md:mx-20">
      <h2 className="font-bold mr-0 text-[#3D5f5A] md:mr-30 text-[20px] md:text-2xl w-full md:w-[196px] mb-6 md:mb-0 text-center md:text-left">
        Partner Kesehatan Kami
      </h2>

      {/* Desktop view - keep existing style */}
      <div className="hidden lg:flex flex-row gap-20">
        {partners.map((partner, index) => (
          <div key={index}>
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
            />
          </div>
        ))}
      </div>

      {/* Tablet view - custom marquee */}
      <div className="hidden md:block lg:hidden w-full">
        <CustomMarquee>
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                }}
              />
            </div>
          ))}
        </CustomMarquee>
      </div>

      {/* Mobile view - custom marquee */}
      <div className="block md:hidden w-full">
        <CustomMarquee>
          {partners.map((partner, index) => (
            <div key={index} className="mx-6 flex-shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                }}
              />
            </div>
          ))}
        </CustomMarquee>
      </div>
    </div>
  );
};

export default PartnerKesehatan;
