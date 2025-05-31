import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function LogoFooter() {
  return (
    <Link href={'/'}>
      <Image
        src={'/logo-dikrima.png'}
        className={'h-32 w-42'}
        width={134}
        height={100}
        alt={'logo'}
      />
    </Link>
  );
}

export default LogoFooter;
