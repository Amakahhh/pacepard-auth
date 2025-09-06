import Home from "@/screens/home";


export const privateRoutes = [
  {
    path: "/",
    element: <Home />,
    roles: ["admin", "staff", "preacher"],
  }

];
