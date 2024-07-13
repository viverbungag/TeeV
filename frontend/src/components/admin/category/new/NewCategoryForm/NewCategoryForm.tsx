import React from 'react';

const NewCategoryForm = () => {
  return (
    <div className="w-[20rem]">
      <form className="flex flex-col gap-4 items-center justify-center p-4">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Category name"
        />
        <button className="btn">Add Category</button>
      </form>
    </div>
  );
};

export default NewCategoryForm;
