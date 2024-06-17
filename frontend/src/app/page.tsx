import FifthSection from '@/components/main/fifthSection/FifthSection';
import FirstSection from '@/components/main/firstSection/FirstSection';
import FourthSection from '@/components/main/fourthSection/FourthSection';
import SecondSection from '@/components/main/secondSection/SecondSection';
import ThirdSection from '@/components/main/thirdSection/ThirdSection';
import NavigationHeader from '@/components/shared/Navigation/NavigationHeader';
import NavigationToggle from '@/components/shared/Navigation/NavigationToggle/NavigationToggle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <main>
      <NavigationHeader />
      <NavigationToggle />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </main>
  );
}
