'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useQuery } from '@tanstack/react-query';

import PriceForEachSizeSection from '@/components/admin/product/new/NewProductForm/PriceForEachSizeSection/PriceForEachSizeSection';
import AdminInputWithLabel from '@/components/admin/shared/AdminInputWithLabel';
import AdminProductFileUploader from '@/components/admin/shared/AdminProductFileUploader/AdminProductFileUploader';
import AdminProductPackagingType from '@/components/admin/shared/AdminProductPackagingType';
import AdminProductSizesInfo from '@/components/admin/shared/AdminProductSizeInfo';
import AdminProductVisibilityRadio from '@/components/admin/shared/AdminProductVisibilityRadio';
import AdminToggleWithBody from '@/components/admin/shared/AdminToggleWithBody';
import { fetchCategories } from '@/utilities/fetch/category';
import { createProduct, uploadProductImages } from '@/utilities/fetch/product';
import type { InputValues } from '@/utilities/types/AdminFormTypes';
import {
  ClothingSizeParts,
  ClothingSizes,
} from '@/utilities/types/AdminFormTypes';
import type { Category } from '@/utilities/types/shared.types';

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

// const categories = [
//   'Short Sleeve',
//   'Long Sleeve',
//   'Polo',
//   'Performance',
//   'Long sleeve Polo',
//   'Tote Bag',
//   'Hoodie',
//   'Crewneck',
//   'Hats',
//   'Beanies',
//   'Ladies Shirts',
//   'Toddler Tees',
//   'Tank Tops',
//   'Pajama',
// ];

const brands = [
  'AS Colour',
  'Bella + Canvas',
  'Boxercraft',
  'District',
  'Gildan',
  'Hanes',
  'Independent',
  'Jerzees',
  'La Apparel',
  'Liberty',
  'Next Level',
  'Nike',
  'Prime Line',
  'Team 365',
  'Tie-Dye',
  'UltraClub',
];

const brandStyle = ['5000', '6004', '12600'];

const initialValues = {
  name: '',
  hasFiberInfo: false,
  fiberInfoItems: [''],
  hasFeaturesInfo: false,
  featureInfoItems: [''],
  isProductVisibleInWebsite: true,
  hasSizeInfo: false,
  availableSizes: initialAvailableSizes,
  availableClotheSizeParts: initialAvailableClotheSizeParts,
  clothePackagingType: 'TSHIRT',
  pricesPerColorOnWhiteClothes: {
    [ClothingSizes.XS]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.S]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.M]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.LG]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.XL]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['2XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['3XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['4XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['5XL']]: {
      markup: 1,
      originalPrice: 0,
    },
  },
  pricesPerColorOnColoredClothes: {
    [ClothingSizes.XS]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.S]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.M]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.LG]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.XL]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['2XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['3XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['4XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['5XL']]: {
      markup: 1,
      originalPrice: 0,
    },
  },
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
  const [featureImage, setFeatureImage] = useState<File[]>([]);
  const [defaultImages, setDefaultImages] = useState<File[]>([]);

  const onFormSubmitSuccess = () => {
    setInputValues(initialValues);
    setFeatureImage([]);
    setDefaultImages([]);
  };

  const categoryQuery = useQuery<Category[]>({
    queryKey: ['categories', 'all'],
    queryFn: () => fetchCategories(),
  });
  const categories = categoryQuery.data;

  const newProductFormOnSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await createProduct(inputValues, onFormSubmitSuccess);
      await uploadProductImages(
        inputValues.name,
        featureImage[0],
        defaultImages
      );
      toast.success('Product created successfully');
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="flex bg-background5 p-16 ml-60">
      <form onSubmit={newProductFormOnSubmit}>
        <div className="flex flex-col w-[70rem] gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-8 flex-grow">
              <div className="flex flex-col gap-4 p-8 rounded bg-background4">
                <AdminInputWithLabel
                  label="Product Name"
                  placeholder="Input the name here"
                  name="name"
                  inputValues={inputValues}
                  setInputValues={setInputValues}
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
              <div className="p-8 rounded bg-background4">
                <AdminProductPackagingType
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[20rem]">
              {/* Categories Section */}
              <div className="max-h-[15rem] p-8 rounded bg-background4">
                <div className="h-full w-full flex flex-col gap-4 overflow-x-auto">
                  <p className="font-bold">Categories</p>
                  <div className=" flex flex-col gap-2">
                    {categories?.map((category) => (
                      <div className="flex gap-2" key={category.name}>
                        <input type="checkbox" className="checkbox" />
                        <p>{category.name}</p>
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
          <div className="flex gap-4">
            <div className="w-full p-8 rounded bg-background4">
              <PriceForEachSizeSection
                inputValues={inputValues}
                setInputValues={setInputValues}
                pricePerColorType="pricesPerColorOnWhiteClothes"
                headerLabel="Prices for white"
              />
            </div>
            <div className="w-full p-8 rounded bg-background4">
              <PriceForEachSizeSection
                inputValues={inputValues}
                setInputValues={setInputValues}
                pricePerColorType="pricesPerColorOnColoredClothes"
                headerLabel="Prices for colored"
              />
            </div>
          </div>
          <div className="w-full p-8 rounded bg-background4">
            <AdminProductFileUploader
              featureImage={featureImage}
              setFeatureImage={setFeatureImage}
              defaultImages={defaultImages}
              setDefaultImages={setDefaultImages}
            />
          </div>
        </div>
        <button
          className="btn fixed bottom-10 right-10 bg-buttonBackgroundColor border-buttonBackgroundColor"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProductForm;
