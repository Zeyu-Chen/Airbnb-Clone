import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import React from 'react';

import './globals.css';

import ClientOnly from '@/components/ClientOnly';
import Modal from '@/components/Modals/Modal';
import RegisterModal from '@/components/Modals/RegisterModal';
import Navbar from '@/components/Navbar/Navbar';
import ToasterProvider from '@/components/Providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Full-stack Airbnb Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
