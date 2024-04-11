"use client";

import { Book } from "@/types";
import { createContext, useContext, useState } from "react";

type ContextType = {
  data: Book;
  addModalOpen: boolean;
  editModalOpen: boolean;
  deleteModalOpen: boolean;
  backdropOpen: boolean;
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (data: Book) => void;
  closeEditModal: () => void;
  openDeleteModal: (data: Book) => void;
  closeDeleteModal: () => void;
};

const ModalManagerContext = createContext<ContextType>({
  data: null as any,
  addModalOpen: false,
  editModalOpen: false,
  deleteModalOpen: false,
  backdropOpen: false,
  sidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  openAddModal: () => {},
  closeAddModal: () => {},
  openEditModal: () => {},
  closeEditModal: () => {},
  openDeleteModal: () => {},
  closeDeleteModal: () => {},
});

export const useModalManager = () => useContext(ModalManagerContext);

export const ModalManagerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [data, setData] = useState<Book>(null as any);

  const openSidebar = () => {
    setBackdropOpen(true);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setBackdropOpen(false);
    setSidebarOpen(false);
  };

  const openAddModal = () => {
    setBackdropOpen(true);
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setBackdropOpen(false);
    setAddModalOpen(false);
  };

  const openEditModal = (data: Book) => {
    setBackdropOpen(true);
    setEditModalOpen(true);
    setData(data);
  };

  const closeEditModal = () => {
    setBackdropOpen(false);
    setEditModalOpen(false);
  };

  const openDeleteModal = (data: Book) => {
    setBackdropOpen(true);
    setDeleteModalOpen(true);
    setData(data);
  };

  const closeDeleteModal = () => {
    setBackdropOpen(false);
    setDeleteModalOpen(false);
  };

  let value = {
    data,
    backdropOpen,
    sidebarOpen,
    addModalOpen,
    editModalOpen,
    deleteModalOpen,
    openSidebar,
    closeSidebar,
    openAddModal,
    closeAddModal,
    openEditModal,
    closeEditModal,
    openDeleteModal,
    closeDeleteModal,
  };

  return (
    <ModalManagerContext.Provider value={value}>
      {children}
    </ModalManagerContext.Provider>
  );
};
