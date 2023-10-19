import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './lib/AntdRegistry';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next JS Tutorial App',
  description: 'Next JS tutorial app for learning with youtuber Hitesh.',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;