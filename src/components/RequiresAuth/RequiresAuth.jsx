import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function RequiresAuth({ children }) {
  const { auth } = useAuth();
  const { isSignnedIn, token } = auth;

  const location = useLocation();
  return isSignnedIn ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}
