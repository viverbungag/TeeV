import type { Metadata } from 'next';
import './globals.css';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import Oswald from '@/utilities/fonts/oswald/oswald';
import Providers from '@/app/Providers';
import ConfigureAmplifyClientSide from '@/app/amplify/amplify-config';
import { Slide, ToastContainer } from 'react-toastify';
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
