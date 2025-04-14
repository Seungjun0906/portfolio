import { style, StyleRule } from "@vanilla-extract/css";
import { mediaQuery } from "../tokens/breakpoints";

type Responsive<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export function responsiveStyle(styles: Responsive<StyleRule>) {
  const base = styles.base ?? {};
  const queries: Record<string, any> = {};

  if (styles.sm) queries[`@media`] = { [mediaQuery.sm]: styles.sm };
  if (styles.md)
    queries[`@media`] = { ...queries[`@media`], [mediaQuery.md]: styles.md };
  if (styles.lg)
    queries[`@media`] = { ...queries[`@media`], [mediaQuery.lg]: styles.lg };
  if (styles.xl)
    queries[`@media`] = { ...queries[`@media`], [mediaQuery.xl]: styles.xl };

  return style({
    ...base,
    ...queries,
  });
}
