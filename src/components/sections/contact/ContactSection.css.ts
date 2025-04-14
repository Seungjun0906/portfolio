import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { themeVars } from "@/styles/theme.css";
import { createTypographyStyle } from "@/styles/utils/createTypographyStyle";

export const container = style({
  minHeight: "80dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 2rem",
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

export const contactGrid = style([
  responsiveStyle({
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
      marginTop: "2rem",
    },
    md: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "3rem",
    },
  }),
]);

export const contactCard = style([
  responsiveStyle({
    base: {
      padding: "2rem",
      borderRadius: "1rem",
      backdropFilter: "blur(5px)",
      backgroundColor: "rgba(76, 73, 73, 0.1)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ":hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      },
    },
  }),
]);

export const contactHeading = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("headline2"),
      marginBottom: "0.5rem",
    },
  }),
]);

export const contactLink = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("subtitle2"),
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      transition: "color 0.3s ease",
      ":hover": {
        color: themeVars.colorByTheme.primary[50],
      },
    },
  }),
]);

export const contactDescription = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("body1"),
    },
  }),
]);

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  backgroundColor: themeVars.colorByTheme.primary[50],
  color: themeVars.color.white,
});
