import React from 'react';
import { motion } from 'framer-motion';

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          ></motion.div>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg p-4 z-50"
          >
            {children}
          </motion.div>
        </>
      )}
    </>
  );
};

export default Modal;