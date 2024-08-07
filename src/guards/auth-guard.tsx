import { useStores } from "models/helpers";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PATHS } from "router/paths";
import { isEmpty, isBoolean, isNull } from "lodash";
import { observer } from "mobx-react-lite";

export const AuthGuard = observer(function AuthGuard() {
  const {
    authStore: {
      isAuthenticated,
      tokens: { accessToken },
    },
  } = useStores();
  const location = useLocation();

  const isAuth =
    !isNull(accessToken) && !isEmpty(accessToken) && isBoolean(isAuthenticated);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={`${PATHS.auth.login}?next=${location.pathname}`} replace />
  );
});
