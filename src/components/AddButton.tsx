"use client";

import { useModalManager } from "@/contexts/ModalManagerContext";

const AddButton = () => {
  const { openAddModal } = useModalManager();
  return (
    <button
      className="px-8 py-4 bg-green-500 text-white cursor-pointer"
      onClick={() => openAddModal()}
    >
      Add Book
    </button>
  );
};

export default AddButton;
