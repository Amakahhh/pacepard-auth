import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryProvider } from "@/services/cache-query.tsx";
import { Toaster } from "sonner";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <App />
      <Toaster position="top-right"/>
    </QueryProvider>
  </StrictMode>
);