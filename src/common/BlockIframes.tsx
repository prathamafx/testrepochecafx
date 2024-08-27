import React from "react";

const BlockIframes = ({ children }) => {
  const checkForIframes = () => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    });
  };

  React.useEffect(() => {
    checkForIframes();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default BlockIframes;
