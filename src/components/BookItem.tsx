"use client";

import { useModalManager } from "@/contexts/ModalManagerContext";
import { Book } from "@/types";

const BookItem = (props: Book) => {
  const { id, title, author, genre, publishedDate } = props;
  const { openEditModal, openDeleteModal } = useModalManager();

  const editBook = () => {
    openEditModal(props);
  };

  return (
    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{id}</td>
      <td className="whitespace-nowrap px-6 py-4">{title}</td>
      <td className="whitespace-nowrap px-6 py-4">{author}</td>
      <td className="whitespace-nowrap px-6 py-4">{genre}</td>
      <td className="whitespace-nowrap px-6 py-4">{publishedDate as string}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <div
          className="px-8 py-2 text-white border bg-blue-500 text-center cursor-pointer"
          onClick={() => editBook()}
        >
          edit
        </div>
        <div
          onClick={() => openDeleteModal(props)}
          className="px-8 py-2 text-white border bg-red-500 text-center cursor-pointer"
        >
          delete
        </div>
      </td>
    </tr>
  );
};

export default BookItem;
