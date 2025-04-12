import { createTheme } from "@vanilla-extract/css";
import { typographyVars } from "./typographyContract.css";

export const typographyTheme = createTheme(typographyVars, {
  fontFamily: {
    display: "'Aleo', serif",
  },
  size: {
    display1: "56px",
    display2: "48px",
    headline1: "32px",
    headline2: "28px",
    subtitle1: "20px",
    subtitle2: "18px",
    body1: "16px",
    body2: "14px",
    caption: "12px",
  },
  lineHeight: {
    display1: "72px",
    display2: "64px",
    headline1: "48px",
    headline2: "42px",
    subtitle1: "32px",
    subtitle2: "28px",
    body1: "24px",
    body2: "20px",
    caption: "16px",
  },
  letterSpacing: {
    display1: "-0.04em",
    display2: "-0.035em",
    headline1: "-0.03em",
    headline2: "-0.02em",
    subtitle1: "-0.015em",
    subtitle2: "-0.01em",
    body1: "0em",
    body2: "0em",
    caption: "0.01em",
  },
  weight: {
    display1: "700",
    display2: "700",
    headline1: "700",
    headline2: "600",
    subtitle1: "600",
    subtitle2: "500",
    body1: "400",
    body2: "400",
    caption: "400",
  },
  featureSettings: `"calt" 1, "liga" 1, "kern" 1`,
});
