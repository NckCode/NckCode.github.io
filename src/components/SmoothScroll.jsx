import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SmoothScroll = ({ children }) => {
  const contentRef = useRef(null);
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: 0, autoKill: false },
      ease: "power2.out"
    });
  }, [location]);

  return (
    <div ref={contentRef} className="min-h-screen">
      {children}
    </div>
  );
};

export default SmoothScroll; 