import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://waqadarshad.github.io/portfolio'),
  title: 'Saif Ullah Flutter Developer',
  description: 'Portfolio of Saif Ullah – Senior Flutter Developer',
  // description: "Waqad's Portfolio",
  // title: "Waqad Arshad | Flutter Developer Portfolio",
  // description: "Portfolio of Waqad Arshad – Senior Flutter Developer. Explore my projects, skills, and experience in cross-platform mobile and web app development.",
  keywords: [
    'Flutter Developer',
    'Dart',
    'React',
    'Node.js',
    'Mobile Apps',
    'Hybrid Apps',
    'Web Apps',
    'Cross-platform Development',
    'Firebase',
    'Portfolio',
  ],
  authors: [{ name: 'Waqad Arshad', url: 'https://waqadarshad.github.io/portfolio/' }],
  openGraph: {
    title: 'Waqad Arshad | Flutter Developer Portfolio',
    description:
      'Explore my projects, skills, and experience in cross-platform mobile and web app development.',
    url: 'https://waqadarshad.github.io/portfolio/',
    siteName: 'Waqad Arshad Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Waqad Arshad Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waqad Arshad | Flutter Developer Portfolio',
    description:
      'Explore my projects, skills, and experience in cross-platform mobile and web app development.',
    creator: '@waqad_arshad', // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
