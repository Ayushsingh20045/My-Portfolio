import { useEffect, useState } from "react";

 function useScrollToTop(threshold) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY>threshold)
    };

    window.addEventListener("scroll", handleScroll);

    //cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  //scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return{showButton,scrollToTop}
}

export default useScrollToTop;