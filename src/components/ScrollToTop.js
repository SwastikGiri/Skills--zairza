import React from "react";
import { HiArrowUp } from "react-icons/hi2";

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return(
      <button onClick={scrollToTop} className="scrollToTop">
        <HiArrowUp />
      </button>
    )
}

export default ScrollToTop;