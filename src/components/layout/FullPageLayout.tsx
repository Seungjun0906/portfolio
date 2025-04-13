import { useScroll } from "@/providers/ScrollProvider";
import { ReactNode, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const FullPageLayout = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lenis } = useScroll();

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(".section");

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 65%",
        end: "bottom 30%",
        onEnter: () =>
          lenis?.scrollTo(section, {
            offset: 0,
            duration: 1.0,
            immediate: false,
          }),
        onEnterBack: () =>
          lenis?.scrollTo(section, {
            offset: 0,
            duration: 1.0,
            immediate: false,
          }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lenis]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "auto",
      }}
    >
      {children}
    </div>
  );
};
