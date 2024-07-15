import React, { useEffect, useRef, useState } from 'react';

import NewCategoryForm from '@/components/admin/category/new/NewCategoryForm/NewCategoryForm';

const AdminCategories = () => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="btn"
      >
        Add a Category
      </button>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box w-fit">
          <form method="dialog">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <NewCategoryForm />
        </div>
      </dialog>
    </div>
  );
};

export default AdminCategories;
