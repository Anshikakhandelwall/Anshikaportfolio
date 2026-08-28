import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anshika Khandelwal — Developer, AI & Data',
  description:
    'Anshika Khandelwal is a developer, AI/ML explorer, and builder. She creates intelligent applications at the intersection of AI, data, and design.',
  keywords: ['Anshika Khandelwal', 'Developer', 'AI', 'Machine Learning', 'Data', 'Portfolio', 'React', 'Next.js'],
  authors: [{ name: 'Anshika Khandelwal' }],
  openGraph: {
    title: 'Anshika Khandelwal — Developer, AI & Data',
    description: 'Developer building at the intersection of AI, data & design.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Anshika Khandelwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anshika Khandelwal — Developer, AI & Data',
    description: 'Developer building at the intersection of AI, data & design.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
