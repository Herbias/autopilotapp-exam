"use client";

import { useModalManager } from "@/contexts/ModalManagerContext";
import { DeleteBook } from "@/supabase/client";
import { Book } from "@/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const DeleteModal = () => {
  const { deleteModalOpen, closeDeleteModal, data } = useModalManager();

  const methods = useForm({
    defaultValues: data,
  });

  const close = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    closeDeleteModal();
  };

  const submit = async (data: Book) => {
    const { status } = await DeleteBook(data);
    if (status === 204) {
      window.location.href = "";
      closeDeleteModal();
    }
  };

  if (!deleteModalOpen) return;

  return (
    <div className="fixed inset-0 flex items-center border">
      <div className="m-auto rounded-2xl p-px">
        <div className="p-4 h-full w-full rounded-2xl bg-white border">
          <div className="text-3xl text-center">Delete book</div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data: Book) => submit(data))}>
              <div className="space-x-2">
                <div>{`Proceed deleting ${data.title}`}</div>
                <button className="py-4 px-8 bg-green-500 text-white mx-auto">
                  Submit
                </button>
                <button
                  onClick={(event) => close(event)}
                  className="py-4 px-8 bg-red-500 text-white mx-auto"
                >
                  Close
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
