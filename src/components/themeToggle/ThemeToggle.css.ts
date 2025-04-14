import { style } from "@vanilla-extract/css";

export const toggleButton = style({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  borderRadius: "50%",
});

export const sunContainer = style({
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  background: "radial-gradient(circle, #ffdb58 30%, #ff9d00 70%)",
  boxShadow: "0 0 20px rgba(255, 157, 0, 0.8)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const sunRaysContainer = style({
  position: "absolute",
  width: "100%",
  height: "100%",
});

export const sunRay = style({
  position: "absolute",
  width: "8px",
  height: "2px",
  background: "#ffdb58",
  left: "50%",
  top: "50%",
  transformOrigin: "0 0",
  boxShadow: "0 0 5px rgba(255, 219, 88, 0.8)",
});

export const moonContainer = style({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  background: "#D0D0D0",
  boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.5)",
  position: "relative",
  overflow: "hidden",
});

export const moonShadow = style({
  position: "absolute",
  top: "-5px",
  right: "-5px",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  background: "#2A2A35",
  boxShadow: "3px 3px 5px rgba(0,0,0,0.2)",
});
