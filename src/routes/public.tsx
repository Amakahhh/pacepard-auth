<<<<<<< Updated upstream

import ForgotPassword from "@/screens/auth/ForgotPassword";
import Login from "@/screens/auth/Login";
import Register from "@/screens/auth/Register";
import ResetPassword from "@/screens/auth/ResetPassword";
import Verification from "@/screens/auth/Verification";
import { lazy } from "react";


const Preview = lazy(() => import("../screens/Preview"));

export const publicRoutes = [
  
  
  { path: "/preview", element: <Preview /> },
  
  { path: "/register", element: <Register /> },
  { path: "/verify-otp", element: <Verification /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },  
  
  
=======
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import OTP from "../screens/OTP";
import VerifyEmail from "../screens/VerifyEmail";
import CreateNewPassword from "../screens/CreateNewPassword";

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/otp",
    element: <OTP />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/create-new-password",
    element: <CreateNewPassword />,
  },
  {
    path: "/",
    element: <Login />,
  },
>>>>>>> Stashed changes
];
