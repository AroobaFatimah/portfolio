import type { Metadata } from 'next';
import { Great_Vibes, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arooba Fatima | Software Engineer',
  description:
    'Full-stack software engineer specializing in React, Next.js, and building scalable products. 3+ years of production experience.',
  keywords: [
    'software engineer',
    'frontend developer',
    'full-stack developer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Arooba Fatima' }],
  creator: 'Arooba Fatima',
  metadataBase: new URL('https://aroobafatima.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aroobafatima.com',
    title: 'Arooba Fatima | Software Engineer',
    description: 'Building scalable products with purpose.',
    siteName: 'Arooba Fatima',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arooba Fatima - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arooba Fatima | Software Engineer',
    description: 'Building scalable products with purpose.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${greatVibes.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0612" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className="bg-dark text-slate-100 antialiased">{children}</body>
    </html>
  );
}
