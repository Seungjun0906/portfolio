import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import * as styles from "./ProjectSection.css";

export const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  // 초기 애니메이션
  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      messageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.projectSection} ref={containerRef}>
      <div className={styles.projectContent}>
        <p ref={headingRef} className={styles.sectionHeading}>
          Projects
        </p>
        <p ref={messageRef} className={styles.preparingMessage}>
          Exciting projects in development
        </p>
      </div>
    </div>
  );
};
