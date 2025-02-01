import { createBrowserRouter, Navigate } from "react-router-dom";
import { EditUser, ForgotPassword, Home, Login, UserList, Reports, Analytics, Settings } from "pages";
import { Error, Layout } from "components";
import ProtectedRoute from "utility/protected-routes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <UserList />,
      },
      {
        path: "/user/:id",
        element: <EditUser />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "*",
        element: <Navigate to="/error" replace />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

export default Router;
