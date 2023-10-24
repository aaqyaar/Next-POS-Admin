import { useStores } from "models/helpers";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "router/paths";
import { isEmpty, isBoolean, isNull } from "lodash";
import { observer } from "mobx-react-lite";

export const GuestGuard = observer(function GuestGuard() {
  const {
    authStore: {
      isAuthenticated,
      tokens: { accessToken },
    },
  } = useStores();

  const isAuth =
    !isNull(accessToken) && !isEmpty(accessToken) && isBoolean(isAuthenticated);

  return !isAuth ? <Outlet /> : <Navigate to={PATHS.dashboard.root} replace />;
});
