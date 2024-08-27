import toast, { Toaster } from "react-hot-toast";
import * as React from "react";
import { FiInfo } from "react-icons/fi";
// success

export const ts = (message: any, isCustom?: boolean, position?: any) => {
  if (isCustom) {
    toast.custom(
      <div className="bg-white border-l-4 border-indigo-500 text-sm pt-3 pb-3 pl-4 pr-4 capitalize rounded text-black shadow-2xl">
        {message}
      </div>,
      {
        position: position ? position : "bottom-left",
      }
    );
  } else {
    toast.success(message);
  }
};

// error

export const te = (message: any) => {
  toast.error(message, {
    style: {
      maxWidth: 650,
      wordBreak: "break-word",
    },
  });
};

export const ti = (message: any) => {
  toast(message, {
    position: "top-right",
    icon: <FiInfo />,
    iconTheme: {
      primary: "#FF0000",
      secondary: "#fff",
    },
    style: {
      maxWidth: 500,
    },
  });
};
