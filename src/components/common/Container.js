import React from 'react';
import Image from 'next/image';

function Container({ children }) {
  return (
    <div
      className={
        'w-full bg-light-green px-4 pb-[180px] relative overflow-hidden rounded-bl-4xl rounded-br-4xl'
      }
    >
      {children}
      <Image
        src={'/bg-bottom.png'}
        alt={''}
        width={2454}
        height={150}
        className={'absolute left-0 bottom-0 w-full h-[40px] md:h-[88px]'}
      />
    </div>
  );
}

export default Container;
