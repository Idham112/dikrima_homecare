import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const GaleriLayananPasien = () => {
  const images = [
    {
      src: '/tentangKamiLogoRelated/testimoni_jamar_jhonson.jpeg',
      alt: 'Image 1',
      description: 'Infus Vitamin kak @juliaviocdr oleh dr @dimasprdt',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_marison.jpeg',
      alt: 'Image 2',
      description:
        'Stem Cell-Secretome Therapy for Wellness & Fitness oleh dr Dimas',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_milea.jpeg',
      alt: 'Image 3',
      description: 'Infus Vitamin jaj @juliaviocdr oleh dr @dimasprdt',
    },
    {
      src: '/tentangKamiLogoRelated/testinomi_syarla_novia.jpeg',
      alt: 'Image 4',
      description: 'Perawatan Kesehatan Premium di Rumah',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_taufik_hidayat.jpeg',
      alt: 'Image 5',
      description: 'Layanan Homecare Profesional 24 Jam',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_ranti_maria.jpeg',
      alt: 'Image 6',
      description: 'Terapi Kesehatan Holistik di Rumah',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_riza_irsyadillah.jpeg',
      alt: 'Image 7',
      description: 'Perawatan Medis Terpercaya dan Nyaman',
    },
    {
      src: '/tentangKamiLogoRelated/testimoni_denny_cagur.jpeg',
      alt: 'Image 8',
      description: 'Solusi Kesehatan Keluarga di Rumah',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="ml-4 md:ml-20 flex justify-center items-center mt-30 mb-8">
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
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
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
        </Marquee>
      </div>

      {/* Mobile Marquee */}
      <div className="block md:hidden w-full">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
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
        </Marquee>
      </div>
    </div>
  );
};

export default GaleriLayananPasien;
