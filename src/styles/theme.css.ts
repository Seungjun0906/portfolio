import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    primary: {
      10: null,
      20: null,
      30: null,
      40: null,
      50: null,
      60: null,
      70: null,
    },
    secondary: {
      10: null,
      20: null,
      30: null,
      40: null,
      50: null,
      60: null,
      70: null,
    },
    neutral: {
      10: null,
      20: null,
      30: null,
      40: null,
      50: null,
      60: null,
      70: null,
    },
    text: {
      primary: null, // 강조 텍스트 (가장 선명)
      surface: null, // 표면 위에 올려질 기본 텍스트
      medium: null, // 중간 강도의 텍스트
      muted: null, // 부드러운 텍스트
      disabled: null, // 비활성화 상태 텍스트
    },
    background: null,
    surface: null,
    border: null,
  },
});

export const lightTheme = createTheme(themeVars, {
  color: {
    primary: {
      10: "#e6eef6",
      20: "#c7d8ea",
      30: "#a2bad4",
      40: "#7b9cc0",
      50: "#567ea9",
      60: "#345e90",
      70: "#123458", // your core color
    },
    secondary: {
      10: "#f6f3ef",
      20: "#ede5db",
      30: "#e3d8c9",
      40: "#d4c9be", // your base
      50: "#b9b0a7",
      60: "#9f978f",
      70: "#837a73",
    },
    neutral: {
      10: "#f1efec", // light background
      20: "#e0dedb",
      30: "#c4c1bd",
      40: "#a7a4a1",
      50: "#888582",
      60: "#555452",
      70: "#030303", // your darkest
    },
    background: "#f1efec",
    surface: "#ffffff",
    text: {
      primary: "#030303", // 가장 강조되는 텍스트
      surface: "#222222", // 카드나 surface 위의 일반 텍스트
      medium: "#555555", // 중간 강조
      muted: "#888888", // 설명, 서브 텍스트
      disabled: "#bbbbbb", // 비활성 상태 (placeholder 등)
    },
    border: "#dcdcdc",
  },
});

export const darkTheme = createTheme(themeVars, {
  color: {
    primary: {
      10: "#0a1a28",
      20: "#123458", // your core color, now in lower tier
      30: "#2a4a6d",
      40: "#456484",
      50: "#6a86a1",
      60: "#90a9bd",
      70: "#b6cbda",
    },
    secondary: {
      10: "#2e2925",
      20: "#49413b",
      30: "#655d54",
      40: "#9f978f", // was 60 in light, now becomes 40 in dark
      50: "#b9b0a7",
      60: "#d4c9be", // your original base
      70: "#e8e1d8",
    },
    neutral: {
      10: "#030303", // your darkest
      20: "#1f1f1f",
      30: "#3c3c3c",
      40: "#555452",
      50: "#888582",
      60: "#b4b2b0",
      70: "#f1efec", // your lightest
    },
    background: "#030303",
    surface: "#1a1a1a",
    text: {
      primary: "#f1efec", // 강조되는 텍스트
      surface: "#e4e1dd", // 카드나 surface 위의 일반 텍스트
      medium: "#c4c1bd", // 중간 강조
      muted: "#a29e9a", // 설명, 서브 텍스트
      disabled: "#777573", // 비활성 상태 (placeholder 등)
    },
    border: "#333333",
  },
});
