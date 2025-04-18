import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { themeVars } from "@/styles/theme.css";
import { createTypographyStyle } from "@/styles/utils/createTypographyStyle";

export const container = style({
  minHeight: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4rem 2rem",

  position: "relative",
});

export const content = responsiveStyle({
  base: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});

export const bio = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("subtitle2"),
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "2rem",
      borderRadius: "1rem",
      backdropFilter: "blur(5px)",
      backgroundColor: "rgba(76, 73, 73, 0.1)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },
  }),
]);

export const techSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const techTitle = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("headline1"),
      textAlign: "center",
      marginBottom: "2rem",
    },
  }),
]);

export const categoryTitle = style([
  responsiveStyle({
    base: {
      marginTop: 12,
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("headline2"),
      marginBottom: 0,
      borderLeft: `4px solid ${themeVars.colorByTheme.text.primary}`,
      paddingLeft: "0.75rem",
    },
  }),
]);

export const techBadges = style({
  width: "100%",
  overflowX: "auto",
  paddingBottom: "1rem",
});

export const badgesContainer = responsiveStyle({
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    padding: "0.5rem",
  },
});

export const badgeWrapperDark = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(255, 255, 255, 0.42)",
  borderRadius: "1rem",
  padding: "0.5rem",
});

export const badgeWrapperLight = style({
  backdropFilter: "blur(5px)",
  borderRadius: "1rem",
  padding: "0.5rem",
});

export const resumeLink = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "3rem",
});

export const downloadButton = style({
  backgroundColor: themeVars.colorByTheme.primary[50],
  color: themeVars.color.white,
  padding: "1rem 2rem",
  borderRadius: "0.5rem",
  ...createTypographyStyle("subtitle2"),
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: themeVars.colorByTheme.primary[60],
    transform: "translateY(-2px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  ":active": {
    transform: "translateY(0)",
  },
});
