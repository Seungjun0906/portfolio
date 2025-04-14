import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { themeVars } from "@/styles/theme.css";
import { createTypographyStyle } from "@/styles/utils/createTypographyStyle";

export const container = responsiveStyle({
  base: {
    padding: "0 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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

export const timelineContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  marginTop: "1rem",
});

export const experienceCard = style({
  position: "relative",
  padding: "2rem",
  borderRadius: "1rem",
  backgroundColor: "rgba(76, 73, 73, 0.05)",
  backdropFilter: "blur(5px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
  borderLeft: `4px solid ${themeVars.colorByTheme.primary[50]}`,
});

export const company = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("headline1"),
      marginBottom: "0.25rem",
    },
  }),
]);

export const period = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.primary[70],
      ...createTypographyStyle("caption"),
      marginBottom: "1rem",
    },
  }),
]);

export const responsibilities = style({
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const responsibilityItem = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.surface,
      ...createTypographyStyle("body2"),
      display: "flex",
      alignItems: "flex-start",
      gap: "0.5rem",
    },
  }),
]);

export const bullet = style({
  color: themeVars.colorByTheme.primary[50],
  marginRight: "0.5rem",
});

export const learningPoints = style({
  marginTop: "1.5rem",
});

export const learningTitle = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("headline2"),
      marginBottom: "0.75rem",
    },
  }),
]);

export const learningList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const learningItem = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.medium,
      ...createTypographyStyle("body2"),
      display: "flex",
      alignItems: "flex-start",
    },
  }),
]);
