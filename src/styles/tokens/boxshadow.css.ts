// tokens/boxShadow.css.ts
import { createThemeContract } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

export const boxShadowVars = createThemeContract({
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  inner: null,
  outline: null,
});

// lightTheme.css.ts
export const lightBoxShadowTheme = createTheme(boxShadowVars, {
  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
  inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
});

export const darkBoxShadowTheme = createTheme(boxShadowVars, {
  xs: "0 1px 2px rgba(255, 255, 255, 0.05)",
  sm: "0 1px 3px rgba(255, 255, 255, 0.08), 0 1px 2px rgba(255, 255, 255, 0.06)",
  md: "0 4px 6px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.06)",
  lg: "0 10px 15px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(255, 255, 255, 0.05)",
  xl: "0 20px 25px rgba(255, 255, 255, 0.1), 0 10px 10px rgba(255, 255, 255, 0.04)",
  inner: "inset 0 2px 4px rgba(255, 255, 255, 0.06)",
  outline: "0 0 0 3px rgba(147, 197, 253, 0.5)",
});
