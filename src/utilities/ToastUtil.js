import { toast } from "react-toastify";

/**
 * @module ToastUtil
 * Provides the functions to show different Toasts. The more at: https://fkhadra.github.io/react-toastify/introduction/
 */

/**
 * Shows a Toast indicating that the clicked option is not implemented yet.
 * @returns {void}
 */
const showNotAvailableToast = () => {
  toast.info("This option is not implemented yet.", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: undefined,
    rtl: false,
    theme: "light",
  });
};

/**
 *
 * @param {string} strMessage
 * @param {number} [fltDuration=1.5] - Duration in seconds.
 * @returns {void}
 */
const showCustomTextToast = (strMessage, fltDuration = 1.5) => {
  toast.info(strMessage, {
    position: "top-center",
    autoClose: fltDuration * 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: undefined,
    rtl: false,
    theme: "light",
  });
};

/**
 * Shows a Toast indicating that the page is just a clone of the original Linkedin.
 * @returns {void}
 */
const showOveralWarning = () => {
  toast.error(
    "This page is not the original Linkedin, it was created for personal purposes. Please, do not enter valid passwords.",
    {
      position: "top-center",
      autoClose: 11000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      rtl: false,
      theme: "light",
    }
  );
};

const showResponsiveWarning = () => {
  toast.error("To see the responsive version, please reload the web :)", {
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: true,
    progress: undefined,
    rtl: false,
    theme: "light",
  });
};
export {
  showNotAvailableToast,
  showCustomTextToast,
  showOveralWarning,
  showResponsiveWarning,
};
