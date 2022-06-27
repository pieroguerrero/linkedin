import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 *
 * @param {object} props
 * @param {string} props.className
 * @param {JSX.Element[]} props.children
 * @returns
 */
const ButtonNotAvailable = ({ children, className }) => {
  const handleClick = () => {
    toast.info("This option is not implemented yet.");
  };

  return (
    <>
      <button className={className} type="button" onClick={handleClick}>
        {children}
      </button>

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
      />
    </>
  );
};

export { ButtonNotAvailable };
