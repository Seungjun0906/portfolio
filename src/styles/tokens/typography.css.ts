import { createTheme } from "@vanilla-extract/css";
import { createThemeContract } from "@vanilla-extract/css";
import { globalFontFace } from "@vanilla-extract/css";

export const aleo = "Aleo";

globalFontFace(aleo, [
  {
    src: 'url("/fonts/aleo/Aleo-Regular.ttf") format("truetype")',
    fontWeight: 400,
    fontStyle: "normal",
  },
  {
    src: 'url("/fonts/aleo/Aleo-Medium.ttf") format("truetype")',
    fontWeight: 500,
    fontStyle: "normal",
  },
  {
    src: 'url("/fonts/aleo/Aleo-SemiBold.ttf") format("truetype")',
    fontWeight: 600,
    fontStyle: "normal",
  },
  {
    src: 'url("/fonts/aleo/Aleo-Bold.ttf") format("truetype")',
    fontWeight: 700,
    fontStyle: "normal",
  },
]);

export const typographyVars = createThemeContract({
  fontFamily: {
    display: "font-family-display",
  },
  size: {
    display1: "font-size-display1",
    display2: "font-size-display2",
    display3: "font-size-display3",
    display4: "font-size-display4",
    headline1: "font-size-headline1",
    headline2: "font-size-headline2",
    subtitle1: "font-size-subtitle1",
    subtitle2: "font-size-subtitle2",
    body1: "font-size-body1",
    body2: "font-size-body2",
    caption: "font-size-caption",
    // Add badge sizes
    badge1: "font-size-badge1",
    badge2: "font-size-badge2",
    badge3: "font-size-badge3",
    badge4: "font-size-badge4",
  },
  lineHeight: {
    display1: "line-height-display1",
    display2: "line-height-display2",
    display3: "line-height-display3",
    display4: "line-height-display4",
    headline1: "line-height-headline1",
    headline2: "line-height-headline2",
    subtitle1: "line-height-subtitle1",
    subtitle2: "line-height-subtitle2",
    body1: "line-height-body1",
    body2: "line-height-body2",
    caption: "line-height-caption",
    // Add badge line heights
    badge1: "line-height-badge1",
    badge2: "line-height-badge2",
    badge3: "line-height-badge3",
    badge4: "line-height-badge4",
  },
  letterSpacing: {
    display1: "letter-spacing-display1",
    display2: "letter-spacing-display2",
    display3: "letter-spacing-display3",
    display4: "letter-spacing-display4",
    headline1: "letter-spacing-headline1",
    headline2: "letter-spacing-headline2",
    subtitle1: "letter-spacing-subtitle1",
    subtitle2: "letter-spacing-subtitle2",
    body1: "letter-spacing-body1",
    body2: "letter-spacing-body2",
    caption: "letter-spacing-caption",
    // Add badge letter spacings
    badge1: "letter-spacing-badge1",
    badge2: "letter-spacing-badge2",
    badge3: "letter-spacing-badge3",
    badge4: "letter-spacing-badge4",
  },
  weight: {
    display1: "font-weight-display1",
    display2: "font-weight-display2",
    display3: "font-weight-display3",
    display4: "font-weight-display4",
    headline1: "font-weight-headline1",
    headline2: "font-weight-headline2",
    subtitle1: "font-weight-subtitle1",
    subtitle2: "font-weight-subtitle2",
    body1: "font-weight-body1",
    body2: "font-weight-body2",
    caption: "font-weight-caption",
    // Add badge weights
    badge1: "font-weight-badge1",
    badge2: "font-weight-badge2",
    badge3: "font-weight-badge3",
    badge4: "font-weight-badge4",
  },
  featureSettings: "font-feature-settings",
});

export const typographyTheme = createTheme(typographyVars, {
  fontFamily: {
    display: "'Aleo', serif",
  },
  size: {
    display1: "56px",
    display2: "48px",
    display3: "40px",
    display4: "36px",
    headline1: "32px",
    headline2: "28px",
    subtitle1: "20px",
    subtitle2: "18px",
    body1: "16px",
    body2: "14px",
    caption: "12px",
    // Badge sizes based on TechBadge styling
    badge1: "0.9rem", // Based on TechBadge fontSize
    badge2: "0.8rem",
    badge3: "0.75rem",
    badge4: "0.7rem",
  },
  lineHeight: {
    display1: "72px",
    display2: "64px",
    display3: "56px",
    display4: "48px",
    headline1: "48px",
    headline2: "42px",
    subtitle1: "32px",
    subtitle2: "28px",
    body1: "24px",
    body2: "20px",
    caption: "16px",
    // Badge line heights
    badge1: "1.2",
    badge2: "1.2",
    badge3: "1.2",
    badge4: "1.2",
  },
  letterSpacing: {
    display1: "-0.04em",
    display2: "-0.035em",
    display3: "-0.03em",
    display4: "-0.02em",
    headline1: "-0.03em",
    headline2: "-0.02em",
    subtitle1: "-0.015em",
    subtitle2: "-0.01em",
    body1: "0em",
    body2: "0em",
    caption: "0.01em",
    // Badge letter spacings
    badge1: "0.01em",
    badge2: "0.01em",
    badge3: "0.01em",
    badge4: "0.01em",
  },
  weight: {
    display1: "700",
    display2: "700",
    display3: "700",
    display4: "700",
    headline1: "700",
    headline2: "600",
    subtitle1: "600",
    subtitle2: "500",
    body1: "400",
    body2: "400",
    caption: "400",
    // Badge weights - based on TechBadge's "bold" fontWeight
    badge1: "700",
    badge2: "700",
    badge3: "600",
    badge4: "600",
  },
  featureSettings: `"calt" 1, "liga" 1, "kern" 1`,
});
