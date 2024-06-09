import type { Metadata } from 'next';
import './globals.css';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Oswald from '@/utilities/fonts/oswald/oswald';
export const metadata: Metadata = {
  title: 'TeeVisionPrinting',
  description: 'A printing company that specializes in custom t-shirts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
