import Instagram from '@/utilities/SVGs/Instagram';
import Linkedin from '@/utilities/SVGs/Linkedin';
import Coolvetica from '@/utilities/fonts/coolvetica/coolvetica';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Image from 'next/image';
import React from 'react';

const footerContents = [
  {
    header: 'Services',
    links: [
      { name: 'Request a Quote', link: '#' },
      { name: 'Screen Printing', link: '#' },
      { name: 'Embroidery', link: '#' },
      { name: 'Direct to Garment Printing', link: '#' },
      { name: 'Design Service', link: '#' },
      { name: 'Branding Services', link: '#' },
    ],
  },
  {
    header: 'Products',
    links: [
      { name: 'All Products', link: '#' },
      { name: 'Hoodies', link: '#' },
      { name: 'T-shirts', link: '#' },
      { name: 'Sweatshirts', link: '#' },
      { name: 'Hats', link: '#' },
      { name: 'Tote Bags', link: '#' },
    ],
  },
  {
    header: 'About Us',
    links: [
      { name: 'Meet Our Team', link: '#' },
      { name: 'Blogs', link: '#' },
      { name: 'FAQs', link: '#' },
      { name: 'Return Policy', link: '#' },
      { name: 'Terms and Conditions', link: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-center bg-secondaryT py-[2rem]">
      <div className="md:w-[50rem] flex md:flex-row gap-8 flex-col md:justify-between text-center md:text-left">
        <div className="flex flex-col gap-2">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
          <div className={`${Coolvetica.className} text-white pl-2`}>
            <p>
              920 E Hunting Park Ave
              <span className="block">Philadelphia, PA 19124, USA</span>
              <span className="block">info@teevisionprinting.com</span>
              <span className="block">(267) 538-5331</span>
            </p>
          </div>
          <div className="flex md:justify-start justify-center gap-2 pl-2">
            <Instagram width={26} height={32} />
            <Linkedin width={26} height={32} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {footerContents.map((content) => (
            <div className="flex flex-col gap-4">
              <h3
                className={`${IntegralCF.className} text-primaryT text-[1.3rem]`}
              >
                {content.header}
              </h3>
              <div className={`${Coolvetica.className} text-white`}>
                {content.links.map((link) => (
                  <p>{link.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
