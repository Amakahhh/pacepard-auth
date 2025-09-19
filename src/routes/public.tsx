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
];
