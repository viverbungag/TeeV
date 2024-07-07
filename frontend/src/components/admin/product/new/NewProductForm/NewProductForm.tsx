'use client';

import AdminInputWithLabel from '@/components/admin/shared/AdminInputWithLabel';
import AdminProductVisibilityRadio from '@/components/admin/shared/AdminProductVisibilityRadio';
import AdminToggle from '@/components/admin/shared/AdminToggle';
import AdminToggleWithBody from '@/components/admin/shared/AdminToggleWithBody';
import Add from '@/utilities/SVGs/Add';
import Remove from '@/utilities/SVGs/Remove';
import React, { useState } from 'react';

const initialValues = {
  hasFiberInfo: false,
  fiberInfoItems: [''],
  hasFeaturesInfo: false,
  featureInfoItems: [''],
  isProductVisibleInWebsite: false,
};

//Product Website Visibility

const NewProductForm = () => {
  const [inputValues, setInputValues] = useState<InputValues>(initialValues);

  return (
    <div className="flex items-center justify-center bg-background5 py-8">
      <form className="flex flex-col gap-4 w-[50rem] p-8 rounded bg-background4">
        <AdminInputWithLabel label="Product Name" />
        <AdminProductVisibilityRadio
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
        <AdminToggleWithBody
          inputValues={inputValues}
          setInputValues={setInputValues}
          toggleName="hasFiberInfo"
          toggleLabel="Is info on Fiber shown?"
          itemsName="fiberInfoItems"
        />
        <AdminToggleWithBody
          inputValues={inputValues}
          setInputValues={setInputValues}
          toggleName="hasFeaturesInfo"
          toggleLabel="Is info on Features shown?"
          itemsName="featureInfoItems"
        />
      </form>
    </div>
  );
};

export default NewProductForm;
