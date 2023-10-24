import { useStores } from "models/helpers";
import { Outlet } from "react-router-dom";

export function AuthGuard() {
  const {
    authStore: { isAuthenticated },
  } = useStores();

  return !isAuthenticated ? <Outlet /> : <div>Not Authenticated</div>;
}
