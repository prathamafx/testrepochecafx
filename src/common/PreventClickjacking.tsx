import React, { useEffect } from "react";

const PreventClickjacking = () => {
  useEffect(() => {
    // const isInIframe = window !== window.top;
    try {
      if (window.top && window.top !== window.self) {
        window.top.location.href = window.self.location.href;
      }
    } catch (error) {
      console.error("Failed to access top window:", error);
    }
  }, []);

  return null;
};

export default PreventClickjacking;
