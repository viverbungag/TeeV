import FirstSection from '@/components/main/firstSection/FirstSection';
import SecondSection from '@/components/main/secondSection/SecondSection';
import ThirdSection from '@/components/main/thirdSection/ThirdSection';
import Navigation from '@/components/shared/Navigation/Navigation';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Navigation />

      <NavigationToggle />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
