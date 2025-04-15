import Lenis from "lenis";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext<{ lenis: Lenis | null }>({ lenis: null });

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 부드러운 easing
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 2,
      wheelMultiplier: 1,
      syncTouch: true,
      touchInertiaMultiplier: 3.5,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger 설정
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    let lastScrollY = 0;
    let ticking = false;

    lenisInstance.on("scroll", ({ scroll }) => {
      lastScrollY = scroll;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 50) {
            document.body.classList.add("scrolled-down");
          } else {
            document.body.classList.remove("scrolled-down");
          }
          ticking = false;
        });

        ticking = true;
      }

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile && lastScrollY > 50) {
        document.body.style.touchAction = "none";
      } else if (isMobile) {
        document.body.style.touchAction = "auto";
      }
    });

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(() => {});
      document.body.style.touchAction = "auto";
      document.body.classList.remove("scrolled-down");
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
