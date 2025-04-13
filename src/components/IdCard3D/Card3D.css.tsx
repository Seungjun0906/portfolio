import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { style } from "@vanilla-extract/css";

export const card = style({
  width: "200px",
  height: "280px",
  borderRadius: "12px",
  background: "#ffffffee",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Aleo, sans-serif",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  position: "relative",
});

export const cardContent = style({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
});

export const avatar = style({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "0.5rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
});

export const nameText = style({
  fontSize: "1.2rem",
  fontWeight: 600,
  margin: 0,
});

export const roleText = style({
  fontSize: "0.9rem",
  color: "#555",
  margin: 0,
});

export const iconRow = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
});

export const iconButton = style({
  color: "#333",
  fontSize: "1.2rem",
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      color: "#0070f3",
    },
  },
});

export const flipButton = style({
  padding: "0.3rem 0.6rem",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#0070f3",
  color: "#fff",
  cursor: "pointer",
  fontSize: "0.8rem",
  marginTop: "0.5rem",
  transition: "background-color 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: "#005bd1",
    },
  },
});

export const link = style({
  cursor: "pointer",
  color: "#0070f3",
  textDecoration: "none",
  fontSize: "0.8rem",
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      color: "#005bd1",
    },
  },
});

export const idCardContainer = responsiveStyle({
  base: {
    width: "100%",
    height: "500px",
    maxWidth: "100%",
    maxHeight: "100vh",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
  },
  md: {
    height: "350px",
  },
});
