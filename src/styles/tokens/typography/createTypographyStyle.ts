import { style } from "@vanilla-extract/css";
import { typographyVars } from "./typographyContract.css";

export const makeTypographyStyle = (level: keyof typeof typographyVars.size) =>
  style({
    fontFamily: typographyVars.fontFamily.display,
    fontSize: typographyVars.size[level],
    fontWeight: typographyVars.weight[level],
    lineHeight: typographyVars.lineHeight[level],
    letterSpacing: typographyVars.letterSpacing[level],
    fontFeatureSettings: typographyVars.featureSettings,
  });
