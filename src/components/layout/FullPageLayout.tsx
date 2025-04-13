import { useScroll } from "@/providers/ScrollProvider";
import { ReactNode, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseTrailProvider from "@/providers/MouseTrailProvider";

export const FullPageLayout = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lenis } = useScroll();

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(".section");

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        onEnter: () => lenis?.scrollTo(section, { immediate: false }),
        onEnterBack: () => lenis?.scrollTo(section, { immediate: false }),
        markers: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lenis]);

  return <div>{children}</div>;
};
