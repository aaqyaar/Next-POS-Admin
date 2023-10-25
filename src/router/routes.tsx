import { FC } from "react";
import { AuthGuard, GuestGuard } from "guards";
import { PATHS } from "./paths";
import { lazy } from "react";

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
    path: PATHS.dashboard.customers.root,
    component: lazy(() => import("pages/dashboard/orders")),
    guard: AuthGuard,
    isPublic: false,
  },
  {
    path: PATHS.dashboard.products.root,
    component: lazy(() => import("pages/dashboard/orders")),
    guard: AuthGuard,
    isPublic: false,
  },
  {
    path: PATHS.dashboard.users.root,
    component: lazy(() => import("pages/dashboard/users")),
    guard: AuthGuard,
    isPublic: false,
  },
  // ? Authentication routes
  {
    path: PATHS.auth.login,
    component: lazy(() => import("pages/auth/login")),
    isPublic: true,
    guard: GuestGuard,
  },
];
