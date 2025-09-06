import Notfound from "@/screens/error/not-found";
import RouteFallback from "@/screens/error/error-ui";
import UnAAuthorized from "@/screens/error/unauthorized";


export const fallbackRoutes = [
  {
    path: "/unauthorized",
    element: <UnAAuthorized />,
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
