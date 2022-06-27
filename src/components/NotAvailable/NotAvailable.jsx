import React, { useLayoutEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 *
 * @param {object} props
 * @param {function(boolean):void} props.resetToast
 * @returns
 */
const NotAvailable = ({ resetToast }) => {
  useLayoutEffect(() => {
    toast.info("Default Notification !", {
      onClose: () => resetToast(false),
    });
  }, []);

  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      theme="light"
      draggable
      pauseOnHover
    />
  );
};

export { NotAvailable };
