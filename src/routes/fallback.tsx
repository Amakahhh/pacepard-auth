import Notfound from "../screens/error/not-found";
import RouteFallback from "../screens/error/error-ui";


export const fallbackRoutes = [

  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/route-fallback",
    element: <RouteFallback />,
  },
];
