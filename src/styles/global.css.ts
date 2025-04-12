import { globalStyle } from "@vanilla-extract/css";
import { aleo } from "./typography.css";
import { themeVars } from "./theme.css";

globalStyle("body", {
  fontFamily: `${aleo}, serif `,
  minHeight: "100vh",
  backgroundColor: themeVars.color.background,
  color: themeVars.color.text.primary,
  fontSize: "62.5%",
  margin: 0,
});

// Anchor hover effect
globalStyle("a:hover", {
  textDecoration: "underline",
});
