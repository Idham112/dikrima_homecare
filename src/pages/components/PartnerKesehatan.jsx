import Image from 'next/image';
import Marquee from 'react-fast-marquee';

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
    <div className="text-black flex flex-col md:flex-row lg:flex-row mt-30 mx-0 md:mx-20">
      <h2 className="mr-0 text-[#3D5f5A] md:mr-30 text-[20px] md:text-2xl w-full md:w-[196px] mb-6 md:mb-0 text-center md:text-left">
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

      {/* Tablet view - marquee with fixed sizes */}
      <div className="hidden md:block lg:hidden w-full">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
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
        </Marquee>
      </div>

      {/* Mobile view - marquee */}
      <div className="block md:hidden w-full">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
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
        </Marquee>
      </div>
    </div>
  );
};

export default PartnerKesehatan;
