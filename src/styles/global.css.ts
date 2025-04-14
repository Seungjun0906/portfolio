import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";
import { aleo } from "./tokens/typography.css";

globalStyle("body", {
  fontFamily: `${aleo}, serif `,
  minHeight: "100vh",
  backgroundColor: themeVars.colorByTheme.background,
  color: themeVars.colorByTheme.text.primary,
  fontSize: "62.5%",
  margin: 0,
});

// Hide scrollbar on both html and body
globalStyle("html, body", {
  overflow: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  scrollSnapType: "y mandatory",
});

globalStyle(".section", {
  scrollSnapAlign: "start",
});

globalStyle("html::-webkit-scrollbar", {
  display: "none",
});

globalStyle("body::-webkit-scrollbar", {
  display: "none",
});

// Anchor hover effect
globalStyle("a:hover", {
  textDecoration: "underline",
});
