// src/components/Hero/HeroSection.tsx
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import * as styles from "./HeroSection.css";

// GSAP 플러그인 등록
gsap.registerPlugin(TextPlugin);

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);

  const slogans = [
    "Engineer for both users and developers.",
    "Fast learner, faster executor.",
    "Believer in the power of collaboration.",
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  // 초기 애니메이션
  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        sloganRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  // 슬롯 머신 효과
  useEffect(() => {
    if (!sloganRef.current) return;

    const interval = setInterval(() => {
      const nextSlogan = (currentSlogan + 1) % slogans.length;

      // 글자가 슬롯 머신처럼 내려가는 애니메이션
      const tl = gsap.timeline();
      tl.to(sloganRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setCurrentSlogan(nextSlogan);
          gsap.fromTo(
            sloganRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        },
      });
    }, 3000); // 3초마다 변경

    return () => clearInterval(interval);
  }, [currentSlogan, slogans]);

  return (
    <div className={styles.heroSection} ref={containerRef}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <p ref={nameRef} className={styles.mainHeading}>
            Hi, I'm Jun
          </p>
          <p ref={roleRef} className={styles.subHeading}>
            Full Stack Developer
          </p>

          <p ref={sloganRef} className={styles.slogan}>
            {slogans[currentSlogan]}
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </div>
  );
};
