import { useEffect, useRef } from "react";

const EMOJIS = ["✨", "🌟", "💫", "🌈", "💥", "💖", "💘", "💝", "💞", "💟"];

const MouseTrailProvider = ({ children }: { children: React.ReactNode }) => {
  const lastCreatedRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const delta = now - lastCreatedRef.current;

      if (delta < 10) return;
      lastCreatedRef.current = now;

      const emoji = document.createElement("div");
      emoji.textContent = EMOJIS[1]; // 고정된 이모지 사용 중
      // emoji.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      emoji.style.position = "fixed";
      emoji.style.left = `${e.clientX}px`;
      emoji.style.top = `${e.clientY}px`;
      emoji.style.pointerEvents = "none";
      emoji.style.fontSize = "20px";
      emoji.style.zIndex = "9999";
      emoji.style.opacity = "1";
      emoji.style.transition = "transform 1s ease, opacity 1s ease";
      emoji.style.transform = `translate(-50%, -50%)`;

      document.body.appendChild(emoji);

      requestAnimationFrame(() => {
        emoji.style.transform += ` translateY(-40px) rotate(${
          Math.random() * 360
        }deg) scale(1.2)`;
        emoji.style.opacity = "0";
      });

      setTimeout(() => {
        emoji.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <>{children}</>;
};

export default MouseTrailProvider;
