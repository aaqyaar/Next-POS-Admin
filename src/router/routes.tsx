import { FC } from "react";
import { AuthGuard, GuestGuard } from "guards";
import { PATHS } from "./paths";
import { lazy, Suspense } from "react";
import { LoadingScreen } from "components";

const Loadable = (Component: FC) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

/**
 * Basic route type that the router consumes for dynamic generation
 */
type Route = {
  path: string;
  component: FC;
  guard?: FC;
  layout?: FC;
  isPublic: boolean;
};

/**
 * Define your routes here
 */
export const routes: Route[] = [
  {
    path: PATHS.dashboard.root,
    component: lazy(() => import("pages/dashboard/app")),
    guard: AuthGuard,
    isPublic: false,
  },
  {
    path: PATHS.dashboard.orders.root,
    component: lazy(() => import("pages/dashboard/orders")),
    guard: AuthGuard,
    isPublic: false,
  },
  {
    path: PATHS.auth.login,
    component: lazy(() => import("pages/auth/login")),
    isPublic: true,
    guard: GuestGuard,
  },
];
