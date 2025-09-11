
import Login from "@/screens/auth/Login";
import { lazy } from "react";


const Preview = lazy(() => import("../screens/Preview"));

export const publicRoutes = [
  
  
  { path: "/preview", element: <Preview /> },
  { path: "/login", element: <Login /> },
];
