import Notfound from "@/screens/error/not-found";
import RouteFallback from "@/screens/error/error-ui";
import Unauthorized from "@/screens/error/unauthorized";


export const fallbackRoutes = [
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/route-fallback",
    element: <RouteFallback />,
  },
];
