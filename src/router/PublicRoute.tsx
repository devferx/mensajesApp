import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export const PublicRoute = ({
  isAuthenticated,
  children,
}: PublicRouteProps) => {
  return isAuthenticated ? (
    (children as JSX.Element)
  ) : (
    <Navigate to="/auth/login" />
  );
};
