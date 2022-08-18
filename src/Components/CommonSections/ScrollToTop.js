import { useEffect, useState } from "react";
import { is_browser } from "../../common";
import { GlobalImage as Image} from "../GlobalComponents";
 
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    console.log("Entered in Component")
    if (is_browser()) {
      const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, []);

  const scrollToTop = () => {
    if (is_browser()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  console.log("Visible: ", isVisible)

  return (
    <>
      {
        isVisible && (<div className="scroll_to_top clickable" onClick={scrollToTop}><Image src="images/arrow_up.png" />Scroll to Top</div>
        )

      }
    </>
  );
}
