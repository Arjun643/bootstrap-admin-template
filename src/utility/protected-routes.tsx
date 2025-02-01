import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageData } from "./localStorage";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = getLocalStorageData("isLoggedIn", "false") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
