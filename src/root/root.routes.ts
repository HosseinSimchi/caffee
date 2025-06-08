import { Routes } from "@angular/router";
import { AuthRoutes } from "../account/account.routes";
import { ApplicationRoutes } from "../app/app.routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "app",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadComponent: () =>
      import("../account/login/login.component").then((c) => c.LoginComponent),
    children: AuthRoutes,
  },
  {
    path: "app",
    loadComponent: () =>
      import("../app/app.component").then((c) => c.AppComponent),
    children: ApplicationRoutes,
  },
];
