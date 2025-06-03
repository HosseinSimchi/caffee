import { Routes } from "@angular/router";

export const AuthRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./login/login.component").then((m) => m.LoginComponent),
    pathMatch: "full",
  },
];
