import { style, keyframes } from "@vanilla-extract/css";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { themeVars } from "@/styles/theme.css";
import { createTypographyStyle } from "@/styles/utils/createTypographyStyle";

const pulse = keyframes({
  "0%": { opacity: 0.5 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0.5 },
});

export const heroSection = responsiveStyle({
  base: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    boxSizing: "border-box",
    overflow: "hidden",
  },
});

export const heroContent = responsiveStyle({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "900px",
    zIndex: 2,
  },
});

export const textContent = responsiveStyle({
  base: {
    width: "100%",
    textAlign: "center",
    zIndex: 2,
    padding: "2rem",
    borderRadius: "1rem",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  md: {
    textAlign: "center",
    padding: "3rem",
  },
});

export const mainHeading = style([
  responsiveStyle({
    base: {
      color: themeVars.color.grayscale[20],
      ...createTypographyStyle("display2"),
    },
    md: {
      ...createTypographyStyle("display1"),
    },
  }),
]);

export const subHeading = style([
  responsiveStyle({
    base: {
      color: themeVars.color.grayscale[50],
      ...createTypographyStyle("display3"),
    },
    md: {
      ...createTypographyStyle("display2"),
    },
  }),
]);

export const slogan = style([
  responsiveStyle({
    base: {
      color: themeVars.color.blue[30],
      ...createTypographyStyle("headline2"),
    },
  }),
]);

export const scrollIndicator = style({
  position: "absolute",
  bottom: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: themeVars.color.grayscale[10],
  zIndex: 2,
  ...createTypographyStyle("body1"),
});

export const scrollArrow = style({
  fontSize: "1.5rem",
  marginTop: "0.5rem",
  animation: `${pulse} 2s infinite ease-in-out`,
});
