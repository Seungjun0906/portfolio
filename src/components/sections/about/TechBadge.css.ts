import { keyframes, style } from "@vanilla-extract/css";

const pulseGlow = keyframes({
  "0%": {
    boxShadow:
      "0 6px 10px rgba(0,0,0,0.15), 0 -2px 0 rgba(255,255,255,0.4) inset, 0 2px 8px rgba(0,0,0,0.2) inset",
  },
  "50%": {
    boxShadow:
      "0 6px 10px rgba(0,0,0,0.15), 0 -2px 0 rgba(255,255,255,0.4) inset, 0 2px 8px rgba(0,0,0,0.2) inset, 0 0 8px rgba(255,255,255,0.5)",
  },
  "100%": {
    boxShadow:
      "0 6px 10px rgba(0,0,0,0.15), 0 -2px 0 rgba(255,255,255,0.4) inset, 0 2px 8px rgba(0,0,0,0.2) inset",
  },
});

export const badge = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.6rem 1rem",
  borderRadius: "8px",
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "0.9rem",
  width: "100%",
  height: "40px",
  textAlign: "center",
  position: "relative",
  transition: "all 0.3s ease",

  // 3D 효과 주기
  boxShadow:
    "0 6px 10px rgba(0,0,0,0.15), 0 -2px 0 rgba(255,255,255,0.4) inset, 0 2px 8px rgba(0,0,0,0.2) inset",
  textShadow: "0px 1px 0px rgba(0,0,0,0.2)",

  // 그라데이션 효과
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.05) 100%)",

  // 항상 기본적인 빛나는 효과
  animation: `${pulseGlow} 3s infinite ease-in-out`,

  ":hover": {
    transform: "translateY(-3px)",
    boxShadow:
      "0 10px 15px rgba(0,0,0,0.15), 0 -2px 0 rgba(255,255,255,0.4) inset, 0 2px 8px rgba(0,0,0,0.15) inset, 0 0 12px rgba(255,255,255,0.6)",
    filter: "brightness(1.1)",
  },

  ":active": {
    transform: "translateY(0px)",
    boxShadow:
      "0 4px 8px rgba(0,0,0,0.1), 0 -1px 0 rgba(255,255,255,0.2) inset, 0 2px 4px rgba(0,0,0,0.2) inset",
  },

  // 특별한 엠보싱 효과
  "::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    borderRadius: "8px",
    boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset",
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 50%)",
    pointerEvents: "none",
  },
});
