import { StyleRule } from "@vanilla-extract/css";
import { typographyVars } from "../tokens/typography.css";

export const createTypographyStyle = (
  level: keyof typeof typographyVars.size
): StyleRule => ({
  fontFamily: typographyVars.fontFamily.display,
  fontSize: typographyVars.size[level],
  fontWeight: typographyVars.weight[level],
  lineHeight: typographyVars.lineHeight[level],
  letterSpacing: typographyVars.letterSpacing[level],
  fontFeatureSettings: typographyVars.featureSettings,
});
