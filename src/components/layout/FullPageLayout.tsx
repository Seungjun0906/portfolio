import { useScroll } from "@/providers/ScrollProvider";
import { ReactNode, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const FullPageLayout = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { lenis } = useScroll();

  /**
   * 의도대로 작동하지 않음
   * 원인 파악까지 주석처리
   */

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const sections = gsap.utils.toArray<HTMLElement>(".section");

  //   sections.forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top 90%",
  //       end: "bottom 10%",
  //       onEnter: () =>
  //         lenis?.scrollTo(section, {
  //           offset: 0,
  //           duration: 1.0,
  //           immediate: false,
  //         }),
  //       onEnterBack: () =>
  //         lenis?.scrollTo(section, {
  //           offset: 0,
  //           duration: 1.0,
  //         }),
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [lenis]);

  return <main ref={containerRef}>{children}</main>;
};
