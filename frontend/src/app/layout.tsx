import { Slide, ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';

import Providers from '@/app/Providers';

// eslint-disable-next-line no-restricted-imports
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <Providers>
        <body>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
          {children}
        </body>
      </Providers>
    </html>
  );
}
