import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  // ThemeProvider 안에서 만 사용되도록 보장
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
