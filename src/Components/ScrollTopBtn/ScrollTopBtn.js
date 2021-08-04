import React, { useState } from "react";
import "./ScrollTopBtn.css";

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div>
      {isVisible && (
        <a onClick={scrollToTop} id="button">
          ^
        </a>
      )}
      
    </div>
  );
};

export default ScrollTopBtn;
