import React from 'react';
import Chip from '@/components/common/Chip';

const listyWhy = [
  {
    icon: 'time.svg',
    label: 'Dikrima Homecare hadir  24 jam',
  },
  {
    icon: 'certificate.svg',
    label: 'Tenaga kesehatan tersertifikasi',
  },
  {
    icon: 'consultant-doctor.svg',
    label: 'Konsultasi gratis terkait medis sebelum dan pasca layanan',
  },
  {
    icon: 'facility.svg',
    label: 'Fasilitas lengkap sesuai dengan kebutuhan Anda',
  },
];

function WhySection() {
  return (
    <section className={'max-w-[1024px] mx-auto mt-16'}>
      <h2
        className={
          ' font-bold  text-dark-green text-center font-serif mb-6 text-2xl leading-[125%] md:text-3xl'
        }
      >
        Kenapa Memilih Dikrima Homecare
      </h2>
      <div className={'flex flex-wrap gap-3 justify-center'}>
        {listyWhy.map((item) => (
          <Chip key={item.name} label={item.label} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

export default WhySection;
