import Navigation from '@/components/shared/Navigation/Navigation';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${IntegralCF.className}`}>helo</h1>
    </main>
  );
}
