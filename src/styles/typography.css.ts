import { globalFontFace, style } from "@vanilla-extract/css";

export const aleo = "Aleo";

globalFontFace(aleo, [
  {
    src: 'url("/fonts/aelo/Aleo-Regular.ttf") format("truetype")',
    fontWeight: 400,
    fontStyle: "normal",
  },
  {
    src: 'url("/fonts/aelo/Aleo-Medium.ttf") format("truetype")',
    fontWeight: 500,
    fontStyle: "normal",
  },
  {
    src: 'url("/fonts/aelo/Aleo-SemiBold.ttf") format("truetype")',
    fontWeight: 600,
    fontStyle: "normal",
  },
  {
    src: 'url("/fonts/aelo/Aleo-Bold.ttf") format("truetype")',
    fontWeight: 700,
    fontStyle: "normal",
  },
]);

const fontFeatureSettings = `'case' on, 'cpsp' on, 'salt' on, 'ss01' on, 'ss02' on, 'ss03' on, 'ss05' on, 'ss06' on,
  'ss07' on, 'ss08' on, 'cv01' on, 'cv02' on, 'cv03' on, 'cv04' on, 'cv05' on, 'cv07' on, 'cv08' on, 'cv09' on,
  'cv10' on, 'cv11' on, 'cv12' on`;

export const display1 = style({
  fontWeight: 700,
  fontSize: "56px",
  lineHeight: "72px",
  letterSpacing: "-0.04em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const display2 = style({
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "64px",
  letterSpacing: "-0.035em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const headline1 = style({
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "48px",
  letterSpacing: "-0.03em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const headline2 = style({
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "42px",
  letterSpacing: "-0.02em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const subtitle1 = style({
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "32px",
  letterSpacing: "-0.015em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const subtitle2 = style({
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "28px",
  letterSpacing: "-0.01em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const body1 = style({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const body2 = style({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});

export const caption = style({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.01em",
  fontFamily: `${aleo}, serif`,
  fontFeatureSettings,
});
