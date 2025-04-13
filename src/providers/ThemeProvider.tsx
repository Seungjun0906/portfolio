import React, { useLayoutEffect, useState } from "react";
import {
  lightTheme,
  darkTheme,
  themeVars,
  commonTheme,
} from "@/styles/theme.css";
import { WebStorageService } from "@/services/WebStorageService";
import { useContext } from "react";
import { typographyTheme } from "@/styles/tokens/typography.css";
import {
  darkBoxShadowTheme,
  lightBoxShadowTheme,
} from "@/styles/tokens/boxshadow.css";

type ThemeType = "light" | "dark";

/**
 * 전역 테마 상태를 관리하고 다크/라이트 모드를 전환하는 프로바이더
 */
const getSystemTheme = (): ThemeType => {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeContext = React.createContext<{
  theme: ThemeType;
  isDark: boolean;
  themeVars: typeof themeVars;
  onThemeToggle: () => void;
}>({
  theme: "light",
  isDark: false,
  onThemeToggle: () => {},
  themeVars,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useLayoutEffect(() => {
    document.body.classList.add(commonTheme, typographyTheme);
  }, []);

  useLayoutEffect(() => {
    const savedTheme = WebStorageService.getInstance().get<ThemeType>("theme");
    const systemTheme = getSystemTheme();

    const isDefined = savedTheme === "light" || savedTheme === "dark";
    const finalTheme = isDefined ? savedTheme : systemTheme;

    if (!isDefined) {
      WebStorageService.getInstance().set("theme", finalTheme);
    }

    document.body.classList.remove(
      lightTheme,
      darkTheme,
      lightBoxShadowTheme,
      darkBoxShadowTheme
    );
    document.body.classList.add(
      finalTheme === "light" ? lightTheme : darkTheme
    );

    setTheme(finalTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeVars,
        theme,
        isDark: theme === "dark",
        onThemeToggle: () => {
          setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            WebStorageService.getInstance().set("theme", newTheme);

            document.body.classList.remove(lightTheme, darkTheme);
            document.body.classList.add(
              newTheme === "light" ? lightTheme : darkTheme
            );

            return newTheme;
          });
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  // ThemeProvider 안에서 만 사용되도록 보장
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
