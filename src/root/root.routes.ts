import { Routes } from "@angular/router";
import { AuthRoutes } from "../account/account.routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadComponent: () =>
      import("../account/login/login.component").then((c) => c.LoginComponent),
    children: AuthRoutes,
  },
];
