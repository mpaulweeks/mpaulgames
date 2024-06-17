import { NavBar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';

const inter = Roboto_Flex({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'M. Paul Games',
  description: '🍋🕹️',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
