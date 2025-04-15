import { style, keyframes, globalStyle } from "@vanilla-extract/css";

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0, pointerEvents: "none" },
});

export const ThemeToggleContainer = style({
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 200,
  transition: "opacity 0.3s ease",
});

globalStyle("body.scrolled-down ." + ThemeToggleContainer, {
  "@media": {
    "(max-width: 768px)": {
      animation: `${fadeOut} 0.3s forwards`,
    },
  },
});

export const background = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});
