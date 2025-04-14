import { createHashRouter } from "react-router-dom";
import Home from "@/pages/home/Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
