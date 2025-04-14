import { style } from "@vanilla-extract/css";

export const ThemeToggleContainer = style({
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 200,
});

export const background = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});
