import { globalStyle } from "@vanilla-extract/css";
import { aleo } from "./typography.css";
import { themeVars } from "./theme.css";

globalStyle("body", {
  fontFamily: aleo,
  minHeight: "100vh",
  backgroundColor: themeVars.color.background,
  color: themeVars.color.text.primary,
});

// Anchor hover effect
globalStyle("a:hover", {
  textDecoration: "underline",
});
