
import { lazy } from "react";


const Preview = lazy(() => import("../screens/Preview"));

export const publicRoutes = [
  
  
  { path: "/preview", element: <Preview /> },
];
