import React, { useLayoutEffect, useState } from "react";
import { lightTheme, darkTheme } from "@styles/theme.css";
import { WebStorageService } from "@services/WebStorageService";

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
  onThemeToggle: () => void;
}>({
  theme: "light",
  onThemeToggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useLayoutEffect(() => {
    const savedTheme = WebStorageService.getInstance().get<ThemeType>("theme");
    const systemTheme = getSystemTheme();

    const isDefined = savedTheme === "light" || savedTheme === "dark";
    const finalTheme = isDefined ? savedTheme : systemTheme;

    if (!isDefined) {
      WebStorageService.getInstance().set("theme", finalTheme);
    }

    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(
      finalTheme === "light" ? lightTheme : darkTheme
    );

    setTheme(finalTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
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
