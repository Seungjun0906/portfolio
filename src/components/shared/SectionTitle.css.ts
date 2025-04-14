import { themeVars } from "@/styles/theme.css";
import { createTypographyStyle } from "@/styles/utils/createTypographyStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { style } from "@vanilla-extract/css";

export const container = style({
  marginBottom: "2rem",
});

export const title = style([
  responsiveStyle({
    base: {
      color: themeVars.colorByTheme.text.primary,
      ...createTypographyStyle("display3"),
      textAlign: "center",
      position: "relative",
      marginBottom: "1rem",
      ":after": {
        content: '""',
        position: "absolute",
        bottom: "-0.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "4px",
        background: themeVars.colorByTheme.primary[50],
        borderRadius: "2px",
      },
    },
    md: {
      ...createTypographyStyle("display2"),
    },
  }),
]);
