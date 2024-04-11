"use client";

import { useModalManager } from "@/contexts/ModalManagerContext";
import { AnimatePresence, motion } from "framer-motion";

const ModalManager = ({ children }: { children: React.ReactNode }) => {
  const { backdropOpen } = useModalManager();

  return (
    <>
      <AnimatePresence>
        {backdropOpen && (
          <motion.div
            initial={{ display: "none" }}
            animate={{ display: "block" }}
            exit={{
              display: "none",
              transition: {
                delay: 0.7,
              },
            }}
            className="fixed inset-0 z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="fixed bottom-0 left-0 right-0 top-0 rounded bg-gray-50/40 shadow"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalManager;
