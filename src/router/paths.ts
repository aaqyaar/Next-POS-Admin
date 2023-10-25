const path = (root: string, path: string) => {
  return `${root}${path}`;
};

const MAIN_APP = "/";
const AUTH = "/auth";
const DASHBOARD = "/dashboard";

export const PATHS = {
  root: MAIN_APP,
  auth: {
    login: path(AUTH, "/login"),
    register: path(AUTH, "/register"),
    forgotPassword: path(AUTH, "/forgot-password"),
    resetPassword: path(AUTH, "/reset-password"),
  },
  dashboard: {
    root: path(DASHBOARD, "/app"),

    products: {
      root: path(DASHBOARD, "/products"),
      add: path(DASHBOARD, "/products/add"),
      edit: path(DASHBOARD, "/products/edit"),
    },
    categories: {
      root: path(DASHBOARD, "/categories"),
      add: path(DASHBOARD, "/categories/add"),
      edit: path(DASHBOARD, "/categories/edit"),
    },
    orders: {
      root: path(DASHBOARD, "/orders"),
      add: path(DASHBOARD, "/orders/add"),
      edit: path(DASHBOARD, "/orders/edit"),
    },
    customers: {
      root: path(DASHBOARD, "/customers"),
      add: path(DASHBOARD, "/customers/add"),
      edit: path(DASHBOARD, "/customers/edit"),
    },
    reports: {
      root: path(DASHBOARD, "/reports"),
      activityFilter: path(DASHBOARD, "/reports/activity-filter"),
    },
    settings: {
      root: path(DASHBOARD, "/settings"),
    },
    support: path(DASHBOARD, "/support"),
    // Users and Roles
    users: {
      root: path(DASHBOARD, "/users"),
      add: path(DASHBOARD, "/users/add"),
      edit: path(DASHBOARD, "/users/edit"),
      // roles
      roles: {
        root: path(DASHBOARD, "/users/roles"),
        add: path(DASHBOARD, "/users/roles/add"),
        edit: path(DASHBOARD, "/users/roles/edit"),
      },
    },
  },
};
