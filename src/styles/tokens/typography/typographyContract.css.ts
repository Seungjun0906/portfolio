// styles/contracts/typographyVars.css.ts
import { createThemeContract } from "@vanilla-extract/css";

export const typographyVars = createThemeContract({
  fontFamily: {
    display: "font-family-display",
  },
  size: {
    display1: "font-size-display1",
    display2: "font-size-display2",
    headline1: "font-size-headline1",
    headline2: "font-size-headline2",
    subtitle1: "font-size-subtitle1",
    subtitle2: "font-size-subtitle2",
    body1: "font-size-body1",
    body2: "font-size-body2",
    caption: "font-size-caption",
  },
  lineHeight: {
    display1: "line-height-display1",
    display2: "line-height-display2",
    headline1: "line-height-headline1",
    headline2: "line-height-headline2",
    subtitle1: "line-height-subtitle1",
    subtitle2: "line-height-subtitle2",
    body1: "line-height-body1",
    body2: "line-height-body2",
    caption: "line-height-caption",
  },
  letterSpacing: {
    display1: "letter-spacing-display1",
    display2: "letter-spacing-display2",
    headline1: "letter-spacing-headline1",
    headline2: "letter-spacing-headline2",
    subtitle1: "letter-spacing-subtitle1",
    subtitle2: "letter-spacing-subtitle2",
    body1: "letter-spacing-body1",
    body2: "letter-spacing-body2",
    caption: "letter-spacing-caption",
  },
  weight: {
    display1: "font-weight-display1",
    display2: "font-weight-display2",
    headline1: "font-weight-headline1",
    headline2: "font-weight-headline2",
    subtitle1: "font-weight-subtitle1",
    subtitle2: "font-weight-subtitle2",
    body1: "font-weight-body1",
    body2: "font-weight-body2",
    caption: "font-weight-caption",
  },
  featureSettings: "font-feature-settings",
});
