import { useTheme } from "@/providers/ThemeProvider";
import * as styles from "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { onThemeToggle, isDark } = useTheme();

  return (
    <button
      onClick={onThemeToggle}
      className={styles.toggleButton}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <div className={styles.sunContainer}>
          <div className={styles.sunRaysContainer}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={styles.sunRay}
                style={{
                  transform: `rotate(${i * 45}deg) translateX(15px)`,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.moonContainer}>
          <div className={styles.moonShadow} />
        </div>
      )}
    </button>
  );
};
