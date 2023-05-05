import { toast } from "react-toastify";

export const message = (type, mess, pos, time, thm) => {
  toast[type](mess, {
    position: pos,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: thm,
  });
};
