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

// Anchor hover effect
globalStyle("a:hover", {
  textDecoration: "underline",
});
