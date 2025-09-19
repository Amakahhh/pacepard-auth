<<<<<<< Updated upstream
import Notfound from "@/screens/error/not-found";
import RouteFallback from "@/screens/error/error-ui";
;
=======
import Notfound from "../screens/error/NotFound";
import RouteFallback from "../screens/error/ErrorUI";
import Unauthorized from "../screens/error/Unauthorized";
>>>>>>> Stashed changes


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
