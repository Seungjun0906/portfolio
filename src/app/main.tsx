import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@/providers/ThemeProvider.tsx";

import "@/styles/global.css";
import { WebStorageService } from "@/services/WebStorageService.ts";
import { darkTheme, lightTheme } from "@/styles/theme.css.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { ScrollProvider } from "@/providers/ScrollProvider.tsx";
import MouseTrailProvider from "@/providers/MouseTrailProvider.tsx";

const savedTheme = WebStorageService.getInstance().get("theme");
document.body.classList.add(savedTheme === "dark" ? darkTheme : lightTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <MouseTrailProvider>
          <RouterProvider router={router} />
        </MouseTrailProvider>
      </ScrollProvider>
    </ThemeProvider>
  </StrictMode>
);
