import { globalStyle } from "@vanilla-extract/css";

// 마진 패딩 제거
globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

// 리스트 스타일 제거
globalStyle("ul, ol", {
  listStyle: "none",
});

// 링크 스타일 제거
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

// 폰트 설정
globalStyle("h1, h2, h3, h4, h5, h6", {
  fontWeight: "inherit",
  fontSize: "inherit",
});
