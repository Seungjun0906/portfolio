import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { themeVars } from "@/styles/theme.css";
import { createTypographyStyle } from "@/styles/utils/createTypographyStyle";

export const projectSection = responsiveStyle({
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

export const projectContent = responsiveStyle({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "900px",
    zIndex: 2,
    textAlign: "center",
    padding: "2rem",
    borderRadius: "1rem",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(76, 73, 73, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  md: {
    padding: "3rem",
  },
});

export const sectionHeading = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.medium,
      ...createTypographyStyle("display3"),
      marginBottom: "2rem",
    },
    md: {
      ...createTypographyStyle("display2"),
    },
  }),
]);

export const preparingMessage = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.muted,
      ...createTypographyStyle("headline2"),
    },
  }),
]);
