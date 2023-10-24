import { FC } from "react";
import { DashboardApp, LoginPage } from "pages";
import { AuthGuard } from "guards";
import { PATHS } from "./paths";

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
    component: DashboardApp,
    guard: AuthGuard,
    isPublic: false,
  },
  {
    path: PATHS.auth.login,
    component: LoginPage,
    isPublic: true,
    guard: undefined,
  },
];
