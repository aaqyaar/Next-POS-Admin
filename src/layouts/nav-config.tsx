import {
  DashboardRounded,
  ShoppingCartRounded,
  GroupRounded,
  PersonRounded,
  ReadMoreRounded,
  ProductionQuantityLimitsRounded,
} from "@mui/icons-material";
import { FC } from "react";
import { PATHS } from "router/paths";

interface NavConfig {
  path: string;
  name: string;
  icon?: FC;
  children?: NavConfig[];
}

export const navConfig: NavConfig[] = [
  {
    path: PATHS.dashboard.root,
    name: "Dashboard",
    icon: DashboardRounded,
  },
  {
    path: PATHS.dashboard.orders.root,
    name: "Orders",
    icon: ShoppingCartRounded,
  },
  {
    path: PATHS.dashboard.customers.root,
    name: "Customers",
    icon: GroupRounded,
  },
  {
    path: PATHS.dashboard.products.root,
    name: "Products",
    icon: ProductionQuantityLimitsRounded,
  },
  {
    path: PATHS.dashboard.reports.root,
    name: "Reports",
    icon: ReadMoreRounded,
  },
  {
    path: PATHS.dashboard.users.root,
    name: "Users",
    icon: PersonRounded,
    children: [
      {
        path: PATHS.dashboard.users.root,
        name: "List",
      },
      {
        path: PATHS.dashboard.users.add,
        name: "Create a new user",
      },
      {
        path: PATHS.dashboard.users.roles.root,
        name: "Roles & permission",
      },
    ],
  },
];
