import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import App from "./App.tsx";

import "@styles/global.css";
import { WebStorageService } from "./services/WebStorageService.ts";
import { darkTheme, lightTheme } from "./styles/theme.css.ts";

const savedTheme = WebStorageService.getInstance().get("theme");
document.body.classList.add(savedTheme === "dark" ? darkTheme : lightTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
