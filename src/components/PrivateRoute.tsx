import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = "/login" }: ProtectedRouteProps) => {
  const [cookies] = useCookies(["authData"]);
  const { authData } = cookies;

  if (!authData?.token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
