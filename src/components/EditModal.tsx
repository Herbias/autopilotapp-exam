"use client";

import { useModalManager } from "@/contexts/ModalManagerContext";
import { UpsertBook } from "@/supabase/client";
import { Book } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import DatePicker from "react-datepicker";
import { Controller, FormProvider, useForm } from "react-hook-form";
import TextInput from "./TextInput";

const EditModal = () => {
  const router = useRouter();
  const { editModalOpen, closeEditModal, data } = useModalManager();

  const methods = useForm({
    defaultValues: data,
  });

  const close = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    closeEditModal();
  };

  const submit = async (data: Book) => {
    const { status } = await UpsertBook(data);
    if (status === 200) {
      window.location.href = "";
      closeEditModal();
    }
  };

  if (!editModalOpen) return;

  return (
    <div className="fixed inset-0 flex items-center border">
      <div className="m-auto rounded-2xl p-px">
        <div className="p-4 h-full w-full rounded-2xl bg-white border">
          <div className="text-3xl text-center">Edit book</div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data: Book) => submit(data))}>
              <div className="space-y-2">
                <TextInput inputName="title" />
                <TextInput inputName="author" />
                <TextInput inputName="genre" />
                <Controller
                  control={methods.control}
                  name="publishedDate"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                      className="border"
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value as any}
                      placeholderText="Published Date"
                    />
                  )}
                />
                <div className="space-x-2">
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
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
