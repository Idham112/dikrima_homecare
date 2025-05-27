import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <Link href={'/'}>
      <Image
        src={'/logo-dikrima.png'}
        className={'h-20 w-auto'}
        width={134}
        height={100}
        alt={'logo'}
      />
    </Link>
  );
}

export default Logo;
