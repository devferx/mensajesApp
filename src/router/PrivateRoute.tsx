import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export const PrivateRoute = ({
  isAuthenticated,
  children,
}: PrivateRouteProps) => {
  return isAuthenticated ? <Navigate to="/" /> : (children as JSX.Element);
};
