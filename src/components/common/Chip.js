import React from 'react';
import Image from 'next/image';

function Chip({ label, icon }) {
  return (
    <div
      className={'flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-green'}
    >
      <Image width={24} height={24} src={`/icon/${icon}`} alt={''} />
      <span className={'text-white font-medium font-sans text-xs md:text-base'}>
        {label}
      </span>
    </div>
  );
}

export default Chip;
