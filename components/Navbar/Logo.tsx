'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt='logo'
      className='hidden cursor-pointer md:block'
      width={100}
      height={100}
      style={{ width: 'auto', height: 'auto' }}
      src='/images/logo.png'
      priority
    />
  );
};

export default Logo;
