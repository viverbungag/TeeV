import React from 'react';

import SideBarCheckboxes from '@/components/products/ProductPageBody/SideBar/SideBarCheckboxes';
import SideBarItems from '@/components/products/ProductPageBody/SideBar/SideBarItems';
import Oswald from '@/utilities/fonts/oswald/oswald';

const categories = [
  'T-Shirts',
  'Tank Tops',
  'Sweatshirts',
  'Hoodies',
  'Hats and Bags',
  'Pants',
  "Women's Apparel",
  'Youth Apparel',
  'Promotional Products',
];

const colors = [
  'FF3131',
  'FF914D',
  'FFCD00',
  '47C363',
  '00A9E0',
  '0057B8',
  'A757A8',
  'F7A8B8',
  '231F20',
];

const bodyTypes = ['Men/Unisex', 'Women', 'Youth'];

// const materials = [
//   'Cotton',
//   'Cotton/Poly Blend',
//   'Tri-Blend',
//   'Fleece',
//   'Other',
// ];

const brands = [
  'AS Colour',
  'Allmade',
  'Alternative Apparel',
  'Bella+Canvas',
  'Champion',
  'Comfort Colors',
  'District',
  'Gildan',
  'Hanes',
  'Independent Trading Co.',
  'Lane Seven',
  'Los Angeles Apparel',
  'Nike',
  'Port Authority',
];

const collections = ['Popular Pics', 'Eco-Friendly Options', 'Made in USA'];

const SideBar = () => {
  return (
    <div
      className={`${Oswald.className} h-full relative hidden sm:flex flex-col w-[15rem] pt-24 pb-4 pr-4 gap-8 border-r-2 overflow-y-auto`}
    >
      <SideBarItems title="All Products">
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
      </SideBarItems>
      <SideBarItems title="Colors">
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color}
              className={`min-w-4 min-h-4 rounded`}
              style={{ backgroundColor: `#${color}` }}
            />
          ))}
        </div>
      </SideBarItems>
      <SideBarItems title="Body Type">
        <SideBarCheckboxes items={bodyTypes} />
      </SideBarItems>
      <SideBarItems title="Brands">
        <SideBarCheckboxes items={brands} />
      </SideBarItems>
      <SideBarItems title="Collection">
        <SideBarCheckboxes items={collections} />
      </SideBarItems>
    </div>
  );
};

export default SideBar;
