import { globalFontFace, style } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

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

// const fontFeatureSettings = `'case' on, 'cpsp' on, 'salt' on, 'ss01' on, 'ss02' on, 'ss03' on, 'ss05' on, 'ss06' on,
//   'ss07' on, 'ss08' on, 'cv01' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv05' on, 'cv07' on, 'cv08' on, 'cv09' on,
//   'cv10' on, 'cv11' on, 'cv12' on`;

// export const display1 = style({
//   fontWeight: 700,
//   fontSize: "56px",
//   lineHeight: "72px",
//   letterSpacing: "-0.04em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const display2 = style({
//   fontWeight: 700,
//   fontSize: "48px",
//   lineHeight: "64px",
//   letterSpacing: "-0.035em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const headline1 = style({
//   fontWeight: 700,
//   fontSize: "32px",
//   lineHeight: "48px",
//   letterSpacing: "-0.03em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const headline2 = style({
//   fontWeight: 600,
//   fontSize: "28px",
//   lineHeight: "42px",
//   letterSpacing: "-0.02em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const subtitle1 = style({
//   fontWeight: 600,
//   fontSize: "20px",
//   lineHeight: "32px",
//   letterSpacing: "-0.015em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const subtitle2 = style({
//   fontWeight: 500,
//   fontSize: "18px",
//   lineHeight: "28px",
//   letterSpacing: "-0.01em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const body1 = style({
//   fontWeight: 400,
//   fontSize: "16px",
//   lineHeight: "24px",
//   letterSpacing: "0em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const body2 = style({
//   fontWeight: 400,
//   fontSize: "14px",
//   lineHeight: "20px",
//   letterSpacing: "0em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });

// export const caption = style({
//   fontWeight: 400,
//   fontSize: "12px",
//   lineHeight: "16px",
//   letterSpacing: "0.01em",
//   fontFamily: `${aleo}, serif`,
//   fontFeatureSettings,
// });


export const makeTypographyStyle = (level: keyof typeof typographyVars.size) =>
  style({
    fontFamily: typographyVars.fontFamily.display,
    fontSize: typographyVars.size[level],
    fontWeight: typographyVars.weight[level],
    lineHeight: typographyVars.lineHeight[level],
    letterSpacing: typographyVars.letterSpacing[level],
    fontFeatureSettings: typographyVars.featureSettings,
  });