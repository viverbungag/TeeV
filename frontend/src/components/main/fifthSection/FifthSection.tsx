import Carousel from '@/components/main/fifthSection/carousel/Carousel';
import Button from '@/components/shared/Button';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Oswald from '@/utilities/fonts/oswald/oswald';
import Image from 'next/image';
import React from 'react';

const reviews = [
  {
    title: 'I would highly recommend Tee Vision Printing',
    content:
      'They offered a really quick turn around time, helped redraw my designs and were very communicative throughout the entire process. The shirts turned out amazing!!',
    authorName: 'Elli',
    authorDescription: 'CRO APO',
    imageSrc: '/main/fifthSection/Elli.png',
  },
  {
    title: 'Excellent Customer Service',
    content:
      'Thank you to everyone at Tee Vision Printing for making Beet Dude come to life! Not only did our t-shirts turn out great- honestly they really blew us away- but the digital images really honored the original artwork.',
    authorName: 'Nicole Hehn',
    authorDescription: 'Beet Dude',
    imageSrc: '/main/fifthSection/Beet Dude.png',
  },
  {
    title: 'Use These Guys!',
    content:
      'I have purchased twice already from Tee Vision Printing even after the first order had a snafu.  So why did I chance it again? I did so because Benji and Darko made everyting right at a near-immediate pace and without any comment other than, "We are so sorry.  Let us make it right!"',
    authorName: 'Stuart Margel',
    authorDescription: 'The Standard',
    imageSrc: '/main/fifthSection/The Standard.png',
  },
  {
    title: 'Tee Vision was a pleasure to work with.',
    content:
      'From a customer service perspective, they always responded quickly and accommodated any requests I had. They completed all my projects in a timely manner and the quality of the printing was very high. Would recommend to anyone looking to make custom shirts in the Philadelphia area!',
    authorName: 'Spencer Lovejoy',
    authorDescription: 'LoveJoy',
    imageSrc: '/main/fifthSection/LoveJoy.png',
  },
  {
    title: 'They made the best shirts for our school team!',
    content:
      'Communication was timely and they took the time to adjust our designs and answer questions- always in a kind and patient way.  We would absolutely use them again! Thanks Benji, Darko & Team!!',
    authorName: 'Dana Feldman',
    authorDescription: 'Cabin John Middle School',
    imageSrc: '/main/fifthSection/Cabin John Middle School.png',
  },
  {
    title: 'Very Personable and Professional company.',
    content:
      'They always do a great job on our t-shirts for the University and for our charity events.  Have been using them for years and will continue to use them in the future.  Great work!!',
    authorName: 'Michael Huber',
    authorDescription: 'Arcadua University',
    imageSrc: '/main/fifthSection/Arcadia University.png',
  },
];

const FifthSection = () => {
  return (
    <section className="flex flex-col items-center pb-20 pt-12">
      <div className="flex flex-col lg:flex-row w-fit">
        <div className="flex flex-col gap-4 w-[20rem] sm:w-[30rem] bg-background2 p-8 lg:rounded-tr-none rounded-t-2xl lg:rounded-l-2xl">
          <h2
            className={`${Oswald.className} text-white relative text-[2rem] font-bold leading-tight`}
          >
            TURN YOUR COMPANY INTO A BRAND
          </h2>
          <p
            className={`${Coolvetica.className} text-white relative text-[1.3rem] mb-4`}
          >
            Transform your business into a brand seamlessly. From rebranding to
            designing and printing, we've got it covered. Focus on what you do
            best while we handle the heavy lifting.
          </p>
          <Button styleType="primary">TALK TO A DESIGNER</Button>
        </div>
        <Image
          src="/main/fifthSection/genosSteaks.png"
          width={400}
          height={300}
          alt="Geno's Steaks"
          className="lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl w-[20rem] sm:w-[30rem] lg:w-[400px]"
        />
      </div>
      <div className="flex flex-col mt-12">
        <h2
          className={`${IntegralCF.className} text-black relative sm:text-[2rem] text-[1.8rem] font-bold leading-tight text-center px-4`}
        >
          CUSTOMER <span className="block">REVIEWS</span>
        </h2>
        <Carousel contents={reviews} />
      </div>
    </section>
  );
};

export default FifthSection;
