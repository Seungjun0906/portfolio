import { useTheme } from "@/providers/ThemeProvider";
import { CSSProperties } from "react";

interface ThemeToggleProps {
  className?: string;
  style?: CSSProperties;
}

export const ThemeToggle = ({ className, style }: ThemeToggleProps) => {
  const { onThemeToggle, isDark } = useTheme();

  return (
    <button
      onClick={onThemeToggle}
      className={className}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        borderRadius: "50%",
        ...style,
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #ffdb58 30%, #ff9d00 70%)",
            boxShadow: "0 0 20px rgba(255, 157, 0, 0.8)",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "2px",
                  background: "#ffdb58",
                  left: "50%",
                  top: "50%",
                  transformOrigin: "0 0",
                  transform: `rotate(${i * 45}deg) translateX(15px)`,
                  boxShadow: "0 0 5px rgba(255, 219, 88, 0.8)",
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#D0D0D0",
            boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.5)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#2A2A35",
              boxShadow: "3px 3px 5px rgba(0,0,0,0.2)",
            }}
          ></div>
        </div>
      )}
    </button>
  );
};
