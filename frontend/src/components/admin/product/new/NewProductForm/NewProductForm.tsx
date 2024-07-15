'use client';

import React, { useState } from 'react';

import AdminInputWithLabel from '@/components/admin/shared/AdminInputWithLabel';
import AdminProductSizesInfo from '@/components/admin/shared/AdminProductSizeInfo';
import AdminProductVisibilityRadio from '@/components/admin/shared/AdminProductVisibilityRadio';
import AdminToggleWithBody from '@/components/admin/shared/AdminToggleWithBody';
import type { InputValues } from '@/utilities/types/AdminFormTypes';
import {
  ClothingSizeParts,
  ClothingSizes,
} from '@/utilities/types/AdminFormTypes';

const initialAvailableSizes = Object.keys(ClothingSizes).map((size) => ({
  name: ClothingSizes[size as keyof typeof ClothingSizes],
  value: true,
}));

const initialAvailableClotheSizeParts = Object.keys(ClothingSizeParts).map(
  (sizePart) => ({
    name: ClothingSizeParts[sizePart as keyof typeof ClothingSizeParts],
    value: true,
  })
);

const categories = [
  'T-Shirts',
  'Swearshirts',
  'Long Sleeves',
  'Hoodies',
  'V-Necks',
  'Tank Tops',
  'Polo Shirts',
  'Short Sleeves',
  'Dri-fit',
  'Women',
];

const brands = [
  'Gildan',
  'Hanes',
  'Port & Company',
  'Sport-Tek',
  'Bella + Canvas',
  'Next Level',
  'Anvil',
];

const brandStyle = ['5000', '6004', '12600'];

const initialValues = {
  hasFiberInfo: false,
  fiberInfoItems: [''],
  hasFeaturesInfo: false,
  featureInfoItems: [''],
  isProductVisibleInWebsite: true,
  hasSizeInfo: false,
  availableSizes: initialAvailableSizes,
  availableClotheSizeParts: initialAvailableClotheSizeParts,
  sizesInfo: {
    [ClothingSizes.XS]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.S]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.M]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.LG]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.XL]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['2XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['3XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['4XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['5XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
  },
};

//Product Website Visibility

const NewProductForm = () => {
  const [inputValues, setInputValues] = useState<InputValues>(initialValues);

  return (
    <div className="flex bg-background5 p-16 ml-60">
      <form>
        <div className="flex flex-col w-[70rem] gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-8 flex-grow">
              <div className="flex flex-col gap-4 p-8 rounded bg-background4">
                <AdminInputWithLabel
                  label="Product Name"
                  placeholder="Input the name here"
                />
                <AdminProductVisibilityRadio
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                />
              </div>
              <div className="flex flex-col gap-4 p-8 rounded bg-background4">
                <AdminToggleWithBody
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                  toggleName="hasFiberInfo"
                  toggleLabel="Is info on Fiber shown?"
                  itemsName="fiberInfoItems"
                />
              </div>
              <div className="flex flex-col gap-4 p-8 rounded bg-background4">
                <AdminToggleWithBody
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                  toggleName="hasFeaturesInfo"
                  toggleLabel="Is info on Features shown?"
                  itemsName="featureInfoItems"
                />
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-4 p-8 w-full rounded bg-background4">
                  <p className="font-bold">Prices general data</p>
                  <div className=" pl-2 flex flex-col gap-2">
                    <AdminInputWithLabel label="SKU" bold={false} />
                    <AdminInputWithLabel label="Starting Price" bold={false} />
                    <AdminInputWithLabel label="Sales Price" bold={false} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-8 w-full rounded bg-background4">
                  <p className="font-bold">Prices order data</p>
                  <div className=" pl-2 flex flex-col gap-2">
                    <AdminInputWithLabel
                      label="Minimum Purchase Quantity"
                      bold={false}
                    />
                    <AdminInputWithLabel
                      label="Maximum Purchase Quantity"
                      bold={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[20rem]">
              {/* Categories Section */}
              <div className="max-h-[15rem] p-8 rounded bg-background4">
                <div className="h-full w-full flex flex-col gap-4 overflow-x-auto">
                  <p className="font-bold">Categories</p>
                  <div className=" flex flex-col gap-2">
                    {categories.map((category) => (
                      <div className="flex gap-2" key={category}>
                        <input type="checkbox" className="checkbox" />
                        <p>{category}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand and Style Section */}
              <div className="flex flex-col gap-6 p-8 rounded bg-background4">
                <div className="flex flex-col gap-4">
                  <p className="font-bold">Brand</p>
                  <select className="select w-full">
                    {brands.map((brand) => (
                      <option key={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold">Style</p>
                  <select className="select w-full">
                    {brandStyle.map((style) => (
                      <option key={style}>{style}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded bg-background4">
            <AdminProductSizesInfo
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProductForm;
