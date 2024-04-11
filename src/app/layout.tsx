import AddModal from "@/components/AddModal";
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import ModalManager from "@/components/ModalManager";
import { ModalManagerContextProvider } from "@/contexts/ModalManagerContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalManagerContextProvider>
          <ModalManager>
            <AddModal />
            <EditModal />
            <DeleteModal />
          </ModalManager>
          {children}
        </ModalManagerContextProvider>
      </body>
    </html>
  );
}
