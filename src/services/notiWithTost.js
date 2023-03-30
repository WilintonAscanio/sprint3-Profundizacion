import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showNotificationsToasty = (message) => {

  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    stopOnFocus: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: true,
    closeOnHover: true,
    className: "toast-top-right",
  }).showToast();
};
